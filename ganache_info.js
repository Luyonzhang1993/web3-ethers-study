const chain_info = {
    rpcUrl: 'http://127.0.0.1:7545',
}

const test_contract = {
    "address": "0xfF0fDC2d3FE2a86B896A81613bb62926b7aF851D",
    "abi": [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "setCountEvent",
            "type": "event"
        },
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
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "setCount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "transactionHash": "0xd82f9dcb7d817529359d397548ec942f12e957783e0aa81030b2056de6a4d72a",
    "receipt": {
        "to": null,
        "from": "0xb10eF36844CaE2BbB5aaF05e7f501779A23b9ef1",
        "contractAddress": "0xfF0fDC2d3FE2a86B896A81613bb62926b7aF851D",
        "transactionIndex": 0,
        "gasUsed": "273233",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "blockHash": "0x8f5787220c1e03c1ec4b88857d860cda0f66a51ef4d2334e3772250c4baf3328",
        "transactionHash": "0xd82f9dcb7d817529359d397548ec942f12e957783e0aa81030b2056de6a4d72a",
        "logs": [],
        "blockNumber": 29422,
        "cumulativeGasUsed": "273233",
        "status": 1,
        "byzantium": true
    },
    "args": [],
    "numDeployments": 4,
    "solcInputHash": "1cb71da8bce188ace6601332ce95b1b7",
    "metadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"setCountEvent\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"count\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decrement\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"increment\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"setCount\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/Counter.sol\":\"Counter\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"contracts/Counter.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.28;\\n\\ncontract Counter {\\n    uint256 public count;\\n\\n    event setCountEvent(address addr, uint256 value);\\n\\n    function getCount () public view returns (uint256) {\\n        return count;\\n    }\\n\\n    function setCount(uint256 value) public {\\n        emit setCountEvent(msg.sender, value);\\n        count = value;\\n    }\\n\\n    function increment() public {\\n        count += 1;\\n    }\\n\\n    function decrement() public {\\n        require(count > 0, \\\"Counter: count cannot be negative!!!\\\");\\n        count -= 1;\\n    }\\n}\",\"keccak256\":\"0xfa03fa31a7367734f0929e17c06beccf6cbe5e02555f0e406491d7a2b9883a00\",\"license\":\"MIT\"}},\"version\":1}",
    "bytecode": "0x6080604052348015600f57600080fd5b506104008061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806306661abd1461005c5780632baeceb71461007a578063a87d942c14610084578063d09de08a146100a2578063d14e62b8146100ac575b600080fd5b6100646100c8565b60405161007191906101ad565b60405180910390f35b6100826100ce565b005b61008c61012d565b60405161009991906101ad565b60405180910390f35b6100aa610136565b005b6100c660048036038101906100c191906101f9565b610151565b005b60005481565b6000805411610112576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610109906102a9565b60405180910390fd5b600160008082825461012491906102f8565b92505081905550565b60008054905090565b6001600080828254610148919061032c565b92505081905550565b7f3657555b7ca89831b79f3e4abed5d11515746dd71d385481decc8218d43792f933826040516101829291906103a1565b60405180910390a18060008190555050565b6000819050919050565b6101a781610194565b82525050565b60006020820190506101c2600083018461019e565b92915050565b600080fd5b6101d681610194565b81146101e157600080fd5b50565b6000813590506101f3816101cd565b92915050565b60006020828403121561020f5761020e6101c8565b5b600061021d848285016101e4565b91505092915050565b600082825260208201905092915050565b7f436f756e7465723a20636f756e742063616e6e6f74206265206e65676174697660008201527f6521212100000000000000000000000000000000000000000000000000000000602082015250565b6000610293602483610226565b915061029e82610237565b604082019050919050565b600060208201905081810360008301526102c281610286565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061030382610194565b915061030e83610194565b9250828203905081811115610326576103256102c9565b5b92915050565b600061033782610194565b915061034283610194565b925082820190508082111561035a576103596102c9565b5b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061038b82610360565b9050919050565b61039b81610380565b82525050565b60006040820190506103b66000830185610392565b6103c3602083018461019e565b939250505056fea2646970667358221220683584149ef1c4d74a171bae5668728de93b227ab913cfee2304ea3dfe3c2e6a64736f6c634300081c0033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c806306661abd1461005c5780632baeceb71461007a578063a87d942c14610084578063d09de08a146100a2578063d14e62b8146100ac575b600080fd5b6100646100c8565b60405161007191906101ad565b60405180910390f35b6100826100ce565b005b61008c61012d565b60405161009991906101ad565b60405180910390f35b6100aa610136565b005b6100c660048036038101906100c191906101f9565b610151565b005b60005481565b6000805411610112576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610109906102a9565b60405180910390fd5b600160008082825461012491906102f8565b92505081905550565b60008054905090565b6001600080828254610148919061032c565b92505081905550565b7f3657555b7ca89831b79f3e4abed5d11515746dd71d385481decc8218d43792f933826040516101829291906103a1565b60405180910390a18060008190555050565b6000819050919050565b6101a781610194565b82525050565b60006020820190506101c2600083018461019e565b92915050565b600080fd5b6101d681610194565b81146101e157600080fd5b50565b6000813590506101f3816101cd565b92915050565b60006020828403121561020f5761020e6101c8565b5b600061021d848285016101e4565b91505092915050565b600082825260208201905092915050565b7f436f756e7465723a20636f756e742063616e6e6f74206265206e65676174697660008201527f6521212100000000000000000000000000000000000000000000000000000000602082015250565b6000610293602483610226565b915061029e82610237565b604082019050919050565b600060208201905081810360008301526102c281610286565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061030382610194565b915061030e83610194565b9250828203905081811115610326576103256102c9565b5b92915050565b600061033782610194565b915061034283610194565b925082820190508082111561035a576103596102c9565b5b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061038b82610360565b9050919050565b61039b81610380565b82525050565b60006040820190506103b66000830185610392565b6103c3602083018461019e565b939250505056fea2646970667358221220683584149ef1c4d74a171bae5668728de93b227ab913cfee2304ea3dfe3c2e6a64736f6c634300081c0033",
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