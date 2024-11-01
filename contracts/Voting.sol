// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract Voting {
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    Candidate[] public candidates;

    mapping(address => bool) public hasVoted;

    constructor(string[] memory candidateNames) {
        for (uint256 i = 0; i < candidateNames.length; i++) {
            candidates.push(Candidate(candidateNames[i], 0));
        }
    }

    function vote(uint256 candidateIndex) public {
        require(!hasVoted[msg.sender], "You have already voted.");
        require(candidateIndex < candidates.length, "Invalid candidate index.");

        hasVoted[msg.sender] = true;
        candidates[candidateIndex].voteCount++;
    }

    function getWinner() public view returns (string memory winnerName) {
        uint256 highestVoteCount = 0;
        uint256 winnerIndex = 0;
        bool tie = false;

        for (uint256 i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > highestVoteCount) {
                highestVoteCount = candidates[i].voteCount;
                winnerIndex = i;
                tie = false;
            } else if (candidates[i].voteCount == highestVoteCount && highestVoteCount != 0) {
                tie = true;
            }
        }

        require(highestVoteCount > 0, "No votes have been cast.");
        require(!tie, "There is a tie between candidates.");

        winnerName = candidates[winnerIndex].name;
    }

    function getCandidates() public view returns (string[] memory) {
        string[] memory candidateList = new string[](candidates.length);
        for (uint256 i = 0; i < candidates.length; i++) {
            candidateList[i] = candidates[i].name;
        }
        return candidateList;
    }
}