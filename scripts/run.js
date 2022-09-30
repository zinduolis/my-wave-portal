const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.1"),
    });
    await waveContract.deployed();

    console.log("Contract addy:", waveContract.address);

    let contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    console.log(
        "Contract Balance before: ",
        hre.ethers.utils.formatEther(contractBalance)
    );

    // let waveCount = await waveContract.getTotalWaves();
    // console.log(waveCount.toNumber());


    waveTxn = await waveContract.wave("Wave #1");
    await waveTxn.wait();

    waveTxn = await waveContract.wave("Wave #2");
    await waveTxn.wait();

    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
        "Contract balance after: ",
        hre.ethers.utils.formatEther(contractBalance)
    );

    // const [_, randomPerson] = await hre.ethers.getSigners();

    // let allWaves = await waveContract.getAllWaves();
    // console.log(allWaves);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
        // Read mor about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
    }
};

runMain();