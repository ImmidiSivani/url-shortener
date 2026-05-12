import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import Profile from './Pages/Profile/Profile';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { getUser } from './redux/slices/User';

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users/1')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);

  //       setUser(json);
  //     });
  // }, []);
 const user = useSelector(getUser);
  return (
    <MantineProvider>
      <Router>
        <HeaderMegaMenu />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/login' element={<LoginPage />} />

          <Route element={<PrivateRoute />}>
            <Route
              path='/profile'
              element={<Profile user={user} />}
            />
          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;