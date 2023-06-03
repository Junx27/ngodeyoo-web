import { useState, useEffect } from "react";
import { BsPersonCircle } from "react-icons/bs";
import supabase from "../config/supabaseClientAdmin";

export default function ProfileNameCompany() {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchProfile() {
    const { data: profile } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.user.id);

    setProfile(profile);
  }
  const [session, setSession] = useState();

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

  if (!session) {
    return <div></div>;
  } else {
    return (
      <div className="orange font_profile me-2">
        {profile &&
          profile.map((profile) => (
            <div key={profile.id}>
              <BsPersonCircle className="me-3 icon" />
              {profile.nama}
            </div>
          ))}
      </div>
    );
  }
}
