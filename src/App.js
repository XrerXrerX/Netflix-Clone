import React from 'react';
import * as ReactDOM from "react-dom/client";

// import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";



function App() {
  const user = null;
  // const user = {
  //   name: 'sonny',
  // };

  let element;
  let element1;



  if (!user) {
    element = <LoginScreen />;
    element1 = <div className="App"><HomeScreen /></div>;

  } else {
    element = <div className="App"><HomeScreen /></div>

  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: element,
      errorElement: <ErrorPage />,
    },
    {
      path: "/skiphome",
      element: element1,
      errorElement: <ErrorPage />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
