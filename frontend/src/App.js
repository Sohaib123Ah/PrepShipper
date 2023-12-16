import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer/Footer";
import CAW from "./components/WareHouse/CAW";
import PAW from "./components/WareHouse/PAW";
import ILW from "./components/WareHouse/ILW";
import MSW from "./components/WareHouse/MSW";
import VMS from "./components/VMS/VMS";
import Customer from "./components/Customer/Customer";
import AboutUs from "./components/About/AboutUs";
import OurTeam from "./components/About/OurTeam";
import ContactUS from "./components/Contact/ContactUS";
import WareHousing from "./components/Service/WareHousing";
import OrderFull from "./components/Service/OrderFull";
import ReturnLabel from "./components/Service/ReturnLabel";
import FBA from "./components/Service/FBA";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/userAction";
import Profile from "./components/Profile/Profile";
import AccountSetting from "./components/Profile/AccountSetting";
import ChangeName from "./components/Profile/ChangeName";
import ChangePassword from "./components/Profile/ChangePassword";
import MyAddress from "./components/Profile/MyAddress";
import Order from "./components/Profile/Order";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ca-warehouse" element={<CAW />} />
        <Route path="/pa-warehouse" element={<PAW />} />
        <Route path="/il-warehouse" element={<ILW />} />
        <Route path="/ms-warehouse" element={<MSW />} />
        <Route path="/wms" element={<VMS />} />
        <Route path="/product-categories" element={<Customer />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/warehousing-fulfillment" element={<WareHousing />} />
        <Route path="/order-fulfillment" element={<OrderFull />} />
        <Route path="/return-relabel" element={<ReturnLabel />} />
        <Route path="/fba-transfer" element={<FBA />} />
        {/* -------------------User Auth------------------------ */}
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        {/* -----------------------User Profile----------------------- */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/account-settings" element={<AccountSetting />} />
        <Route path="/account-settings/change-name" element={<ChangeName />} />
        <Route
          path="/account-settings/change-password"
          element={<ChangePassword />}
        />
        <Route path="/my-address" element={<MyAddress />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
