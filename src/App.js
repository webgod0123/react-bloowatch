import './App.css';
import Main from './components/main';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { setproducts } from './redux/productsReducer';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const { productData } = data.products;

  const getData = () => {
    return new Promise((resolve, reject) => {
      fetch('/data.json').then(response => response.json()).then(data => resolve(data))
    })
  }
  useEffect(() => {
    const fetchFunc = async () => {
      if (!productData || !productData.length) {
        const initialData = await getData();
        dispatch(setproducts(initialData))
      }
    }
    fetchFunc()
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Main />} />
          {/* <Route path="/description" element={<Description />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Switch>
      </BrowserRouter>
      <Main />
    </div>
  );
}

export default App;
