const web3 = require('web3');
 
const tokens = (n) => {
	return web3.utils.toWei(n, 'ether');
}

const toBigNumber = (n) => {
	return web3.utils.toBN(n.toString());
}

const toEther = (n) => {
	return web3.utils.fromWei(n);
}

const nineHundredBN = toBigNumber(900);
const thousandBN = toBigNumber(1000);

// parameters are BN object, returning string in ethers
const getOutputString = (input, inputReserve, outputReserve) => {
	const numerator = input * outputReserve * nineHundredBN;
	const denominator = (inputReserve * thousandBN) + (input * nineHundredBN);
	return denominator ? numerator / denominator : '';
}

const getInputString = (output, inputReserve, outputReserve) => {
	const numerator = output * inputReserve * thousandBN;
	const denominator = (outputReserve - output) * nineHundredBN;
	return (denominator >= 0 && numerator >= 0)? (numerator / denominator): '';
}

const ETHER_ADDRESS = '0x0000000000000000000000000000000000000000';

module.exports = {
	tokens,
	toBigNumber,
	toEther,
	ETHER_ADDRESS,
	getOutputString,
	getInputString
}