import { expect } from "chai";
import { ethers } from "hardhat";
import { EventTicket } from "../typechain-types"; // 1. IMPORT the contract type

describe("DecentraEventsFactory", function () {
  it("Should create an event and allow a user to buy a ticket", async function () {
    const [organizer, buyer] = await ethers.getSigners();

    // Deploy the factory
    const Factory = await ethers.getContractFactory("DecentraEventsFactory");
    const factory = await Factory.connect(organizer).deploy();

    // Create an event
    const ticketPrice = ethers.parseEther("0.1");
    await expect(factory.createEvent("My Concert", "MYC", ticketPrice, 100, Date.now()))
      .to.emit(factory, "EventCreated");

    // Get the created event details
    const eventDetails = await factory.events(0);
    const ticketContractAddress = eventDetails.ticketContractAddress;

    // Connect to the new EventTicket contract
    const EventTicketFactory = await ethers.getContractFactory("EventTicket");
    
    // 2. CAST the attached contract to the correct type
    const ticketContract = EventTicketFactory.attach(ticketContractAddress) as EventTicket;

    // Buyer purchases a ticket
    // Now TypeScript knows that ticketContract has a 'buyTickets' method.
    await expect(ticketContract.connect(buyer).buyTickets(1, { value: ticketPrice }))
      .to.not.be.reverted;

    // Verify the buyer owns the ticket
    // And it also knows about the 'ownerOf' method from ERC721.
    expect(await ticketContract.ownerOf(1)).to.equal(buyer.address);
  });
});
