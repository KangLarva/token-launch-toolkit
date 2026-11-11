# token-launch-toolkit

A free, open-source template for launching your own ERC-20 token. MIT licensed — use it, fork it, ship it. No fees, no backdoors, no hidden owner powers.

## What you get

- `contracts/Token.sol` — a clean ERC-20 (OpenZeppelin) with burn. No tax, no blacklist, no minting after deploy. The full supply is minted once to the deployer.
- `scripts/deploy.js` — deploys your token and verifies it on the block explorer when an API key is set.
- `test/Token.test.js` — tests for name, symbol, supply, transfers and burns.
- `hardhat.config.js` — ready networks: BSC, BSC Testnet, Base, Base Sepolia, Ethereum, Sepolia.
- `docs/LAUNCH_CHECKLIST.md` — the pre-launch checklist.

## Quick start

```bash
git clone <this-repo>
cd token-launch-toolkit
npm install
cp .env.example .env
```

Edit `.env`:

```bash
PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HERE
TOKEN_NAME=My Token
TOKEN_SYMBOL=MTK
TOKEN_SUPPLY=1000000000
```

Then:

```bash
npm test                  # run the tests
npm run compile           # compile the contract
npm run deploy:bsc-testnet   # deploy to BSC Testnet (free test BNB)
npm run deploy:base-sepolia  # deploy to Base Sepolia
npm run deploy:bsc           # deploy to BSC mainnet (real funds!)
```

The deploy script prints the token address and verifies the contract automatically when a `BSCSCAN_API_KEY` / `BASESCAN_API_KEY` / `ETHERSCAN_API_KEY` is set in `.env`.

## Networks

| Network | Chain ID | Deploy command |
| --- | --- | --- |
| BSC Testnet | 97 | `npm run deploy:bsc-testnet` |
| BSC | 56 | `npm run deploy:bsc` |
| Base Sepolia | 84532 | `npm run deploy:base-sepolia` |
| Base | 8453 | `npm run deploy:base` |
| Sepolia | 11155111 | `npm run deploy:sepolia` |
| Ethereum | 1 | `npm run deploy:ethereum` |

## forks.wiki

This repo itself can have a coin launched on it at [forks.wiki](https://forks.wiki/launch): one coin per repository, and the launcher keeps half of the creator fees. A repository with no coin yet is "free" — anyone can launch its coin.

## Security — read this

- **Never commit your real `.env`.** It holds your private key. `.gitignore` already excludes it.
- **Test on a testnet first** (BSC Testnet or Base Sepolia) before spending real funds.
- This template has **no owner functions after deploy** — nobody can mint more, pause, or tax transfers. If you add features, get them reviewed first.
- A deployed token is not a promise of value. See `docs/LAUNCH_CHECKLIST.md` before launching for real.

## License

MIT — free for everyone.
