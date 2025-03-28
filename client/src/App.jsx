import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import {Logout} from './pages/Logout';
import {Food} from './pages/Food';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Navbar from  './pages/Navbar';
import List from  './pages/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from './components/layouts/Admin-Layout';
import { AdminUsers } from './pages/Admin-Users';
import { AdminContacts } from './pages/Admin-Contacts';
import { AdminUpdate } from './pages/Admin-Update';
import AdminServices from './pages/Admin-Services';
import { Healthchecks } from './pages/Healthchecks';
import { Clothing } from './pages/Clothing';
import { Footer } from './pages/Footer';
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path="/" element={[<Home/>,<About/>,<Contact/>,<Footer/>]} />
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/logout" element={<Logout />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/donate" element={[<List />,<Food/>]}/>
      <Route path="/donate/healthcheckup" element={[<List />,<Healthchecks/>]}/>
      <Route path="/donate/clothing" element={[<List />,<Clothing/>]}/>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route path="users" element={<AdminUsers/>}/>
        <Route path="contacts" element={<AdminContacts/>}/>
        <Route path='users/:id/edit' element={<AdminUpdate/>}/>
        <Route path='services' element={<AdminServices/>}/>
      </Route>
     </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;