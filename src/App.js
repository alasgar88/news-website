import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Detail from "./pages/Detail";
import Category from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/:category' element={<Category />} />

        <Route path='/:category/:newsId' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
