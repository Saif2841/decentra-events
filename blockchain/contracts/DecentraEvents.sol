// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title EventTicket
 * @dev This is the ERC721 contract for a single event's tickets.
 * It is created by the DecentraEventsFactory.
 */
contract EventTicket is ERC721, Ownable, ReentrancyGuard {
    uint256 public immutable ticketPrice;
    uint256 public immutable maxTickets;
    uint256 public totalTicketsSold;

    constructor(
        string memory name,
        string memory symbol,
        address initialOwner,
        uint256 price,
        uint256 supply
    ) ERC721(name, symbol) Ownable(initialOwner) {
        ticketPrice = price;
        maxTickets = supply;
    }

    function buyTickets(uint256 quantity) public payable nonReentrant {
        require(tx.origin == msg.sender, "Contracts cannot buy tickets");
        require(totalTicketsSold + quantity <= maxTickets, "Not enough tickets left");
        require(msg.value >= ticketPrice * quantity, "Incorrect payment amount");

        for (uint i = 0; i < quantity; i++) {
            totalTicketsSold++;
            _safeMint(msg.sender, totalTicketsSold);
        }
    }

    function withdraw() public onlyOwner {
        (bool success, ) = owner().call{value: address(this).balance}("");
        require(success, "Withdrawal failed");
    }
}

/**
 * @title DecentraEventsFactory
 * @dev A factory to create and manage multiple EventTicket contracts.
 */
contract DecentraEventsFactory {
    struct EventDetails {
        address organizer;
        string name;
        address ticketContractAddress;
        uint256 eventDate;
    }

    EventDetails[] public events;
    address public owner;

    event EventCreated(
        uint256 indexed eventId,
        address indexed organizer,
        string name,
        address ticketContractAddress
    );

    constructor() {
        owner = msg.sender;
    }

    function createEvent(
        string memory name,
        string memory symbol,
        uint256 ticketPrice,
        uint256 maxTickets,
        uint256 eventDate
    ) public {
        EventTicket newTicketContract = new EventTicket(
            name,
            symbol,
            msg.sender, // The organizer owns the ticket contract
            ticketPrice,
            maxTickets
        );

        uint256 eventId = events.length;
        events.push(EventDetails({
            organizer: msg.sender,
            name: name,
            ticketContractAddress: address(newTicketContract),
            eventDate: eventDate
        }));

        emit EventCreated(eventId, msg.sender, name, address(newTicketContract));
    }
}
