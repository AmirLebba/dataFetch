
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
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

// Import createRoot from "react-dom/client"
import { createRoot } from "react-dom/client";

// Use ReactDOM.createRoot to create a root and render the app
const rootElement = createRoot(root);
rootElement.render(app);
