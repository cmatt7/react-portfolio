import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './Components/App/App';
import PageNotFound from './Components/App/PageNotFound';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);