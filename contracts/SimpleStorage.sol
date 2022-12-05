// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract SimpleStorage {
    //public variables come with a getter functions
    uint256 public favoriteNumber;
    People public person = People({favoriteNumber: 2, name: "patrick"});

    function store(uint256 _fav) public {
        favoriteNumber = _fav;
        // uint256 testvar=5;
        retrieve(); //retrieve can be used here but this will up the gas fee
    }

    //create a struct
    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People[] public people;

    mapping(string => uint256) public nameToFavoriteNumber;

    //calldata temp var that cannot be modified just used
    //memory temp var that can be modified
    //storage permanent data
    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }

    //view,pure cannot be shown;the function can be used to retrieve and use the value returned.;view function is free unless calling from a transcation that uses gas
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    //mapping a set of key with each key returning a value
}
