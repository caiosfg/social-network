import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/rooms/new" Component={NewRoom} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
