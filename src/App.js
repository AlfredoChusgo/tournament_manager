import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './i18n';
import { createSlice, createStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";
import ManagerView from './features/manager/manager_view';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//import ClasificacionView from './features/clasificacion/clasificacion_view';
import ClasificacionView from './features/clasificacion/clasificacion_view';
// function App(){
//   return <ClasificacionView></ClasificacionView>;
// }

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
function App(){
  return (
    <ManagerView/>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

export default App;
