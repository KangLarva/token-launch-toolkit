const hre = require("hardhat");

async function main() {
  const name = process.env.TOKEN_NAME || "My Token";
  const symbol = process.env.TOKEN_SYMBOL || "MTK";
  const supply = process.env.TOKEN_SUPPLY || "1000000000"; // whole tokens, 18 decimals

  const initialSupply = BigInt(supply) * 10n ** 18n;

  console.log(`Deploying ${name} (${symbol}) with supply ${supply}...`);

  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy(name, symbol, initialSupply);
  await token.waitForDeployment();

  const address = await token.getAddress();
  const deployer = (await hre.ethers.getSigners())[0].address;

  console.log(`Token deployed at: ${address}`);
  console.log(`Network: ${hre.network.name} (chainId ${hre.network.config.chainId})`);
  console.log(`Deployer: ${deployer}`);

  // Verify on the block explorer if an API key is set for this network.
  const apiKeys = {
    bsc: process.env.BSCSCAN_API_KEY,
    bscTestnet: process.env.BSCSCAN_API_KEY,
    base: process.env.BASESCAN_API_KEY,
    baseSepolia: process.env.BASESCAN_API_KEY,
    sepolia: process.env.ETHERSCAN_API_KEY,
    ethereum: process.env.ETHERSCAN_API_KEY,
  };

  if (apiKeys[hre.network.name]) {
    console.log("Verifying contract on the block explorer...");
    try {
      await hre.run("verify:verify", {
        address,
        constructorArguments: [name, symbol, initialSupply],
      });
      console.log("Verified!");
    } catch (e) {
      console.log("Verification skipped/failed:", e.message);
    }
  } else {
    console.log("No explorer API key set — skipping verification.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
