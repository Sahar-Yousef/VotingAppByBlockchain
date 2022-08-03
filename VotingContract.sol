pragma solidity >=0.4.0 <0.9.0;

contract Proj {

    int private Yescount = 0;
    int private Nocount = 0;
    int private TotalVote =0;



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
         } else {
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
  
    // Check if it existing user
    function isUser(address userAddress) public  constant returns(bool isIndeed) {
        if(userIndex.length == 0) return false;
             return (userIndex[userStructs[userAddress].index] == userAddress);
    }

    // Insert new users
    function insertUser( address userAddress) public returns(uint index) {
        if(isUser(userAddress)) throw; 
             userStructs[userAddress].index = userIndex.push(userAddress)-1;
        LogNewUser(
            userAddress, 
            userStructs[userAddress].index);
        return userIndex.length-1;
    }
  
    // Get users counts
    function getUserCount() public constant returns(uint count) {
        return userIndex.length;
    }


}
