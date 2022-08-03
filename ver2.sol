pragma solidity >=0.4.0 <0.9.0;

contract VotingContract {

    int private Yescount = 0;
    int private Nocount = 0;
    int private TotalVote = 0;
    uint private ind = 1;



    //  Yes counter
    function incYesCounter() public {
         Yescount += 1;
    }
    //  No counter
     function incNoCounter() public {
        Nocount += 1;
    }


    //  Yes Total counter
    function getTotalYes() public view returns (int) {
        return Yescount;
    }
    //  No Total counter
    function getTotalNo() public view returns (int) {
        return Nocount;
    }


    //Sum Total vote
    function SumTotalVote() public {
        TotalVote = (Yescount + Nocount );
    }
    //return Total vote
    function GetTotalVote() public view returns (int) {
        return TotalVote;
    }

 
    //  Maxumim vote
    function GetMaxVote() public view returns (int) {
        if (Yescount > Nocount) {
         return Yescount;
        } 
        else {
         return Nocount;
        }
    }


    // Users Struct
    struct UserStruct {
        uint index;
    }
  
    // Mapping users to addresss
    mapping(address => UserStruct) private userStructs;
    address[] private userIndex;

    // New user event
    event LogNewUser (address indexed userAddress, uint index);
  
    // Check if user exist
    function isUser(address userAddress) public view returns(bool isIndeed) {
        if (userIndex.length == 0) 
            return false;
        if (userIndex[userStructs[userAddress].index] == userAddress)
            return true;
        else
            return false;
    }

    // Insert new users
    function insertUser( address userAddress) public {
        if (isUser(userAddress) == false) {
            userStructs[userAddress].index = ind;
            ind++;
            userIndex.push(userAddress); 
        }
    }
  
    // Get users counts
    function getUserCount() public view returns(uint count) {
        return userIndex.length;
    }

}
