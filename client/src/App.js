
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Abaut from './components/abaut';
import Contact from './components/contact';
import Experience from './components/experience';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Presentation from './components/presentation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}><NavBar/> <Presentation/> <Abaut/> <Experience/> <Contact/><Footer/></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
