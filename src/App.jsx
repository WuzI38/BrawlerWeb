import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage'
import TopCardsPage from './pages/TopCardsPage'
import CommandersPage from './pages/CommandersPage';
import SingleCommanderPage from './pages/SingleCommanderPage'

import { getColumnClass } from './utils/Methods'

const App = () => {
  let columns = getColumnClass();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage columns={columns}/>} />
        <Route path='/cards' element={<TopCardsPage columns={columns}/>} />
        <Route
          path='/commanders/:colors'
          element={<CommandersPage columns={columns}/>}
        />
        <Route
          path='/commanders/:colors/:id'
          element={<SingleCommanderPage columns={columns}/>}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
