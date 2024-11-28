import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import UserViewSubsidy from './pages/User/UserViewSubsidy';
import AdminDashboard from './pages/Admin/AdminDashboard';
import RationShopRegister from './pages/rationshop/RationShopRegister';
import VolunteerRegister from './pages/Volunteer/VolunteerRegister';
import ManageUsers from './pages/Admin/ManageUsers';
import ManageShop from './pages/Admin/ManageShop';
import AddSubsidy from './pages/Admin/AddSubsidy';
import ManageVolunteer from './pages/Admin/ManageVolunteer';
import RationShopNav from './Components/RationShopNav';
import RationShopDashboard from './pages/rationshop/RationShopDashboard';
import VolunteerRequest from './pages/rationshop/VolunteerRequest';
import VolunteerDashboard from './pages/Volunteer/VolunteerDashboard';
import UserDashboard from './pages/User/UserDashboard';
import UpdateSubsidy from './pages/Admin/UpdateSubsidy';
import Cart from './pages/User/Cart';
import Payment from './pages/User/Payment';
import UserViewOrdertable from './pages/User/UserViewOrdertable';
import AddFeedack from './pages/User/AddFeedack';
import ViewFeedback from './pages/Admin/ViewFeedback';
import UserViewRationShop from './pages/User/UserViewRationShop';
import UserRequest from './pages/rationshop/UserRequest';
import AddKit from './pages/Admin/AddKit';
import ViewKit from './pages/Admin/ViewKit';
import Kit from './pages/Kit';
import RViewSubsidyDetails from './pages/rationshop/RViewSubsidyDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> 
          <Route path="/viewSubsidy" element={<UserViewSubsidy/>}/>
          <Route path="/admindashboard" element={<AdminDashboard/>}/> 
          <Route path="/rationshopregister" element={<RationShopRegister/>}/>
          <Route path="/volunteerregister" element={<VolunteerRegister/>}/>
          <Route path="/adminmanageusers" element={<ManageUsers/>}/>
          <Route path="/adminmanageshop" element={<ManageShop/>}/>
          <Route path="/addSubsidy" element={<AddSubsidy/>}/> 
          <Route path="/adminmanagevolunteer" element={<ManageVolunteer/>}/> 
          <Route path="/rationShopDashboard" element={<RationShopDashboard/>}/> 
          <Route path="/ViewUserRequest" element={<UserRequest/>}/> 
            <Route path="/volunteerRequest" element={<VolunteerRequest/>}/> 
             <Route path="/volunteerDashboard" element={<VolunteerDashboard/>}/>
             <Route path="/userDashboard" element={<UserDashboard/>}/>
             <Route path="/updateSubsidy" element={<UpdateSubsidy/>}/>
             <Route path="/cart" element={<Cart/>}/>
             <Route path="/payment/:total" element={<Payment/>}/>
             <Route path="/userViewOrderDetails" element={<UserViewOrdertable/>}/>
             <Route path="/addFeedback" element={<AddFeedack/>}/>
             <Route path="/viewFeedback" element={<ViewFeedback/>}/>
             <Route path="/userViewShop" element={<UserViewRationShop/>}/>
             <Route path="/addKit" element={<AddKit/>}/>
             <Route path="/viewKit" element={<ViewKit/>}/>
             <Route path="/kit" element={<Kit/>}/>
             <Route path="/rationshopViewSubsidy" element={<RViewSubsidyDetails/>}/>

          </Routes>
</BrowserRouter>
  );
}

export default App;
