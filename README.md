# Block Chain 
made for CSC598
has  a helloworld contract and a voting contract
# How to use
'''
npx hardhat compile
'''
'''
npx hardhat node
'''
Open another terminal to deploy the voting contract
'''
npx hardhat run scripts/votedeploy.js --network localhost
...
To cast a vote, change the candidate index in vote.js to vote for another candidate, default is candidate 0
'''
npx hardhat run scripts/vote.js
'''
To see who wins at the moment
'''
npx hardhat run scripts/getwinner.js --network localhost
'''



