function App() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-container">
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
            <button type="button" id="togglePassword" className="toggle-password">👁️</button>
          </div>
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default App;
