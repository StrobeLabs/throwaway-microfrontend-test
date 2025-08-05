import React from 'react';
import './globals.css';

export default function Profile(): React.JSX.Element {
  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Profile</h1>
        <p className="text-muted-foreground">Your Perp City profile page</p>
        <div className="mt-8 p-6 border rounded-lg bg-background">
          <h2 className="text-2xl font-semibold mb-4">User Information</h2>
          <div className="space-y-2 text-left">
            <p><strong>Username:</strong> trader123</p>
            <p><strong>Email:</strong> trader@perp.city</p>
            <p><strong>Member Since:</strong> January 2024</p>
            <p><strong>Total Trades:</strong> 1,247</p>
            <p><strong>Success Rate:</strong> 87.3%</p>
          </div>
        </div>
      </div>
    </main>
  );
} 