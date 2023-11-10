import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserProfile from "./UserProfile";

export default function Header() {
  return (
    <header>
      <h2>Books</h2>
      <p>The ultimate book database</p>
      <UserProfile />
      <div className="log-in-out">
        <LoginButton />
        <LogoutButton />
      </div>
    </header>
  );
}
