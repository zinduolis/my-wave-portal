tests-MBP:my-wave-portal alfred$ npx hardhat run scripts/deploy.js --network goerli
Deploying contracts with account:  0x634Fa6F0E7968289C15F284ABc1213a3C780FE12
Account balance:  216525000000000000
WavePortal address:  0x9Ddd4C47B17852fB41fd8f29510bD0c4810F097E

29/09/22 10:54 
tests-MBP:my-wave-portal alfred$ npx hardhat run scripts/run.js 
Compiled 1 Solidity file successfully
Waving and smiling!
Contract addy: 0x5FbDB2315678afecb367f032d93F642f64180aa3
We have 0 total waves!
0
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 has waved w/ message A message!
0x70997970c51812dc3a010c7d01b50e0d17dc79c8 has waved w/ message Another message!
[
  [
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    'A message!',
    BigNumber { value: "1664412796" },
    waver: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    message: 'A message!',
    timestamp: BigNumber { value: "1664412796" }
  ],
  [
    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    'Another message!',
    BigNumber { value: "1664412797" },
    waver: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    message: 'Another message!',
    timestamp: BigNumber { value: "1664412797" }
  ]
]

tests-MBP:my-wave-portal alfred$ npx hardhat run scripts/deploy.js --network goerli
Deploying contracts with account:  0x634Fa6F0E7968289C15F284ABc1213a3C780FE12
Account balance:  215035448593144710

So, now that we've updated our contract we need to do a few things:

1. We need to deploy it again. 
npx hardhat run scripts/deploy.js --network goerli

2. We need to update the contract address on our frontend.
Change contractAddress in App.js to be the new contract address we got from the step above in the terminal just like we did before the first time we deployed.

3. We need to update the abi file on our frontend. 
Get the updated abi file from artifacts like we did before and copy-paste it into Replit just like we did before. If you forgot how to do this be sure to revisit the lesson

29/09/22 15:24
tests-MacBook-Pro:my-wave-portal alfred$ npx hardhat run scripts/deploy.js --network goerli
Deploying contracts with account:  0x634Fa6F0E7968289C15F284ABc1213a3C780FE12
Account balance:  214035502312879455
WavePortal address:  0xec480F158B5fdCaADf216e0E138e8B33e575759C

29/09/22 21:49
tests-MacBook-Pro:my-wave-portal alfred$ npx hardhat run scripts/deploy.js --network goerli
Deploying contracts with account:  0x634Fa6F0E7968289C15F284ABc1213a3C780FE12
Account balance:  212743688123592587
WavePortal address:  0xeBE77d7Ab354643595EA6469EE1574372930E5dA

30/09/22 17:04
tests-MacBook-Pro:my-wave-portal alfred$ npx hardhat run scripts/deploy.js --network goerli
Deploying contracts with account:  0x634Fa6F0E7968289C15F284ABc1213a3C780FE12
Account balance:  148307553227259990
WavePortal address:  0x81D5c19361f9EbF8Dd4Ca53DD9A7B5cd7DC78B94