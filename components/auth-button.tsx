'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';

export function AuthButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  // Find MetaMask connector
  const metaMaskConnector = connectors.find(c => c.id === 'metaMask' || c.name === 'MetaMask');

  if (isConnected && address) {
    return (
      <div className="flex flex-col gap-3">
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800 font-medium">✓ Wallet Connected</p>
          <p className="text-xs text-green-600 font-mono mt-1">
            {address.slice(0, 6)}...{address.slice(-4)}
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => disconnect()}
          className="w-full"
        >
          Disconnect Wallet
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <Button 
        onClick={() => metaMaskConnector && connect({ connector: metaMaskConnector })}
        disabled={isPending || !metaMaskConnector}
        className="w-full flex items-center justify-center gap-2"
      >
        {isPending ? (
          'Connecting...'
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 212 189" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M201.252 1L119.265 61.8488L134.322 26.0047L201.252 1Z" fill="#E2761B" stroke="#E2761B" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5088 1L91.9106 62.4577L77.6782 26.0047L10.5088 1Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M171.678 137.054L150.074 170.738L196.619 183.574L210.067 137.786L171.678 137.054Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.17285 137.786L15.5401 183.574L62.0853 170.738L40.4816 137.054L2.17285 137.786Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M59.4175 82.3547L46.4548 102.02L92.6766 104.142L91.0571 54.4395L59.4175 82.3547Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M152.343 82.3547L120.298 53.8306L119.265 104.142L165.406 102.02L152.343 82.3547Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M62.0854 170.738L89.7611 157.578L65.8308 138.09L62.0854 170.738Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M121.999 157.578L150.074 170.738L145.929 138.09L121.999 157.578Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Connect MetaMask
          </>
        )}
      </Button>
      {!metaMaskConnector && (
        <p className="text-sm text-amber-600 text-center">
          MetaMask not detected. Please install the extension.
        </p>
      )}
    </div>
  );
}
