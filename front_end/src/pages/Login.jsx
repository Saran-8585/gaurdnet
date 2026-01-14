import users from "../data/users.json";

const Login = ({ setUser }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const found = users.find(
      u => u.email === email && u.password === password
    );

    if (!found) return alert("Invalid credentials");

    localStorage.setItem("user", JSON.stringify(found));
    setUser(found);
  };

  return (
    <div className="login">
      <h2>GuardNet Login</h2>
      <form onSubmit={handleLogin}>
        <input name="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
