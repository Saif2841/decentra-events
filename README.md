# DecentraEvents: A Decentralized Event Ticketing Platform

![DecentraEvents Hero Image](https://i.imgur.com/your-image-url.png ) 
<!-- Create a cool hero image for your project and upload it to a site like imgur.com -->

> A modern, secure, and transparent event ticketing platform built on Next.js and the blockchain. DecentraEvents leverages NFT technology to eliminate fraud, reduce scalping, and give true ownership of tickets to the attendees.

---

## 🌟 Key Features

-   **NFT-Based Tickets**: Every ticket is a unique Non-Fungible Token (NFT) on the blockchain, providing verifiable proof of ownership.
-   **Fraud & Scalping Resistant**: On-chain transactions make ticket history transparent, virtually eliminating counterfeit tickets. Organizers can set rules for secondary sales.
-   **Secure Verification**: No more QR codes. Attendees verify ticket ownership simply by connecting their crypto wallet at the venue entrance.
-   **Blazing-Fast Frontend**: Built with **Next.js** for Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR), ensuring fast page loads and excellent SEO for event pages.
-   **Reputation System**: Attendees and organizers build on-chain reputation based on participation and event quality, fostering a trustworthy community.
-   **Secondary Marketplace**: A built-in, secure marketplace for reselling tickets, with rules and potential royalties managed by the smart contract.

## 🛠️ Tech Stack

This project combines modern web development with cutting-edge blockchain technology.

| Category              | Technology                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| **Frontend**          | [**Next.js**](https://nextjs.org/ ) / [**React**](https://reactjs.org/ ) / [**Tailwind CSS**](https://tailwindcss.com/ ) |
| **Blockchain**        | [**Ethereum (Sepolia Testnet)**](https://ethereum.org/ ) / [**Polygon**](https://polygon.technology/ ) (for low fees) |
| **Smart Contracts**    | [**Solidity**](https://soliditylang.org/ ) / [**Hardhat**](https://hardhat.org/ ) / [**OpenZeppelin**](https://www.openzeppelin.com/contracts ) |
| **Wallet Integration**  | [**Wagmi**](https://wagmi.sh/ ) / [**Viem**](https://viem.sh/ ) (for wallet connection & contract interaction) |
| **Off-Chain Storage** | [**Vercel Postgres**](https://vercel.com/storage/postgres ) / [**Supabase**](https://supabase.io/ ) (for metadata, reviews) |
| **Deployment**        | [**Vercel**](https://vercel.com/ ) (Frontend) / On-chain (Smart Contracts)                                |

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development and testing.

### Prerequisites

-   [Node.js](https://nodejs.org/en/ ) (v18 or later)
-   [Git](https://git-scm.com/ )
-   A crypto wallet like [MetaMask](https://metamask.io/ )

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/[YourUsername]/decentra-events.git
    cd decentra-events
    ```

2.  **Install frontend dependencies:**
    ```bash
    npm install
    ```

3.  **Setup the blockchain environment:**
    Navigate to the `blockchain` directory and install its dependencies.
    ```bash
    cd blockchain
    npm install
    ```

4.  **Create the environment file (`.env` ):**
    In the `blockchain` directory, create a `.env` file by copying the example:
    ```bash
    cp .env.example .env
    ```
    Now, fill in the `.env` file with your own keys:
    -   `SEPOLIA_RPC_URL`: Your RPC URL from a service like [Alchemy](https://www.alchemy.com/ ) or [Infura](https://www.infura.io/ ).
    -   `PRIVATE_KEY`: The private key from your development wallet (use a burner wallet!).

5.  **Compile and Deploy the Smart Contracts:**
    Run the deployment script to the Sepolia testnet. Make sure your wallet has Sepolia ETH from a [faucet](https://sepoliafaucet.com/ ).
    ```bash
    npx hardhat run scripts/deploy.ts --network sepolia
    ```
    After deployment, copy the deployed contract address.

6.  **Configure the Frontend:**
    -   Go back to the root directory (`cd ..`).
    -   Create a file `src/lib/contracts.ts` and add the contract address and ABI.
    -   *(You can automate this step later by having the deployment script write the address and ABI to the frontend directory)*

7.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000 ) in your browser to see the application!

## Roadmap

-   [x] Core Smart Contracts (Factory & Ticket NFT)
-   [x] Event Creation UI & On-Chain Deployment
-   [x] Wallet Connection & Basic Event Browsing
-   [ ] Implement Secondary Marketplace for Ticket Resale
-   [ ] Develop On-Chain Reputation System
-   [ ] Add Off-Chain Metadata and Image Storage (IPFS/Arweave)
-   [ ] Build out User Profile Pages
-   [ ] DAO-based Event Governance Features

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

[Your Name] - [@YourTwitterHandle](https://twitter.com/YourTwitterHandle ) - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/[YourUsername]/decentra-events](https://github.com/[YourUsername]/decentra-events )
