// SPDX-License-Identifier: Sam
pragma solidity^0.8.7;

contract Todo {
    
    struct Item {
        string title;
        bool done;
    }

    mapping (address => Item[]) todos;

    function newItem (string memory _title) public {
        todos[msg.sender].push(Item({title: _title, done: false}));
    }

    function getItems () public view returns (Item[] memory){
        return todos[msg.sender];
    }

}