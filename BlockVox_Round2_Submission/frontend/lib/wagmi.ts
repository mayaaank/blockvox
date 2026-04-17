'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { type Chain } from 'viem';

/* ─── Chain Definitions ─────────────────────────────── */

// Avalanche Fuji Testnet (PRIMARY — pre-selected)
export const avalancheFuji: Chain = {
  id: 43113,
  name: 'Avalanche Fuji',
  nativeCurrency: {
    decimals: 18,
    name: 'AVAX',
    symbol: 'AVAX',
  },
  rpcUrls: {
    default: {
      http: ['https://api.avax-test.network/ext/bc/C/rpc'],
    },
  },
  blockExplorers: {
    default: {
      name: 'SnowTrace',
      url: 'https://testnet.snowtrace.io',
    },
  },
  testnet: true,
};

    default: {
      http: ['https://api.avax.network/ext/bc/C/rpc'],
    },
  },
  blockExplorers: {
    default: {
      name: 'SnowTrace',
      url: 'https://snowtrace.io',
    },
  },
  testnet: false,
};

/* ─── Wagmi + RainbowKit Config ─────────────────────── */
export const config = getDefaultConfig({
  appName: 'BlockVox — Trustless E-Voting',
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || 'demo_project_id',
  chains: [avalancheFuji],
  transports: {
    [avalancheFuji.id]: http('https://api.avax-test.network/ext/bc/C/rpc'),
  },
  ssr: true,
});
