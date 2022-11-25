import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './login'
import App from './App';
import Pdf from './Pdf';
import Vague from './Vague';

const AppComponent = () => {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login/>} />
          <Route path="/" exact element={<App />} />
          <Route path="/pdf" exact element={<Pdf />} />
          <Route path="/vague" exact element={<Vague />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppComponent;