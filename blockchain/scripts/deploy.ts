import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.deployContract("DecentraEventsFactory");
  await factory.waitForDeployment();

  console.log(`DecentraEventsFactory deployed to: ${factory.target}`);
  // Deployed to: 0x... (this is the address you need)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
