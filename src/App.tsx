import {RouterProvider} from 'react-router-dom';
import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

import { router } from "./router";
import { queryClient } from "./stores/QueryClient";
import {useEffect} from 'react';

function App() {
    useEffect(() => {
        window.location.href = "https://not-pnu.github.io/mailbadara/";
    }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
