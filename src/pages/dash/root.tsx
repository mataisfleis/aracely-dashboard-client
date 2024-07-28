import { Guild } from "discord.js";
import { ReactNode, useEffect, useState } from "react";

export default function DashRoot(): ReactNode {
  interface User {
    profile: {
      id: string;
      username: string;
      discriminator: string;
      avatar: string;
      guilds: Guild[];
    };
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/dash`, {
      credentials: "include",
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
    
  }, []);
  console.log(user);
  return (
    <>
      <div>
        {user ? (
          <div>
            <h1>Welcome to your dashboard, {user.profile.username}</h1>
            <a href={import.meta.env.VITE_BACKEND_URL + "/auth/logout"}>
              Logout
            </a>
          </div>
        ) : (
          <a href={import.meta.env.VITE_BACKEND_URL + "/auth"}>
            Login with Discord
          </a>
        )}
      </div>
    </>
  );
}
