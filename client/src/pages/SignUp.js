import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

function SignUp() {
  const [post, setPost] = useState();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  function handlePost(e) {
    setPost(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await supabase.from("post").insert([
      {
        post,
        user_id: session.user.id,
      },
    ]);
  }

  return (
    <div>
      <label htmlFor="">post</label>
      <br />
      <input type="text" value={post} onChange={handlePost} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default SignUp;
