import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import login from './pages/auth/login';
import register from './pages/auth/register';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={HomePage}/>
        <Route path='/login' element={login}/>
        <Route path='/register' element={register}/>
      </Routes>
    </>
  );
}

export default App;
