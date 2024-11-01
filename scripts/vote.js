
async function main() {
 
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  
  
  const candidateIndex = 0;
  

  const [voter] = await ethers.getSigners();
  
  
  const Voting = await ethers.getContractFactory("Voting");
  const voting = Voting.attach(contractAddress);
  
 
  const voteTx = await voting.connect(voter).vote(candidateIndex);
  
 
  await voteTx.wait();
  
  console.log(`Voted for candidate at index ${candidateIndex}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});