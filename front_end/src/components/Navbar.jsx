const Navbar = ({ user, setUser }) => {
  const logout = () => {
    // API logout pipeline (commented)
    // axios.post("/api/logout");

    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav>
      <div>
        🛡️ <strong>GuardNet</strong> | {user.role.toUpperCase()}
      </div>

      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
