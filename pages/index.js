import { useSession, signOut } from "next-auth/react";
import Header from "../components/Header";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      <main>
        <h1>Welcome to TradeTaskJobs</h1>
        {session ? (
          <>
            <p>Signed in as {session.user.email}</p>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <p>You are not signed in.</p>
        )}
      </main>
    </>
  );
}