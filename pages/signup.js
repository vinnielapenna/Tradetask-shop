export default function Signup() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Sign Up</h2>
      <form>
        <input placeholder="Name" /><br />
        <input placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
