import React, { StrictMode } from "react";
import ReactDom from 'react-dom/client'
// import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from './Routes'

ReactDom.createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <App /> */}
        <RouterProvider router={router}/>
    </StrictMode>
)