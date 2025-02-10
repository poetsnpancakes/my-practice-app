
import './App.css';
import React,{lazy,Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./authProvider";
import PrivateRoute from './privateRoute.jsx';
const Home = lazy(()=> import ('./home.jsx'));
const About = lazy(()=> import ('./about.jsx'));
const GetAllEmployees = lazy(()=> import ('./getAllEmployees.jsx'));
const RegisterEmployee = lazy(()=> import('./registerEmployees.jsx'));
const NotFound =lazy(()=> import ('./notFound.jsx'));
const Dashboard=lazy(()=>import('./dashboard.jsx'));
const Login= lazy(()=>import('./login.jsx'));
const RegisterUser= lazy(()=>import('./registerUser.jsx'));





function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    <Route path="/" element={<Home/>}>
    <Route path="/about"index element={<About/>}/>
    <Route path="/emp-register" element={<RegisterEmployee/>}/>
    <Route path="/emp-list" element={<GetAllEmployees/>}/>
    <Route path="/user-register" element={<RegisterUser/>}/>
    <Route path="/user-login" element={<Login/>}/>
    
    
    <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
    
    
    <Route path="/*" element={<NotFound />} /> 
    </Route>  

    </Routes>
    </Suspense>
   </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
