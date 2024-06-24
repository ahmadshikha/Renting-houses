import {Routes,Route} from "react-router-dom"
import { Signup } from "./pages/auth/signup/Signup";
import { Login } from "./pages/auth/login/Login";

function App() {
  return (
    <>
   <Routes>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    {/* <Route path="/" element={<Hom} */}
   </Routes>
    </>
    
  );
}

export default App;
