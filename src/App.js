import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar/Navbar';
import './App.css'
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import Projects from './components/Projects/Projects';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import { themecontext } from './Context';
import { useContext } from 'react';
function App() {
  const theme = useContext(themecontext)
  const darkmode = theme.state.darkmode
  return (
    <div className="App" style={{
      background: darkmode ? 'black':'',
      color: darkmode ? 'white':''
    }}>
      <Navbar/>
      <Intro/>
      <Skills/>
      {/*<Projects/>*/}
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
