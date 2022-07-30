
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract VotingContract {
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
    function GetTotalVote() public view returns (int){
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
}
