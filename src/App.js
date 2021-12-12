import { useEffect, useState } from "react";
import Web3 from "web3";
import { TODO_ABI, TODO_ADDRESS } from "./config";

function App() {
	const [account, setAccount] = useState();
	const [allTodos, setAllTodos] = useState([]);
	const [contractState, setContractState] = useState();

	useEffect(() => {
		async function load() {
			const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
			const accounts = await web3.eth.requestAccounts();
			setAccount(accounts[0]);
			const contract = new web3.eth.Contract(TODO_ABI, TODO_ADDRESS);
			setContractState(contract);

			// }
		}

		load();
	}, []);

	const getItems = async () => {
		const todos = await contractState.methods.getItems().call();
		console.log(todos);
		setAllTodos(todos);
	};

	const newTodo = async () => {
		let result = await contractState.methods
			.newItem("item name")
			.send({ from: account });
		console.log(result);
	};

	return (
		<div>
			Your account is: {account}
			<h1>Contacts</h1>
			{allTodos.map((item) => (
				<li>{item.title}</li>
			))}
			<button
				onClick={() => {
					newTodo();
				}}
			>
				<p>New Item</p>
			</button>
			<button
				onClick={() => {
					getItems();
				}}
			>
				<p>Get Items</p>
			</button>
		</div>
	);
}

export default App;
