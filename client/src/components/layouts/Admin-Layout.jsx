import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";

const AdminLayout = () => {
  const {user,isLoading}=useAuth()
  console.log(user)
  if(isLoading)
  {
    return <h1>
      loading...
    </h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/"/>
  }
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/users">
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/contacts">
                    Contacts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/home">
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
