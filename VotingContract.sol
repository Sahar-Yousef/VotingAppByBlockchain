// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract VotingContract {
    int private Yescount = 0;
    int private Nocount = 0;

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
    
    //  Maxumim vote
     function GetMaxVote() public view returns (uint) {
     if (Yescount > m) {
         return Yescount;
     } else {
         return Nocount;
     }
     
    
}
