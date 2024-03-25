import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';
import Root from './Components/Roots/Root.jsx';
import Home from './Components/Home/Home.jsx';
import JobDetails from './Components/Home/CardDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: (
      <>
        <h1>Opps!</h1>
        <button style={{ background: "green", width: "100px", borderRadius: "10px", color: "white" }}>
          <NavLink to="/">Back</NavLink>
        </button>
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobsDatails/:id',
        element: <JobDetails></JobDetails>
      }
    ]
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
