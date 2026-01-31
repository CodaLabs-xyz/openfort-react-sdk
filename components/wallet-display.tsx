'use client';

import { useAccount, useBalance } from 'wagmi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function WalletDisplay() {
  const { address, isConnected, chain } = useAccount();
  const { data: balance, isLoading: balanceLoading } = useBalance({ address });

  if (!isConnected || !address) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-gray-500">Please connect your wallet to view details</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Your Wallet
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Address</p>
          <p className="font-mono text-sm bg-gray-100 p-2 rounded break-all">
            {address}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Network</p>
          <p className="font-medium">{chain?.name || 'Unknown'}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Balance</p>
          <p className="font-medium text-lg">
            {balanceLoading ? (
              'Loading...'
            ) : balance ? (
              `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}`
            ) : (
              '0 ETH'
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
