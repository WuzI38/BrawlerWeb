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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/cards' element={<TopCardsPage />} />
        <Route
          path='/commanders/:colors'
          element={<CommandersPage />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
