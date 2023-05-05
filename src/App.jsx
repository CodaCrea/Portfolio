import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Benefit, Footer, Header, Home, Skills } from "./config";
import './style/app.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/competences' element={<Skills />} />
          <Route path='/prestations' element={<Benefit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
