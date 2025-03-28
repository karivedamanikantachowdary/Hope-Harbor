// import React,{useState} from 'react';
// function Login(){
//     const [user,setUser]=useState({
//         email:"",
//         password:"",
//     });
//     const handleInput=(e)=>{
//         console.log(e);
//         let name=e.target.name;
//         let value=e.target.value;
//         setUser({
//             ...user,
//             [name]:value,
//         });
        
//     };
//     const handleSubmit=async (e)=>{
//         e.preventDefault();
//         try{
//             const response=await fetch(`http://localhost:5000/api/auth/login`,{
//                 method:"POST",
//                 headers:{
//                     "Content-Type":"application/json",
//                 },
//                 body: JSON.stringify(user),
//             });
//             if(response.ok)
//             {
//                 alert("login successful");
//                 setUser({
//                     email:"",
//                     password:"",
//                 });
//             }
//             else{
//                 alert("invalid credentials");
//                 console.log("invalid credentials");
//             }
//             console.log(response);
//         }catch(error)
//         {
//             console.log("login",error);
//         }
        
//     };

//     return(
//         <>
//         <section>
//             <main>
//                 <div className="section-registration">
//                     <div className='container grid grid-two-cols'>
//                         <div className="registration-form">
//                             <h2 className='main-heading mb-3'>Login form</h2>
//                             <br/>
//                             <form onSubmit={handleSubmit}>
                               
//                                 <div className='inputBox'>
                                   
//                                     <input type="email" name="email"  id="email" required autoComplete='off'
//                                     value={user.email}
//                                     onChange={handleInput}/>
//                                      <label >email</label>
//                                 </div>

//                                 <div className='inputBox'>
                                   
//                                     <input type="password" name="password"  id="password" required autoComplete='off'
//                                     value={user.password}
//                                     onChange={handleInput}/>
//                                      <label>password</label>
//                                 </div>
//                                 <br/>
//                                 <button type="submit" className='btn btn-submit'>Login</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </section>
//         </>
//     )
// }

// export default Login;
import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../store/auth";

const Login = () =>{
    const [user,setUser]=useState({
                email:"",
                password:"",
            });
     const {storetokenInLS}=useAuth();
    const handleInput=(e)=>{
                console.log(e);
                let name=e.target.name;
                let value=e.target.value;
                setUser({
                    ...user,
                    [name]:value,
                });
                
    };
    const navigate=useNavigate();
        const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const response=await fetch(`http://localhost:5000/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(user),
            });
            if(response.ok)
            {
                const res_data=await response.json();
                console.log("res from  server",res_data);
                storetokenInLS(res_data.token);
                // localStorage.setItem('token',res_data.token);
                setUser({
                    email:"",
                    password:"",
                });
                navigate("/");
            }
            else{
                alert("invalid credentials");
                console.log("invalid credentials");
            }
            console.log(response);
        }catch(error)
        {
            console.log("login",error);
        }
        
    };
    return(
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder py-5">Welcome Back</h1>
                        <p className="lead text-center">Enter Your Credentials To Login</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to = "/SignUp" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label htmlFor="exampleInputEmail1" class="form-label">
                                    Email address
                                </label>
                                <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={user.email} onChange={handleInput} aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">
                                    Password
                                </label>
                                <input type="password" class="form-control" name="password" value={user.password} onChange={handleInput} id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">
                                    Check me out
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary rounded-pill w-100">
                                login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
