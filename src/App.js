import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./components/pages/Home'));
const Tweets = lazy(() => import('./components/pages/Tweets'));
const NotFoundPage = lazy(() => import('./components/pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
