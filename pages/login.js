import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn("credentials", { email, password, callbackUrl: "/" });
      }}>
        <input name="email" type="email" placeholder="Email" required /><br />
        <input name="password" type="password" placeholder="Password" required /><br />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}