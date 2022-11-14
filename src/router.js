import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './login'
import App from './App';
const AppComponent = () => {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login/>} />
          <Route path="/" exact element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppComponent;