# AgroTrace LATAM 🌱

AgroTrace LATAM is a Web3 crop traceability platform for Bolivian farmers. It uses Ethereum smart contracts and Celestia to log crop data, confirm delivery, and release payments transparently.

## 🔧 Tech Stack
- Solidity (EVM)
- Next.js (Frontend)
- MetaMask (Wallet)
- Hardhat (Deployment)

## 🚀 Features
- Submit crop data
- Confirm delivery
- Automatic payment release

## 📦 Setup
```bash
npm install
npx hardhat compile
npx hardhat run smart-contracts/deploy.js --network sepolia
npm run dev
