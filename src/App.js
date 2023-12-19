import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './pages/about_me.js';
import Portfolio from "./pages/portfolio.js"
import Resume from "./pages/resume.js"
import GetInTouch from './pages/get_in_touch.js';
import Menu from "./components/menu/index.js"



function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Routes>
          <Route index element={<AboutMe/>}></Route>
          <Route path='/about_me' element={<AboutMe/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
          <Route path="/get_in_touch" element={<GetInTouch/>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
