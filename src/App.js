import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Detail, Category, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/:category' element={<Category />} />
        <Route path='/:category/:newsId' element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
