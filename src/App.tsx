import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Layout/Navbar";
import { Dresses } from "./pages/Dresses";
import { Dressmakers } from "./pages/Dressmakers";
import { Blog } from "./pages/Blog";
import { Footer } from "./components/Layout/Footer";
import { Product } from "./pages/Product";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dresses' element={<Dresses/>}/>
          <Route path='/dressmakers' element={<Dressmakers/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/dress/:id' element={<Product/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
