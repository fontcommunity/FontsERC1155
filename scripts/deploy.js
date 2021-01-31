// scripts/deploy.js
async function main() {
  // We get the contract to deploy
  const FontsERC1155 = await ethers.getContractFactory("FontsERC1155");
  console.log("Deploying FontsERC1155...");
  const fontsERC1155 = await FontsERC1155.deploy();
  await fontsERC1155.deployed();
  console.log("FontsERC1155 deployed to:", fontsERC1155.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });