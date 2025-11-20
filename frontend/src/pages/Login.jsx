import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    console.log('Logging in with:', { email, password });
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <form
        onSubmit={handleSubmit}
        className="card w-full max-w-md shadow-xl bg-base-100 p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-primary">Login</h2>

        {error && (
          <p className="text-error text-sm text-center">{error}</p>
        )}

        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>

        <p className="text-sm text-center">
          Don’t have an account?{' '}
          <a href="/signup" className="link link-primary">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
