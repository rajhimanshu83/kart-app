import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ProductsPage from '../pages/ProductsPage';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ProductsPage />} />
      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
