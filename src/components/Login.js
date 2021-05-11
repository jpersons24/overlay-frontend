import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/userSlice';


const Login = () => {

   const dispatch = useDispatch();

   const [formData, setFormData] = useState({
      username: "",
      password: "",
      profile_img: "",
   })
   
   function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
      console.log(formData)
   }
   
   function handleLogin(e) {
      e.preventDefault()
      
      fetch('http://localhost:4000/login', {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
      })
      .then(r => r.json())
      .then(user => {
         const action = setCurrentUser(user);
         console.log(action)
         dispatch(action)
      })

      setFormData({
         username: "",
         password: "",
         profile_img: "",
      })
   }

   return (
      <div>
         <div style={{ display: "flex", justifyContent: "center" }}>
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
               <label>Profile Image URL:</label>
               <input
                  type="input"
                  name="profile_img"
                  value={formData.profile_img}
                  onChange={handleChange} 
               />
               <input type="submit" value="login" />
            </form>
         </div>
      </div>
   )
}

export default Login;
