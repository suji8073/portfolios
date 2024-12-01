import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Profile from './page/Profile';
import Project from './page/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/PROFILE' element={<Profile />} />
        <Route path='/PROJECT' element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
