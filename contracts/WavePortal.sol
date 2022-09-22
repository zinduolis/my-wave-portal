// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    address[] wavers; 
    mapping(address => uint) waveCountPerAddress;

    constructor() {
        console.log("Ripping the wave and enjoying the barrel!");
    }

    function wave() public {
        totalWaves += 1;
        wavers.push(msg.sender);
        waveCountPerAddress[msg.sender]++;
        console.log("%s has waved %d times!", msg.sender, waveCountPerAddress[msg.sender]);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getWavers() public view {
        console.log("These are the wavers:\n");
        for (uint i = 0; i < wavers.length; i++) {
            console.log(i, ")", wavers[i], "\n");
        }
    }
}