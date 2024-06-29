import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Layout/Navbar";
import { Dresses } from "./pages/Dresses";
import { Dressmakers } from "./pages/Dressmakers";
import { Blog } from "./pages/Blog";
import { Footer } from "./components/Layout/Footer";
import { Product } from "./pages/Product";
import { NotFound } from "./pages/NotFound";
import { Comments } from "./pages/Comments";
import { DressMaker } from "./pages/DressMaker";
import { CheckOut } from "./pages/CheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <div className="lg:px-36 px-4">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dresses' element={<Dresses/>}/>
          <Route path='/dressmakers' element={<Dressmakers/>}/>
          <Route path='/dressmaker/:title' element={<DressMaker/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/comments' element={<Comments/>}/>
          <Route path='/dress/:id' element={<Product/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
