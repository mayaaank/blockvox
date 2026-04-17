# 🗳️ BlockVox: Trustless E-Voting Protocol
### *Decentralized Governance for the Chain-Native Era*

BlockVox is a high-fidelity e-voting protocol built on the **Avalanche Fuji Testnet**. It resolves the fundamental trust deficit in modern elections by combining cryptographic privacy, Sybil-resistant whitelisting, and real-time AI transparency into a single, seamless experience.

---

## 🌟 The Vision
Traditional voting systems are "Black Boxes"—voters must trust centralized authorities that their votes were counted correctly. BlockVox flips this model: **Math replaces trust.** Every voter can mathematically verify the election's outcome without ever compromising their individual privacy.

---

## 🚀 Core Pillar Innovations

### 1. 🔒 Commit-Reveal Privacy
To prevent tactical voting and "front-running," BlockVox implements a two-phase protocol:
- **Phase 1 (Commit)**: Voters submit an encrypted hash of their choice (`keccak256(vote, salt)`). The choice remains hidden in the contract's public ledger.
- **Phase 2 (Reveal)**: In the second phase, voters provide their choice and salt. The contract verifies the match and tallies the vote.
*Benefit: No one knows the live results until the reveal phase, ensuring a fair and unbiased election.*

### 2. 🌳 Merkle-Tree whitelisting
BlockVox handles massive voter lists (e.g., student councils or campuses) with zero-knowledge efficiency:
- Thousands of student wallet addresses are compressed into a single **Merkle Root**.
- Only users with a valid **Merkle Proof** can interact with the contract.
*Benefit: Sybil resistance (one-person-one-vote) without storing sensitive private databases on-chain.*

### 3. 🛡️ AI Fraud Shield
A real-time monitoring system that visualizes protocol integrity:
- Scans for **Sybil Attacks**: Multiple wallets attempting to vote from the same source.
- Detects **Anomalous Patterns**: Unusual spikes in voting velocity.
- Monitors **Consensus Health**: Ensures the network sub-protocols are behaving fairly.

### 4. 📊 The Fairness Simulator
BlockVox is a "Governance Sandbox." It demonstrates that the *math* of voting matters as much as the *votes*:
- **FPTP**: Showing the "Spoiler Effect" of plurality voting.
- **Approval Voting**: Highlighting consensus-based winners.
- **Score Voting**: Capturing the intensity of voter passion (Cardinal Utility).

---

## 🛠️ Technology Stack & Architecture

- **Blockchain Backend**: Solidity Smart Contracts (Optimized for Avalanche Snowman consensus).
- **Core Cryptography**: Viem + Keccak256 (EVM-native hashing).
- **Modern Frontend**: Next.js 15 (App Router) + React 19 (Server Components).
- **Styling & Motion**: Tailwind 4 + Framer Motion (Glassmorphism & Fluid UI).
- **Web3 Connectivity**: RainbowKit + Wagmi (Seamless cross-browser wallet orchestration).

---

## 📁 Codebase Directory Guide

- `/contracts`: The "Laws" of the election. Immutable Solidity logic.
- `/frontend/app`: The "Terminal." Every route (Admin, Vote, Dashboard) is self-contained and documented.
- `/frontend/lib`: The "Engine." Contains the core Merkle Tree and Commitment logic.
- `/frontend/hooks`: The "Sensors." Reactive listeners that keep the UI in sync with the blockchain.

---

## 🚶 Dynamic Walkthrough (How to Demo)

1. **Admin Suite**: Upload `voters_sample.csv`, compute the Merkle Root, and click **"Start Election"** to sync with the blockchain.
2. **Voter Portal**: Connect wallet, enter your **VoterPass** code, and perform the **Commit → Reveal** handshake.
3. **Transparency Dashboard**: Watch the tally update in real-time as the **AI Fraud Shield** confirms 100% protocol integrity.
4. **Fairness Simulator**: Switch to **"Live Election Mode"** to see how alternative voting systems would have impacted the outcome.

---

## 🔮 Future Roadmap (BlockVox v2.0)
- **Quadratic Voting**: Voice Credits ($Cost = Votes^2$) to protect the minority passion.
- **ZK-Snarks**: Fully anonymous proofs where not even the admin can link a wallet to a vote.
- **Avalanche Subnet Deployment**: A dedicated sovereign blockchain for national-scale governance.

**Developed with ❤️ for upXgen 2026, PVG Nashik.**
