import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Truncate an Ethereum address for display
 * @param address - Full Ethereum address
 * @param startChars - Number of characters to show at start (default: 6)
 * @param endChars - Number of characters to show at end (default: 4)
 */
export function truncateAddress(
  address: string,
  startChars: number = 6,
  endChars: number = 4
): string {
  if (!address) return '';
  if (address.length <= startChars + endChars) return address;
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
}

/**
 * Format a balance for display
 * @param balance - Balance as string or number
 * @param decimals - Number of decimal places (default: 4)
 */
export function formatBalance(
  balance: string | number | undefined,
  decimals: number = 4
): string {
  if (balance === undefined || balance === null) return '0.0000';
  const num = typeof balance === 'string' ? parseFloat(balance) : balance;
  if (isNaN(num)) return '0.0000';
  return num.toFixed(decimals);
}

/**
 * Format a number with thousand separators
 * @param num - Number to format
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

/**
 * Sleep for a specified duration
 * @param ms - Milliseconds to sleep
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
