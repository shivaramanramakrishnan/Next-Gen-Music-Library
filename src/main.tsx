import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import { Provider } from "react-redux";

import { store } from "@/store";
import GlobalContextProvider from "@/context/globalContext";
import ThemeProvider from "@/context/themeContext";
import QueueProvider from "@/context/queueContext";
import ErrorBoundary from "@/common/ErrorBoundary";
import App from "./App";
import "./index.css";

// Conditionally enable MSW for development
if (import.meta.env.DEV && import.meta.env.VITE_USE_MSW === 'true') {
  import('./mocks/browser').then(({ startMocking }) => {
    startMocking().then((enabled) => {
      if (enabled) {
        console.log('🎭 MSW enabled for development - API requests will be mocked');
      }
    });
  });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <GlobalContextProvider>
              <QueueProvider>
                <LazyMotion features={domAnimation}>
                  <App />
                </LazyMotion>
              </QueueProvider>
            </GlobalContextProvider>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
