import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCurrentUser } from '../redux/userSlice';


const Login = () => {

   const dispatch = useDispatch();
   const history = useHistory();

   const [formData, setFormData] = useState({
      username: "",
      password: "",
      profile_img: "",
   })
   // set errors to array initially because errors = []
   const [errors, setErrors] = useState([]);
   
   function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
      console.log(formData)
   }
   
   function handleLogin(e) {
      e.preventDefault()
      
      // authenticate username and password
      fetch('http://localhost:4000/login', {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
      })
      .then(r => r.json())
      .then(data => {
         if (data.errors){
            setErrors(data.errors)
         } else {
            const action = setCurrentUser(data)
            dispatch(action)
            setErrors([])
            history.push("/home")
         }
      })

      setFormData({
         username: "",
         password: "",
      })
   }

   function handleClick() {
      history.push("/signup")
   }

   return (
      <div className="login">
         <div className="container">
            <div className="login-form">
               <form onSubmit={handleLogin}>
                  <label>Username:</label>
                  <input
                     type="input"
                     name="username"
                     value={formData.username}
                     onChange={handleChange} 
                  />
                  <label>Password:</label>
                  <input
                     type="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange} 
                  />
                  {errors.length > 0 ?
                     errors.map((error) => {
                        return (
                           <p key={error} style={{ color: "red" }}>{error}</p>
                        )
                     })
                     :
                     null
                  }
                  <input type="submit" value="login" />
               </form>
            </div>
            <div>
               <p>Don't have an account? <button onClick={handleClick}>Signup</button></p>
            </div>
         </div>
      </div>
   )
}

export default Login;
