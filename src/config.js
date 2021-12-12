export const TODO_ADDRESS = "0x55f3596Cd79d4beB7151D95ef1593A1a5341e3Aa";

export const TODO_ABI = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_title",
				type: "string",
			},
		],
		name: "newItem",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getItems",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "title",
						type: "string",
					},
					{
						internalType: "bool",
						name: "done",
						type: "bool",
					},
				],
				internalType: "struct Todo.Item[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
		constant: true,
	},
];
