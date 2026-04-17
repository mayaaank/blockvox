# Technical Summary: BlockVox Protocol
**Project Title**: BlockVox — Trustless E-Voting on Avalanche  
**Submission Category**: Decentralized Governance / Social Impact  
**Submission Round**: 2 (Final)

---

## 1. Problem Statement
Traditional voting systems suffer from three primary failures:
- **Centralization**: High risk of database manipulation or "lost" ballots.
- **Privacy vs. Verifiability**: You either have secret ballots (hard to verify) or transparent ballots (no privacy).
- **Sybil Attacks**: In digital spaces, preventing one user from voting multiple times without compromising their identity is complex.

## 2. Technical Approach
BlockVox utilizes the **Avalanche Fuji C-Chain** to provide an immutable, decentralized execution environment. Our architecture follows a **Phase-Separated Protocol**:

### A. Phase 1: Commitment (Intent Lock)
Voters submit a `bytes32 commitmentHash` calculated as:  
`keccak256(abi.encodePacked(candidateId, salt))`  
This commitment is mapped to the voter's address. The `candidateId` remains private because pre-image attacks on Keccak256 are computationally infeasible.

### B. Phase 2: Revelation (Transparency)
Voters submit the raw `candidateId` and the `salt`. The smart contract re-computes the hash and compares it to the stored commitment. If it matches, the vote is tallied. This ensures the voter cannot change their mind after seeing initial results.

## 3. Core Innovations
- **Merkle-Whitelisting**: Instead of storing 1,000s of addresses in contract state (expensive), we store one `bytes32 merkleRoot`. Voters provide a proof with their transaction, reducing gas costs by ~90%.
- **VoterPass (Demo Layer)**: A secondary token-based nullifier system to ensure strict sybil resistance in high-activity demos without requiring complex on-chain registration for new users.
- **AI Fraud Shield**: A frontend monitoring layer that audits on-chain events (`VoteRevealed`) to detect and visualize behavioral anomalies or rapid-fire sub-protocol attempts.

## 4. Demo Verification
The demo is currently configured for **Avalanche Fuji Testnet**. 
- **Contract Address**: `0x368f4B6BAb26E47d1fA6E2eeA0f718E235D3B649`
- **Verification**: All events are emitted in real-time. You can verify the `VoteCommitted` vs `VoteRevealed` parity on SnowTrace.

## 5. Deployment Instructions
Refer to the `README.md` for local environment setup. The contract is pre-compiled and pre-deployed to save judge review time.

---
**BlockVox** | *Building the future of verifiable trust.*
