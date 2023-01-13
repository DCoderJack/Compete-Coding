import './App.css';
import './Components/style.css';
import CodingPlatforms from './Components/CodingPlatforms';
import Contests from './Components/Contests';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './Components/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <CodingPlatforms />
        <Routes>
          <Route exact path = "/" element = {<Contests codingPlatform = {'all'} key = {'all'}/>}/>
          <Route exact path = "/home" element = {<Contests codingPlatform = {'all'} key = {'all'}/>}/>
          <Route exact path = "/about" element = {<About />}/>
          <Route exact path = "/leetcode" element = {<Contests codingPlatform = {'leet_code'} key = {'leet_code'}/>}/>
          <Route exact path = "/hackerrank" element = {<Contests codingPlatform = {'hacker_rank'} key = {'hacker_rank'}/>}/>
          <Route exact path = "/codechef" element = {<Contests codingPlatform = {'code_chef'} key = {'code_chef'}/>}/>
          <Route exact path = "/hackerearth" element = {<Contests codingPlatform = {'hacker_earth'} key = {'hacker_earth'}/>}/>
          <Route exact path = "/atcoder" element = {<Contests codingPlatform = {'at_coder'} key = {'at_coder'}/>}/>
          <Route exact path = "/codeforces" element = {<Contests codingPlatform = {'codeforces'} key = {'code_forces'}/>}/>
          <Route exact path = "/kickstart" element = {<Contests codingPlatform = {'kick_start'} key = {'kick_start'}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
