import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main>
      <h1>Welcome to TradeTaskJobs</h1>
      {session ? (
        <>
          <p>Signed in as {session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <p>You are not signed in.</p>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </main>
  );
}