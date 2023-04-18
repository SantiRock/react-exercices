import Navbar from './NavBar/NavBar'
import { HashRouter as Router, Routes, Route}
    from 'react-router-dom';
import Unicafe from './pages/unicafe';
import Anecdotes from './pages/anecdotes';
import Phonebook from './pages/phonebook';
import './App.css';

// App------------

const App = () => {  
  return (
    <Router>
    <Navbar />
        <Routes>
          <Route exact path='/' element={<Unicafe />} />
          <Route path='/unicafe' element={<Unicafe />} />
          <Route path='/anecdotes' element={<Anecdotes />} />
          <Route path='/phonebook' element={<Phonebook />} />
        </Routes>
    </Router>
  )
}

export default App;
