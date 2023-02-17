import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import AllRoutes from './components/AllRoutes';
import { Flex, Heading } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <Flex gap="40px">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Home</NavLink>
      </Flex>
      <AllRoutes />
    </div>
  );
}

export default App;
