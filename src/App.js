import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {
  BrowserRouter,
  Routes, 
  Route,
  Navigate,
} from 'react-router-dom';
import {Home} from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="login" element={<Login/>}/>
     <Route path="/" element={<Home/>}/>
     <Route path="register" element={<Register/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
