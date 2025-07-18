import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router";
import { router } from './routes/routes';
import { Toaster } from 'react-hot-toast'; 
import { toastOptions } from './components/toastOptions';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} toastOptions={toastOptions} />
    </>
  </StrictMode>,
);