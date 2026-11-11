# Launch checklist

Work through this list before launching a token for real. A template does not replace thinking.

## Before testnet

- [ ] Token name, symbol and supply decided (supply is fixed at deploy — it cannot change later)
- [ ] No extra features added without review (tax, blacklist, pausable, minting)
- [ ] `npm test` passes
- [ ] `.env` created from `.env.example`, real `.env` never committed

## On testnet (BSC Testnet / Base Sepolia)

- [ ] Deploy with `npm run deploy:bsc-testnet` or `npm run deploy:base-sepolia`
- [ ] Contract verified on the block explorer (automatic when an API key is set)
- [ ] Test a transfer, a burn, and a wallet import (MetaMask: add the token address)
- [ ] Check the token on the explorer: supply, holders, no unexpected transactions

## Before mainnet

- [ ] Deployer wallet holds enough native coin for gas (BNB / ETH) — check twice
- [ ] Private key is in a wallet you control, never shared with anyone or any site
- [ ] Liquidity plan decided (pool, lock, or no pool — say so honestly)
- [ ] No promises made that the code cannot keep (no "LP burned" unless the code does it)
- [ ] Contract verified on the explorer right after deploy

## After launch

- [ ] Token address published from the explorer link, not from memory
- [ ] Liquidity locked / ownership renounced only if that was the plan (and only if you understand it cannot be undone)
- [ ] Monitor the first transfers for anything unexpected

## forks.wiki

If this repo gets a coin launched on it at [forks.wiki](https://forks.wiki/launch), remember: one coin per repository, and the creator-fee split is locked at launch. The repo owner and contributors share fees with the launcher and forks.
