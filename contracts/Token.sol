// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

/// @title Token — a simple, clean ERC-20 for free token launches.
/// @notice No tax, no blacklist, no minting after deploy. The full supply
/// is minted once to the deployer. Set NAME, SYMBOL and SUPPLY in .env.
/// @dev Part of the token-launch-toolkit template (MIT, free to use).
contract Token is ERC20, ERC20Burnable {
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply_
    ) ERC20(name_, symbol_) {
        _mint(msg.sender, initialSupply_);
    }
}
