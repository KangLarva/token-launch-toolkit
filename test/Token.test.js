const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token", function () {
  const NAME = "Test Token";
  const SYMBOL = "TEST";
  const SUPPLY = 1_000_000_000n * 10n ** 18n;

  let token, deployer, user;

  beforeEach(async function () {
    [deployer, user] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy(NAME, SYMBOL, SUPPLY);
    await token.waitForDeployment();
  });

  it("has the right name, symbol and decimals", async function () {
    expect(await token.name()).to.equal(NAME);
    expect(await token.symbol()).to.equal(SYMBOL);
    expect(await token.decimals()).to.equal(18);
  });

  it("mints the full supply to the deployer", async function () {
    expect(await token.totalSupply()).to.equal(SUPPLY);
    expect(await token.balanceOf(deployer.address)).to.equal(SUPPLY);
  });

  it("transfers tokens", async function () {
    const amount = 100n * 10n ** 18n;
    await token.transfer(user.address, amount);
    expect(await token.balanceOf(user.address)).to.equal(amount);
  });

  it("burns tokens", async function () {
    const amount = 10n * 10n ** 18n;
    await token.burn(amount);
    expect(await token.totalSupply()).to.equal(SUPPLY - amount);
  });
});
