
import Topbar from "./components/Topbar/topbar";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/setting/Setting";
import Single from "./components/pages/single/Single"
import Write from "./components/pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const user = false;
  return (
    <div className="App">
       <Topbar/>
        
           <Routes>
             <Route exact path="/" element={<Home/>}/>
             <Route path="/register" element={user ? <Home/> : <Register/>}/>
             <Route path="/login" element={user ? <Home/> : <Login/>}/>
             <Route path="/write" element={user ? <Write/> : <Register/>}/>
             <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
             <Route path="/post/:postId" element={<Single/>}/>
           </Routes>
       
       
    </div>
  );
}

export default App;
