import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/userSlice';


const Signup = () => {

   const history = useHistory();
   const dispatch = useDispatch();
   const [formData, setFormData] = useState({
      username: "",
      password: "",
      profile_img: "",
   })
   const [errors, setErrors] = useState([]);

   function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
   }

   function handleSubmit(e) {
      e.preventDefault()

      // POST /users
      fetch("http://localhost:4000/users", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
         if(data.errors) {
            setErrors(data.errors)
         } else {
            // set user in state
            const action = setCurrentUser(data)
            console.log(action)
            dispatch(action)
            // set errors []
            setErrors([])
            // push to home page
            history.push("/home")
         }
      })

      // reset form fields
   }

   function handleClick() {
      history.push("/login")
   }

   return (
      <div className="signup">
         <div className="container">
            <div className="signup-form">
               <form onSubmit={handleSubmit}>
                  <label>Username:</label>
                  <input
                     name="username"
                     type="input"
                     value={formData.username}
                     onChange={handleChange}
                   />
                  <label for="password">Password:</label>
                  <input
                     name="password"
                     type="password"
                     value={formData.password}
                     onChange={handleChange}
                   />
                  <label for="profile_img">Profile Image URL:</label>
                  <input
                     name="profile_img"
                     type="input"
                     value={formData.profile_img}
                     onChange={handleChange}
                   />
                   {errors.length > 0 ? 
                     errors.map((error) => {
                        return(
                           <p style={{ color: "red" }} key={error}>{error}</p>
                        )
                     })
                     :
                     null
                   }
                   <input type="submit" value="Signup" />
               </form>
            </div>
            <div className="">
               <p>Already have an account? <button onClick={handleClick}>Login</button></p>
            </div>
         </div>
      </div>
   )
}

export default Signup;

