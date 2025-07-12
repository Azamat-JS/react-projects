import { useAuth } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "./ChatList.css";

const ChatList = () => {
  const { getToken } = useAuth();

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const token = await getToken();
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch chats");
      return res.json();
    },
  });

  return (
    <div className="chatlist">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.map((item) => (
              <Link key={item._id} to={`/dashboard/chats/${item._id}`}>
                {item.title || "Untitled"}
              </Link>
            ))}
        <hr />
        <div className="upgrade">
          <img src="/logo.png" alt="" />
          <div className="texts">
            <span>Upgrade to ZET AI Pro</span>
            <span>Get unlimited access to all features</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
