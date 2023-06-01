import React, { useEffect, useState } from "react";
import BerandaEvent from "../../components/BerandaEvent";
import Card from "../../components/Card";
import supabase from "../../config/supabaseClientAdmin";
import { useNavigate } from "react-router-dom";
import LoginSession from "../../components/LoginSession";
import Header from "../../components/HeaderAdmin";

function Home() {
  let navigate = useNavigate();
  const [session, setSession] = useState();

  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data: posts, error } = await supabase.from("posts").select("*");

    setPosts(posts);
  }

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  console.log(posts);
  return (
    <>
      <Header />
      <div className="container">
        <>
          {session ? (
            <>
              <div className="ms-5 mt-4">
                <BerandaEvent />
              </div>
              <hr />
              <div className="ms-2 mb-4 mt-3 d-flex align-items-center shadow px-3 py-3">
                <nav className="me-3 orange">New Post</nav>
                <nav className="me-3 text-muted">Popular Post</nav>
                <nav className="me-auto text-muted">Update Post</nav>
                <input type="text" className="rounded border border-warning" />
                <button className="btn bg-orange-btn bg-orange-hover-btn ms-2">
                  Search
                </button>
              </div>
              <div className="row text-center mt-5">
                <div className="col-3 ms-5 border-end">
                  <h4 className="font blue">Daftar Perusahaan</h4>
                  <hr />
                  <ul className="text-start">
                    <li>PT. ROYAL KORINDAH</li>
                    <li>PT. BOYANG INDUSTRIAL</li>
                    <li>PT. INDOKORES SAHABAT</li>
                    <li>PT. KESAN BARU SEJAHTERA</li>
                  </ul>
                </div>
                <div className="col-8 ms-3">
                  <h4 className="font blue">
                    Daftar Lowongan <span className="orange">Pekerjaan</span>
                  </h4>
                  <hr />
                  <div className="shadow p-3 mb-5">
                    {posts &&
                      posts.map((posts) => (
                        <Card key={posts.id} posts={posts} />
                      ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <LoginSession />
          )}
        </>
      </div>
    </>
  );
}

export default Home;
