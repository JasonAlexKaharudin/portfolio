import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './routes/AnimatedRoutes';
import Layout from './layouts/Layout';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Layout>
      <ScrollToTop>
        <AnimatedRoutes/>
      </ScrollToTop>
    </Layout>
  </BrowserRouter>
);