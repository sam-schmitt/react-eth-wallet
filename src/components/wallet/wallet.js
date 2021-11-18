import React from "react";
import Web3 from "web3";

export default function Wallet() {
	const web3 = new Web3();
	let wallet = web3.eth.accounts.wallet.create(1);

	let encrypted = wallet.encrypt("Bigfoot4765");

	let decrypted = web3.eth.accounts.wallet.decrypt(encrypted, "Bigfoot4765");

	return (
		<div>
			<h1>Wallet</h1>
			<p>Address: {decrypted[0].address}</p>
			<p>Private Key: {decrypted[0].privateKey}</p>
		</div>
	);
}
