import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './i18n';
import { createSlice, createStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";
import ManagerView from './features/manager/manager_view';

function App(){
  return (
    <ManagerView/>
  );
}

export default App;
