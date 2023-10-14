//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract DeCertify{
    // string instituteName;
    // address instituteWallet;
    // string instituteCourse;
    // string issuerName;
    address issuerId;
    

    struct institute{
        string instituteName;
        address instituteWallet;
        string instituteCourse;
    }

    institute[] public listOfInstitutes; 

    function store(address) public{
        issuerId = msg.sender;
    }

    struct issuer{
        address issuerId;
        string issuerName;
    }

    issuer[] public listOfIssuers;

    mapping(address => string) public idToIssuerName;

    function addInstitute(string memory _instituteName, address _instituteWallet, string memory _instituteCourse) public{
        listOfInstitutes.push( institute(_instituteName,_instituteWallet,_instituteCourse));
    }

    function addIssuer(address _issuerId, string memory _issuerName) public{
        listOfIssuers.push( issuer(_issuerId,_issuerName));
        idToIssuerName[_issuerId] = _issuerName;
    }
}