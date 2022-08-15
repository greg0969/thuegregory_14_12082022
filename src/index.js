import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store'
import '../src/styles/style.css';
import Erreur from './pages/Erreur';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<CreateEmployee />}/>
            <Route path="/employeeList" element={<EmployeeList />} />
            <Route path="*" element={<Erreur />} />
          </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
);