import "./RootLayout.css";
import { Link, Outlet } from "react-router-dom";
import { SignedIn, UserButton } from "@clerk/clerk-react";

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" />
          <span>ZET AI</span>
        </Link>
        <div className="user">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
