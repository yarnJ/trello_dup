import './App.css';
import Header from '../src/component/home/header/header.component';
import HomeComponent from '../src/page/home/home.component';
import TrelloPricingComponent from '../src/page/trello-pricing/trello.pricing.component';
import TrelloTourComponent from '../src/page/trello-tour/trello.tour.component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpComponent from './page/signup/signup.component';
import SignInComponent from './page/login/login.component';

import HomeUserComponent from './page/user-api/homeUser';
import UserComponent from './page/user-api/user';
import UserAddComponent from './page/user-api/user.add';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<HomeComponent/>}></Route>
          <Route path="/login" element={<SignInComponent/>}/>
          <Route path="/signup" element={<SignUpComponent/>}></Route>
          <Route path="/trello-pricing" element={<TrelloPricingComponent/>}></Route>
          <Route path="/trello-tour" element={<TrelloTourComponent/>}></Route>
          <Route path="/homeuser" element={<HomeUserComponent/>}/>
          <Route path="/homeuser/:userId" element={<UserComponent/>}/>
          <Route path="/homeuser/user-add" element={<UserAddComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
