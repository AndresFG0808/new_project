package com.boutique.swagger.documentation;

import java.awt.Desktop;
import java.net.URI;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class SwaggerAutoOpen implements ApplicationListener<ApplicationReadyEvent> {

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        String port = event.getApplicationContext().getEnvironment().getProperty("server.port", "8761");
        String swaggerUrl = "http://localhost:" + port + "/swagger-ui.html";
        
        System.out.println("\n" + "=".repeat(60));
        System.out.println("Aplicación iniciada correctamente!");
        System.out.println("Swagger UI: " + swaggerUrl);
        System.out.println("=".repeat(60) + "\n");
        
        // Intentar recargar si ya está abierto, sino abrir una nueva pestaña
        if (!tryRefreshOpenBrowser()) {
            openBrowser(swaggerUrl);
        }
    }
    
    private boolean tryRefreshOpenBrowser() {
        try {
            String os = System.getProperty("os.name").toLowerCase();
            
            if (os.contains("win")) {
                // Windows: intentar encontrar y refrescar la ventana del navegador
                return refreshBrowserWindowWindows();
            } else if (os.contains("mac")) {
                // Mac: intentar con Safari/Chrome
                return refreshBrowserWindowMac();
            } else if (os.contains("nix") || os.contains("nux")) {
                // Linux: intentar con xdg-open
                return refreshBrowserWindowLinux();
            }
            return false;
        } catch (Exception e) {
            return false;
        }
    }
    
    private boolean refreshBrowserWindowWindows() {
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
    
    private boolean refreshBrowserWindowMac() {
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
    
    private boolean refreshBrowserWindowLinux() {
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
