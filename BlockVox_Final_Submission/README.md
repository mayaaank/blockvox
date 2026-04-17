# 🗳️ BlockVox Protocol
### *Trustless E-Voting on Avalanche Fuji*

**Final Submission: Round 2 (upXgen 2026, PVG Nashik)**  
*A decentralized, verifiable, and private voting protocol designed for the next generation of digital democracy.*

---

## 🏛️ Project Gateway
BlockVox is a secure, private, and verifiable e-voting protocol built on **Avalanche Fuji Testnet**. It features a modern commit-reveal architecture, Merkle tree whitelisting, and a high-fidelity transparency dashboard.

### 📖 Essential Documentation
For a deep dive into our innovations, architecture, and demo guide, please refer to:
- **[📜 Full Project Documentation](./FINAL_DOCUMENTATION_BLOCKVOX.md)** (Read this first for the full vision)
- **[🛠️ Technical Explanation](./TECHNICAL_EXPLANATION.md)** (Deep dive into cryptography and sub-protocols)

---

## 🚀 Fast-Track Guide for Judges

1. **Deploy/Sync**: Connect as Admin, upload `voters_sample.csv`, and click **"Start Election"** to sync the whitelist with the blockchain.
2. **Participate**: In the `/vote` portal, connect your wallet, enter a VoterPass code, and perform the **Commit-Reveal** handshake.
3. **Analyze**: Visualize results in the real-time `/dashboard` and explore alternative math in the `/simulator`.

*Note: For a zero-gas experience, toggle **Demo Mode** in the header of the Admin and Vote pages.*

---

## 📂 Modular Structure
- `/contracts`: Core protocol logic (Solidity ^0.8.24).
- `/frontend/app`: Next.js 15 UI with high-fidelity glassmorphism.
- `/frontend/lib`: Cryptography, Merkle Trees, and Simulation Engine.
- `/frontend/hooks`: Reactive on-chain synchronization.
- `/scripts`: Deployment and automation scripts.

---

## ⚡ Protocol Pillars
### 1. Commit-Reveal Privacy
Votes are hidden using keccak256 hashes until the reveal phase concludes, preventing front-running and tactical manipulation.

### 2. Merkle Whitelisting
Thousands of eligible participants are compressed into a 32-byte root for hyper-efficient on-chain eligibility verification.

### 3. AI Fraud Shield
Real-time monitoring and visualization of protocol integrity, sybil resistance, and consensus health.

### 4. Fairness Sandbox
A governance tool comparing plurality vs. consensus-based voting models (FPTP, IRV, Approval, Score).

---

**Built with ❤️ for PVG Nashik. [SnowTrace Contract Address](https://testnet.snowtrace.io/address/0x368f4B6BAb26E47d1fA6E2eeA0f718E235D3B649)**
