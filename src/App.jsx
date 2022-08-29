import React from 'react';
// import PropTypes from "prop-types";
import { Route, Routes } from 'react-router';

import HomePage from './components/HomePage/HomePage';
import CalendarPage from './components/CalendarPage/CalendarPage';
import Error404Page from './components/Error404Page/Error404Page';

const paths = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/calendar/:year',
    element: <CalendarPage />,
  },
  {
    path: '*',
    element: <Error404Page />,
  },
];

const App = (props) => {
  return (
    <Routes>
      {paths.map((elem, i) => {
        const { path, element } = elem;
        return <Route key={i} path={path} element={element} />;
      })}
    </Routes>
  );
};

App.propTypes = {};

export default App;
