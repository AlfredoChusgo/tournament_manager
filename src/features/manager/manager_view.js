import React from 'react';
import logo from '../../logo.svg';
import { Counter } from '../../features/counter/Counter';
import '../../App.css';
import '../../i18n';
import { createSlice, createStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";
import { Container } from '@mui/system';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import ClasificacionView from '../features/clasificacion/clasificacion_view';
import ClasificacionView from '../../features/clasificacion/clasificacion_view';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/counter",
    element: <Counter></Counter>
  },
  {
    path: "/clasification-view",
    element: <ClasificacionView></ClasificacionView>
  },
]);

function Home() {
  return (
    <div>
      <p>Welcome to the Home Page</p>
      <a href="/counter">Go to counter</a>
      <a href="/clasification-view">Go to clasification-view</a>
    </div>
  );
}
function ManagerView(){
  return (
      <RouterProvider router={router} />
    
  );
}

export default ManagerView;
