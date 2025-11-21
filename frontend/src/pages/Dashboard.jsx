import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center p-8">
      <div className="card w-full max-w-4xl bg-base-100 shadow-xl p-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Welcome to SAUTI</h1>
        <p className="text-gray-600 mb-6">
          This is your safe space to share, heal, and connect.
        </p>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-200 p-4 shadow">
            <h2 className="text-xl font-semibold">Share a Story</h2>
            <p className="text-sm text-gray-500">Express yourself and inspire others.</p>
            <button className="btn btn-primary mt-3 w-full">New Story</button>
          </div>

          <div className="card bg-base-200 p-4 shadow">
            <h2 className="text-xl font-semibold">Healing Resources</h2>
            <p className="text-sm text-gray-500">Explore guides, articles, and support.</p>
            <button className="btn btn-secondary mt-3 w-full">Browse</button>
          </div>

          <div className="card bg-base-200 p-4 shadow">
            <h2 className="text-xl font-semibold">Community</h2>
            <p className="text-sm text-gray-500">Connect with others in safe spaces.</p>
            <button className="btn btn-accent mt-3 w-full">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
