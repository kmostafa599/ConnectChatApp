import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './reducer/store';
import { meAPI } from './api';
import { setToken, setUser } from './reducer/app';
import { useEffect } from 'react';
import Header from './Components/Header'
import PrivateRoute from './Components/PrivareRoute';

function App() {
  const authedUser = useSelector((state: RootState)=>state.app.user)
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.app.token);
  async function saveUser(token: string) {
    const user = await meAPI(token);

    dispatch(setUser(user));
    console.log({ user });
  }

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem("auth-token");
    console.log({ tokenLocalStorage });
    if (tokenLocalStorage) {
      dispatch(setToken(tokenLocalStorage));
      saveUser(tokenLocalStorage);
    }
  }, []);

  

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Routes> 
          <Route element={<PrivateRoute authedUser={authedUser} />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/auth/signIn" element={<LoginPage />} />
          <Route path="/auth/signUp" element={<SignUpPage />} />
        </Routes>
      </main>
      <footer className='App-footer'>
        footer bla bla bla
      </footer>
    </div>
  );
}

export default App;

