// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
pragma solidity ^0.8.0;

// contract address => 0x44Bd2aa836364550F322e6fB7E27AE15068201D9
contract Wallet is ERC20 {
    address public owner;
    uint256 public ID;
    uint256 public balance;

    constructor () ERC20('GoGreen','GG')  {
        owner = msg.sender;
        ID++ ;
        balance = 0;
        _mint(msg.sender, 999999 * 10**18);
    }
}