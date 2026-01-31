/**
 * Openfort Configuration
 *
 * This file contains configuration constants and utilities
 * for the Openfort SDK integration.
 */

// Environment variables (ensure these are set in .env.local)
export const OPENFORT_CONFIG = {
  publishableKey: process.env.NEXT_PUBLIC_OPENFORT_PUBLISHABLE_KEY || '',
  shieldApiKey: process.env.NEXT_PUBLIC_SHIELD_API_KEY || '',
} as const;

// Validate configuration
export function validateConfig(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!OPENFORT_CONFIG.publishableKey) {
    errors.push('NEXT_PUBLIC_OPENFORT_PUBLISHABLE_KEY is not set');
  }

  if (!OPENFORT_CONFIG.publishableKey.startsWith('pk_')) {
    errors.push('Publishable key should start with "pk_"');
  }

  if (!OPENFORT_CONFIG.shieldApiKey) {
    errors.push('NEXT_PUBLIC_SHIELD_API_KEY is not set');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Supported chains configuration
export const SUPPORTED_CHAINS = {
  mainnet: {
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  polygon: {
    id: 137,
    name: 'Polygon',
    symbol: 'MATIC',
  },
  arbitrum: {
    id: 42161,
    name: 'Arbitrum One',
    symbol: 'ETH',
  },
  base: {
    id: 8453,
    name: 'Base',
    symbol: 'ETH',
  },
} as const;

// Default chain for new users
export const DEFAULT_CHAIN_ID = SUPPORTED_CHAINS.polygon.id;

// Authentication providers
export const AUTH_PROVIDERS = {
  email: 'email',
  google: 'google',
  apple: 'apple',
  discord: 'discord',
  twitter: 'twitter',
} as const;

export type AuthProvider = (typeof AUTH_PROVIDERS)[keyof typeof AUTH_PROVIDERS];
