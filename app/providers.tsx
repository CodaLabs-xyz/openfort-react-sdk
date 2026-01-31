'use client';

import { OpenfortProvider, getDefaultConfig } from '@openfort/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { baseSepolia } from 'viem/chains';
import { metaMask } from 'wagmi/connectors';

const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    metaMask(),
  ],
  transports: {
    [baseSepolia.id]: http(),
  },
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OpenfortProvider
          publishableKey={process.env.NEXT_PUBLIC_OPENFORT_PUBLISHABLE_KEY || 'pk_test_demo'}
        >
          {children}
        </OpenfortProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
