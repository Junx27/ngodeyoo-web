import React, { useEffect, useState } from "react";
import supabase from "../../config/supabaseClientAdmin";
import { useNavigate } from "react-router-dom";
import LogoCompany from "../../assets/images/logocompany.jpeg";

function HeaderProfil() {
  let navigate = useNavigate();
  const [nama, setNama] = useState();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchProfile() {
    const { data: profile, error } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.user.id);

    if (profile) {
      setNama(profile);
    }
    if (error) {
      setNama(null);
      console.log(error);
    }
  }

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
  return (
    <div>
      <div className="text-center shadow p-3">
        <img
          className=""
          src={LogoCompany}
          style={{ width: "100px", height: "100px" }}
          alt=""
        />
        {nama &&
          nama.map((profile) => {
            return (
              <div key={profile.id}>
                <h5 className="orange">{profile.nama}</h5>
                <hr />
                <p className="text-muted">{profile.alamat}</p>
              </div>
            );
          })}
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-info"
            onClick={() => {
              navigate("/createprofile");
            }}
          >
            edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderProfil;
