import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Home/Footer';
import Home from './components/Home/Home';
import Login from './components/Home/Login/Login';
import SignUp from './components/Home/Login/SignUp';
import Navbar from './components/Home/Navbar';
import ToolsDetails from './components/Home/ToolsDetails';
import RequireAuth from './components/Page/RequireAuth';
import { ToastContainer } from "react-toastify";
import Dashboard from './components/Home/Dashboard';
import Order from './components/Home/Order';
import MyReview from './components/Page/MyReview';
import MyProfile from './components/Page/MyProfile';
import UpdateProfile from './components/Page/UpdateProfile';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/tools/:toolsId' element={<RequireAuth>
          <ToolsDetails></ToolsDetails>
        </RequireAuth>}></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='order' element={<Order></Order>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          
        </Route>
        <Route path='/updateprofile' element={<UpdateProfile></UpdateProfile>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
