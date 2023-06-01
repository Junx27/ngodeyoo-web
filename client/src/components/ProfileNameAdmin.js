import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://dbhpkmvigjuofpaqsvxn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiaHBrbXZpZ2p1b2ZwYXFzdnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5MzEwNzQsImV4cCI6MjAwMDUwNzA3NH0.ug5C8CixUmJfbVpHavRonD0mqMuSDeaOiTPpbLoxcws"
);

export default function PrifileName() {
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

  if (!session) {
    return <div></div>;
  } else {
    return <div className="blue font me-4">{session.user.email}</div>;
  }
}
