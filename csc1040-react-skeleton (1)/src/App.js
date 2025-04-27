import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './Layouts/Container';
import HomePage from './Layouts/HomePage';
import SecondPage from './Layouts/SecondPage';
import FourOhFour from './Layouts/FourOhFour';
import CategoriesPage from './pages/CategoriesPage';
import OrdersPage from './pages/OrdersPage';
import CustomerPage from './pages/CustomerPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import CustomerDetailsPage from './pages/CustomerDetailsPage';
import OrdersByStatusPage from './pages/OrdersByStatusPage';

// WHEN creating routes, make sure to place them 
// BEFORE the FourOhFour page
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} >
          <Route index element={<HomePage />} />
          <Route path="secondpage" element={<SecondPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/status/:status" element={<OrdersByStatusPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/order/:id" element={<OrderDetailsPage />} />
          <Route path="/customer/:id" element={<CustomerDetailsPage />} />
          <Route path="*" element={<FourOhFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;