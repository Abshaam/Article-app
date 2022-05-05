import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import About from './pages/About'
import IndexPage from './pages/indexPage';
import Notfound from './pages/notfound'
import Articles from './pages/Articles'
import Article from './pages/Article'





ReactDOM.render(
  <BrowserRouter> 
   <React.StrictMode>
     <Routes>
       <Route path = '/' element={<App/>}>
       <Route
           index
           element={<IndexPage/>}
           />
         <Route path = '/home' element = {<Home/>}/>
         <Route path = '/about' element = {<About/>}/>
         <Route path = '/articles' element = {<Articles/>}/>
         <Route path = "/articles/:articleId" element={<Article/>}/>
        </Route>


      <Route path = "*" element = {<Notfound/>}/> 
     </Routes>
   </React.StrictMode> 
   </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
