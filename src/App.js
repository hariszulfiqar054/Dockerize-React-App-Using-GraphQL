import logo from './logo.svg';
import './App.css';
import CharacterList from './pages/CharacterList';
import { Route, Routes } from 'react-router-dom';
import CharacterDetail from './pages/CharacterDetail';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<CharacterList />} />
        <Route path='/:id' element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
