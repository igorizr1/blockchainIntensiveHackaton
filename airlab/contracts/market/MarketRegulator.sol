pragma solidity ^0.4.4;
import 'lib/AddressList.sol';
import 'token/TokenEmission.sol';
import './MarketAgent.sol';
import './Market.sol';

/**
 * @title Market regulator abstract contract,
 *        this contract creates market and `credits` token
 *        for market trade
 */
contract MarketRegulator is Object {
    /* The self market */
    Market public market;

    /* The self credits */
    TokenEmission public credits;

    /* The self created market agents */
    AddressList.Data agents;
    using AddressList for AddressList.Data;

    /* Only market agents can call modified functions */
    modifier onlyAgents { if (agents.contains(msg.sender)) _; }

    function MarketRegulator(address _market, address _credits) {
        market  = Market(_market);
        credits = TokenEmission(_credits);
    }

    /**
     * @dev this event emitted for every new MarketAgent
     * @param sender is a client address
     * @param agent is an agent address
     */
    event MarketAgentSign(address indexed sender, address indexed agent);

    /**
     * @dev Sign a contract with sender for trading on market
     * @return `MarketAgent` instance
     */
    function sign() returns (MarketAgent);
}
