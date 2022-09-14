import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { Home } from './components/pages/home/Home';
import { AboutPage } from './components/pages/about/About';
import { Contact } from './components/pages/contact/Contact';
import { CodingPortfolio } from './components/pages/portfolio/coding-projects/CodingPortfolio';
import { DesignPortfolio } from './components/pages/portfolio/design-projects/DesignPortfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio/coding" element={<CodingPortfolio />} />
          <Route path="portfolio/design" element={<DesignPortfolio />} />
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
