const { ethers } = require("hardhat");

async function main() {
  const AgroTrace = await ethers.getContractFactory("AgroTrace");
  const agroTrace = await AgroTrace.deploy();
  await agroTrace.deployed();
  console.log("AgroTrace deployed to:", agroTrace.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
