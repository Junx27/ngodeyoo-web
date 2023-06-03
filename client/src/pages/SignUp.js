import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClientAdmin";
import { BsPersonCircle } from "react-icons/bs";

function SignUp() {
  const [session, setSession] = useState(null);

  const [profile, setProfile] = useState();
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchProfile() {
    const { data } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.user.id)
      .single();

    if (data) {
      setProfile(data?.nama);
    }
  }

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

  return (
    <div>
      <BsPersonCircle className="me-3 icon" />
      {profile}
      <button onClick={() => window.location.reload(true)}>Refresh</button>
    </div>
  );
}

export default SignUp;
