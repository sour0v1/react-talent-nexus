import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>
      },
      {
        path : '/applied-jobs',
        element : <AppliedJobs></AppliedJobs>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '/job/:jobId',     
        element : <JobDetails></JobDetails>,
        loader : () => fetch('jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
