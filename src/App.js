import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { Box } from '@chakra-ui/react';
import Frame from './Components/Frame';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Box display={"flex"}>
      <Sidebar/>
      <Frame/>
      </Box>
    </div>
  );
}

export default App;
