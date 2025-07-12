import { useSession } from "next-auth/react";
import Header from "../components/Header";

const sampleMessages = [
  { from: "employer@example.com", to: "worker1@example.com", text: "Are you available tomorrow at 8am?" },
  { from: "worker1@example.com", to: "employer@example.com", text: "Yes! I’ll be there 10 mins early." },
  { from: "employer@example.com", to: "worker1@example.com", text: "Great, thanks!" }
];

export default function MessagesPage() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Messages</h1>
        {userEmail ? (
          <div style={{
            border: "1px solid #ccc",
            padding: "1rem",
            maxWidth: "500px",
            backgroundColor: "#fafafa"
          }}>
            {sampleMessages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "10px",
                  textAlign: msg.from === userEmail ? "right" : "left"
                }}
              >
                <p style={{
                  display: "inline-block",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  backgroundColor: msg.from === userEmail ? "#dcf8c6" : "#f1f0f0",
                  maxWidth: "70%"
                }}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>Please log in to view your messages.</p>
        )}
      </main>
    </>
  );
}
