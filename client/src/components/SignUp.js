import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [session, setSession] = useState();

  // async function session() {
  //   const { data, error } = await supabase.auth.getSession();
  // }
  // const auth = session();

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleLogin(e) {
    const { data, error } = supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data);
  }
  return (
    <div>
      {session ? (
        <>
          <div>Hello, {email}</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SignUp;
