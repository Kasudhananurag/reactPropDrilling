import"./App.css";
import { useState } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

export default function App()
{
    const [username, setUserName] = useState("Anurag Kasudhan");
    return <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home username={username} /> } ></Route>
                <Route path="about" element={ <About username={username}/> } ></Route>
                <Route path="profile" element={ <Profile username={username} setUserName = {setUserName} /> } ></Route>
                <Route path="*" element={ <h1>Page not found. 404</h1> } ></Route>
            </Routes> 
        </Router>
    </div>
}