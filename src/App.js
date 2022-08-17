import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Detail from "./pages/Detail";
import { getData } from "./features/news/newsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getData());
    } catch (error) {}
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/:category/:newsId' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
