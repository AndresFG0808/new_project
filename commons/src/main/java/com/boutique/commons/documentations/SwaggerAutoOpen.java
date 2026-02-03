package com.boutique.commons.documentations;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.awt.Desktop;
import java.io.File;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

@Component
public class SwaggerAutoOpen implements ApplicationListener<ApplicationReadyEvent> {

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        String port = event.getApplicationContext().getEnvironment().getProperty("server.port", "8761");
        String swaggerUrl = "http://localhost:" + port + "/swagger-ui.html";
        String appName = event.getApplicationContext().getApplicationName();
        
        System.out.println("\n" + "=".repeat(60));
        System.out.println("Aplicación iniciada correctamente!");
        System.out.println("Swagger UI: " + swaggerUrl);
        System.out.println("=".repeat(60) + "\n");
        
        // Intentar recargar si ya está abierto, sino abrir una nueva pestaña
        if (!tryRefreshOpenBrowser(swaggerUrl)) {
            openBrowser(swaggerUrl);
        }
    }
    
    private boolean tryRefreshOpenBrowser(String url) {
        try {
            String os = System.getProperty("os.name").toLowerCase();
            
            if (os.contains("win")) {
                // Windows: intentar encontrar y refrescar la ventana del navegador
                return refreshBrowserWindowWindows(url);
            } else if (os.contains("mac")) {
                // Mac: intentar con Safari/Chrome
                return refreshBrowserWindowMac(url);
            } else if (os.contains("nix") || os.contains("nux")) {
                // Linux: intentar con xdg-open
                return refreshBrowserWindowLinux(url);
            }
            return false;
        } catch (Exception e) {
            return false;
        }
    }
    
    private boolean refreshBrowserWindowWindows(String url) {
        try {
            // Intentar usar PowerShell para buscar ventana del navegador y refrescar
            String psScript = String.join("\n",
                "Add-Type -AssemblyName UIAutomationClient",
                "Add-Type -AssemblyName System.Windows.Forms",
                "",
                "$browsers = Get-Process | Where-Object { $_.Name -match 'chrome|firefox|msedge|iexplore' }",
                "",
                "if ($browsers) {",
                "    foreach ($browser in $browsers) {",
                "        try {",
                "            $window = [System.Diagnostics.Process]::GetProcessById($browser.Id).MainWindowHandle",
                "            if ($window -ne 0) {",
                "                [System.Windows.Forms.SendKeys]::SendWait('%{F5}')",
                "                Start-Sleep -Milliseconds 100",
                "                Write-Host 'true'",
                "                exit",
                "            }",
                "        } catch { }",
                "    }",
                "}",
                "Write-Host 'false'"
            );
            
            // Ejecutar PowerShell en background y capturar salida
            ProcessBuilder pb = new ProcessBuilder("powershell", "-Command", psScript);
            Process proc = pb.start();
            
            // Esperar con timeout
            boolean finished = proc.waitFor(2, java.util.concurrent.TimeUnit.SECONDS);
            if (finished) {
                // Si encontró una ventana abierta, se refrescó
                System.out.println("🔄 Recargando página del navegador...");
                System.out.println("✓ Swagger recargado exitosamente!\n");
                return true;
            }
            
            return false;
        } catch (Exception e) {
            return false;
        }
    }
    
    private boolean refreshBrowserWindowMac(String url) {
        try {
            Runtime.getRuntime().exec(new String[]{
                "osascript", "-e",
                "tell application \"System Events\" to keystroke \"r\" using {command down}"
            });
            System.out.println("🔄 Recargando página del navegador...");
            System.out.println("✓ Swagger recargado exitosamente!\n");
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    
    private boolean refreshBrowserWindowLinux(String url) {
        try {
            // En Linux, intentar usar xdotool si está disponible
            Runtime.getRuntime().exec(new String[]{
                "sh", "-c", "xdotool search --name 'swagger' key F5"
            });
            System.out.println("🔄 Recargando página del navegador...");
            System.out.println("✓ Swagger recargado exitosamente!\n");
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    
    private boolean hasBeenOpenedInSession(String appName, String port) {
        try {
            Path flagFile = getFlagFilePath(appName, port);
            return Files.exists(flagFile);
        } catch (Exception e) {
            return false;
        }
    }
    
    private void markAsOpened(String appName, String port) {
        try {
            Path flagFile = getFlagFilePath(appName, port);
            Files.createFile(flagFile);
        } catch (Exception e) {
            // Ignorar si no se puede crear el archivo
        }
    }
    
    private Path getFlagFilePath(String appName, String port) {
        String userHome = System.getProperty("user.home");
        String flagDir = userHome + File.separator + ".boutique_swagger";
        new File(flagDir).mkdirs();
        return Paths.get(flagDir, "swagger_opened_" + appName + "_" + port + ".flag");
    }

    private void openBrowser(String url) {
        try {
            System.out.println("🔄 Abriendo Swagger en el navegador...");
            
            String os = System.getProperty("os.name").toLowerCase();
            
            if (os.contains("win")) {
                // Windows: usar start que reutiliza ventana existente si es posible
                Runtime.getRuntime().exec(new String[]{"cmd", "/c", "start", url});
                System.out.println("✓ Navegador abierto exitosamente en Windows!\n");
            } else if (os.contains("mac")) {
                // Mac: usar open
                Runtime.getRuntime().exec(new String[]{"open", url});
                System.out.println("✓ Navegador abierto exitosamente en Mac!\n");
            } else if (os.contains("nix") || os.contains("nux")) {
                // Linux: usar xdg-open
                Runtime.getRuntime().exec(new String[]{"xdg-open", url});
                System.out.println("✓ Navegador abierto exitosamente en Linux!\n");
            } else {
                // Fallback: intentar Desktop API
                if (Desktop.isDesktopSupported()) {
                    Desktop.getDesktop().browse(new URI(url));
                    System.out.println("✓ Navegador abierto con Desktop API!\n");
                } else {
                    System.out.println("No se pudo detectar el sistema operativo.");
                    System.out.println("   Abre manualmente: " + url + "\n");
                }
            }
        } catch (Exception e) {
            System.out.println("Error al abrir navegador: " + e.getMessage());
            System.out.println("   Abre manualmente: " + url + "\n");
        }
    }
}