import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { RegisterUser } from './RgisterUser';
import { ShowTasks } from './ShowTasks';
import { CreateTasks } from './CreateTasks';
import { Dashboard } from './Dashboard';
import { ListUsers } from './ListUsers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register-user",
    element: <RegisterUser/>,
  },
  {
    path: "/list-t",
    element: <ShowTasks/>,
  },
  {
    path: "/create-task",
    element: <CreateTasks/>,
  },
  {
    path: "/home",
    element: <Dashboard/>,
  },
  {
    path: "/list-users",
    element: <ListUsers/>,
  },
])


const user = localStorage.user ? JSON.parse(localStorage.user) : undefined;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      {
        user?.logined == true && (
          <Header />
        )
      }
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
