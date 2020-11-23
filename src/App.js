import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import ErrorPage from "./pages/ErrorPage";
import { Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/rooms/' component={Rooms}></Route>
      <Route exact path='/rooms:type' component={SingleRoom}></Route>
      <Route component={ErrorPage}></Route>
    </Switch>
    </>

  );
}
 
export default App;
