async function main() {
    
    const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

    const Voting = await ethers.getContractFactory("Voting");
    const voting = Voting.attach(contractAddress);
  
    try {
      const winner = await voting.getWinner();
      console.log(`The winner is: ${winner}`);
    } catch (error) {
      console.error("Error fetching the winner:", error.message);
    }
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });