import {Routes,Route} from "react-router-dom";
import Home from "./Home"
import Category from "./Category";
import Scrollup from "./Scrollup";
import Errorhandler from "./Errorhandler";


function App(){
  return(
    <>
      <Scrollup/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/beaches" element={<Category category="beaches"/>}/>
        <Route path="/malls" element={<Category category="malls"/>}/>
        <Route path="/theatres" element={<Category category="theatres"/>}/>
        <Route path="/parks&zoos" element={<Category category="parks"/>}/>
        <Route path="/museums" element={<Category category="museums"/>}/>
        <Route path="/foods" element={<Category category="food"/>}/>
        <Route path="*" element={<Errorhandler  message={"The page you are looking for doesn't exist..."}/>} />
      </Routes>
    </>
  )
}

export default App