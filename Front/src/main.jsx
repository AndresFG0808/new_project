import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./Redux/Store";
import App from "./App/App";
import { getSecureImage } from "./assets/Config/secureAssets";

// Inyectar favicon desde secureAssets
const favicon = document.querySelector("link#favicon");
if (favicon) {
  favicon.href = getSecureImage('satSinTexto');
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
