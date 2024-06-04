import logo from './logo.svg';
import './App.css';
import ParentComponent from './Component/ParentComponent';
import UserInfo from './Component/UserInfo';
import ParentCart from './Component/ParentCart';
import { useState } from 'react';
import FAQ from './Component/FAQ';
import Notification from './Component/Notification';
import TodoList from './Component/TodoList';
import Tabbing from './Component/Tabbing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Blog from './Component/Blog';
import BlogDetails from './Component/BlogDetails';

function App() {
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  };

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };


  return (
    <div className="App">

      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/blog/:id' element={<BlogDetails/>}></Route>

          
        </Routes>
      </BrowserRouter> */}

      {/* <ParentComponent />
      <UserInfo user={user} />
      <ParentCart addToCart={addToCart} />
      <FAQ />
      <Notification/> */}
      <TodoList />

      {/* <Tabbing /> */}
    </div>
  );
}

export default App;
