import React from 'react'
import { useNavigate } from "react-router-dom";

function SignUp() {
    let navigate = useNavigate();
  return (
    <div>
      <h1>signUp</h1>

      <button onClick={()=> navigate("/login")}>Create</button>
    </div>
  )
}

export default SignUp
