
async function main() {
  const candidateNames = ["Everett", "Burton", "Miranda"];
  const Voting = await ethers.getContractFactory("Voting");
  console.log("Deploying Voting contract with candidate names:", candidateNames);
  const voting = await Voting.deploy(candidateNames);

  await voting.waitForDeployment();

  console.log("Voting contract deployed to:", await voting.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
});