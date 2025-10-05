import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/MainLayout"
import { Home } from "./pages/Home"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>} />
        </Route>
      </Routes>
     
    </>
  )
}

export default App
