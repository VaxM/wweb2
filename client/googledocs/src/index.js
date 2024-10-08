import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from "../src/pages/login";
import Register from "../src/pages/register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { AuthProvider } from './contexts/auth-context';
import { ToastProvider } from './contexts/toast-context';
import VerifyEmail from "../src/pages/user/verify-email";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <Routes>
            <Route path = "/" element = {<h1>I am Homepage</h1>}/>
            <Route path = "/register" element = {<Register />} />
            <Route path = "/login" element = {<Login />} />
            <Route path="/user/verify-email/:token" element={<VerifyEmail />} />
          </Routes>
        </ToastProvider>
      </AuthProvider>

    </BrowserRouter>
  </React.StrictMode>
);


