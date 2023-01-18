import React from "react";
import ReactDOM from "react-dom/client";
import {PersistGate} from "redux-persist/integration/react";
import AppRoutes from "./routes/AppRoutes";
import {Provider} from "react-redux";
import {store, persistor} from "./store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
