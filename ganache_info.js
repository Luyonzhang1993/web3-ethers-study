const chain_info = {
    rpcUrl: 'http://127.0.0.1:7545',
}

const test_contract = {
    "address": "0x280CE4af58b1F681997a2c3ACE2f6BA5B3c2a7b0",
    "abi": [
        {
            "inputs": [],
            "name": "count",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decrement",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "increment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "data",
                    "type": "uint256"
                }
            ],
            "name": "setCount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "transactionHash": "0x20932d0be86d950bae5bb665ef9f4f924246db488d9465d2f4962f254105e81f",
    "receipt": {
        "to": null,
        "from": "0xb10eF36844CaE2BbB5aaF05e7f501779A23b9ef1",
        "contractAddress": "0x280CE4af58b1F681997a2c3ACE2f6BA5B3c2a7b0",
        "transactionIndex": 0,
        "gasUsed": "238054",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "blockHash": "0x9e804e75a717ce36a8ce56db709bd48cf59980edd5888c9c4f2c59e14201132a",
        "transactionHash": "0x20932d0be86d950bae5bb665ef9f4f924246db488d9465d2f4962f254105e81f",
        "logs": [],
        "blockNumber": 29363,
        "cumulativeGasUsed": "238054",
        "status": 1,
        "byzantium": true
    },
    "args": [],
    "numDeployments": 3,
    "solcInputHash": "72aad9aaf4550ee47155e48dc658c002",
    "metadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"count\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decrement\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"increment\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"setCount\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/Counter.sol\":\"Counter\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"contracts/Counter.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.28;\\n\\ncontract Counter {\\n    uint256 public count;\\n\\n    function getCount () public view returns (uint256) {\\n        return count;\\n    }\\n\\n    function setCount(uint256 data) public {\\n        count = data;\\n    }\\n\\n    function increment() public {\\n        count += 1;\\n    }\\n\\n    function decrement() public {\\n        require(count > 0, \\\"Counter: count cannot be negative!!!\\\");\\n        count -= 1;\\n    }\\n}\",\"keccak256\":\"0xda4f6417464189512cf6ce87f4f687ec3951eaa642a91cf5dcf3049b7d41c8af\",\"license\":\"MIT\"}},\"version\":1}",
    "bytecode": "0x6080604052348015600f57600080fd5b5061035d8061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806306661abd1461005c5780632baeceb71461007a578063a87d942c14610084578063d09de08a146100a2578063d14e62b8146100ac575b600080fd5b6100646100c8565b6040516100719190610174565b60405180910390f35b6100826100ce565b005b61008c61012d565b6040516100999190610174565b60405180910390f35b6100aa610136565b005b6100c660048036038101906100c191906101c0565b610151565b005b60005481565b6000805411610112576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010990610270565b60405180910390fd5b600160008082825461012491906102bf565b92505081905550565b60008054905090565b600160008082825461014891906102f3565b92505081905550565b8060008190555050565b6000819050919050565b61016e8161015b565b82525050565b60006020820190506101896000830184610165565b92915050565b600080fd5b61019d8161015b565b81146101a857600080fd5b50565b6000813590506101ba81610194565b92915050565b6000602082840312156101d6576101d561018f565b5b60006101e4848285016101ab565b91505092915050565b600082825260208201905092915050565b7f436f756e7465723a20636f756e742063616e6e6f74206265206e65676174697660008201527f6521212100000000000000000000000000000000000000000000000000000000602082015250565b600061025a6024836101ed565b9150610265826101fe565b604082019050919050565b600060208201905081810360008301526102898161024d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006102ca8261015b565b91506102d58361015b565b92508282039050818111156102ed576102ec610290565b5b92915050565b60006102fe8261015b565b91506103098361015b565b925082820190508082111561032157610320610290565b5b9291505056fea2646970667358221220d27a80915a35ef676a6d45d03ef079f0477c6d6f6bea63e272229b2d1925172a64736f6c634300081c0033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c806306661abd1461005c5780632baeceb71461007a578063a87d942c14610084578063d09de08a146100a2578063d14e62b8146100ac575b600080fd5b6100646100c8565b6040516100719190610174565b60405180910390f35b6100826100ce565b005b61008c61012d565b6040516100999190610174565b60405180910390f35b6100aa610136565b005b6100c660048036038101906100c191906101c0565b610151565b005b60005481565b6000805411610112576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010990610270565b60405180910390fd5b600160008082825461012491906102bf565b92505081905550565b60008054905090565b600160008082825461014891906102f3565b92505081905550565b8060008190555050565b6000819050919050565b61016e8161015b565b82525050565b60006020820190506101896000830184610165565b92915050565b600080fd5b61019d8161015b565b81146101a857600080fd5b50565b6000813590506101ba81610194565b92915050565b6000602082840312156101d6576101d561018f565b5b60006101e4848285016101ab565b91505092915050565b600082825260208201905092915050565b7f436f756e7465723a20636f756e742063616e6e6f74206265206e65676174697660008201527f6521212100000000000000000000000000000000000000000000000000000000602082015250565b600061025a6024836101ed565b9150610265826101fe565b604082019050919050565b600060208201905081810360008301526102898161024d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006102ca8261015b565b91506102d58361015b565b92508282039050818111156102ed576102ec610290565b5b92915050565b60006102fe8261015b565b91506103098361015b565b925082820190508082111561032157610320610290565b5b9291505056fea2646970667358221220d27a80915a35ef676a6d45d03ef079f0477c6d6f6bea63e272229b2d1925172a64736f6c634300081c0033",
    "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
    },
    "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
    },
    "storageLayout": {
        "storage": [
            {
                "astId": 3,
                "contract": "contracts/Counter.sol:Counter",
                "label": "count",
                "offset": 0,
                "slot": "0",
                "type": "t_uint256"
            }
        ],
        "types": {
            "t_uint256": {
                "encoding": "inplace",
                "label": "uint256",
                "numberOfBytes": "32"
            }
        }
    }
}

module.exports = {
    chain_info,
    test_contract
}