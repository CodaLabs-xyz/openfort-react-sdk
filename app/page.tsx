import { AuthButton } from '@/components/auth-button';
import { WalletDisplay } from '@/components/wallet-display';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Openfort React Demo
            </h1>
            <p className="text-lg text-gray-600">
              Connect your MetaMask wallet to interact with Base Sepolia testnet.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Auth Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Connect Wallet</h2>
              <AuthButton />
            </div>

            {/* Wallet Display */}
            <WalletDisplay />
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>Built with Openfort React SDK + wagmi</p>
            <a 
              href="https://openfort.io/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Documentation →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
