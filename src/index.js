import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Login from './Pages/Login';
import Products from './Pages/Products/Products';
import Search from './Pages/Search/Search';
import SearchCategories from './Pages/Search/SearchCategories';
import NextPage from './Pages/NextPage/NextPage';
import Info from './Pages/Info/Info';
import { Provider } from 'react-redux';
import store from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/' element={<App />}>
            <Route path='/products' element={<Products />} />
            <Route path='/nextPage' element={<NextPage />} />
            <Route path='/info/:id' element={<Info />} />
            <Route path='/search/:search' element={<Search />} />
            <Route path='/searchCategories/:categories' element={<SearchCategories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
