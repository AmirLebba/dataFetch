
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from "react-dom/client";
import App from "./App";

const queryClient = new QueryClient();

const root = document.getElementById("root");

const app = (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

const rootElement = createRoot(root);
rootElement.render(app);
