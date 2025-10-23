'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BrandHeading, BodyText, BodyTextSmall } from '@/components/ui';
import { useAuth } from '@/components/admin/AuthProvider';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Check credentials using AuthProvider
    const success = await login(username, password);
    if (success) {
      // Redirect to CRM
      router.push('/intellsys/crm');
    } else {
      setError('Invalid username or password');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-brand-secondary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <img 
            src="https://cdn-sleepyhug-prod.b-cdn.net/media/intellsys-logo.webp"
            alt="Intellsys" 
            className="h-16 mx-auto mb-6"
          />
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-sm border border-border p-card-padding">
          <form onSubmit={handleSubmit} className="space-y-element-gap">
            <div>
              <label className="block text-body-small font-semibold mb-text-gap">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-body-small font-semibold mb-text-gap">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-card-padding-small">
                <BodyTextSmall className="text-red-900">
                  {error}
                </BodyTextSmall>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-secondary border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white hover:border-brand-accent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center">
          <BodyTextSmall className="text-text-muted">
            Intellsys Admin Panel
          </BodyTextSmall>
        </div>
      </div>
    </div>
  );
}
