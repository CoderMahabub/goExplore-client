import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Booking from './component/Booking/Booking';
import MyOrder from './component/MyOrder/MyOrder';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import ManageOrders from './component/ManageOrders/ManageOrders';
import UpdateOrder from './component/UpdateOrder/UpdateOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/bookPackage/:_id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/update/:orderId">
              <UpdateOrder></UpdateOrder>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
