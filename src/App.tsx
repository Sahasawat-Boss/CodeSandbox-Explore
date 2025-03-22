import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";
import ThemeToggle from "./components/ThemeToggle";
import "./CSS/Main.css";

export default function App() {
  return (
    <div className="App">
      {/* Title Section */}
      <div className="Title">
        User Management
        <span>
          <ThemeToggle />
        </span>
      </div>
      {/* MainSection */}
      <AddUserForm />

      <UserList />
      {/* MainSection */}
    </div>
  );
}
