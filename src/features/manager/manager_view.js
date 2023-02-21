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
  Link
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
],{basename:"/tournament_manager"});

function Home() {
  return (
    <div>
      <p>Welcome to the Home Page</p>
      {/* <a href="/counter"></a> */}
      <Link to={`/counter`}>Go to counter</Link>
      <Link to={`/clasification-view`}>Go to clasification-view</Link>
      {/* <a href="/clasification-view">Go to clasification-view</a> */}
    </div>
  );
}
function ManagerView(){
  return (
      <RouterProvider router={router} />
    
  );
}

export default ManagerView;
