
import useEth from "../contexts/EthContext/useEth";
import {useState} from "react";

function Result(){

    const {state: {contract, accounts}} = useEth();
    const [totYes, getTotalYes] = useState();
    const [totNo, getTotalNo] = useState();
    const [winner, GetMaxVote] = useState();
    

    const Test = async(e) => {
        e.preventDefault();
        totYes = await contract.methods.getTotalYes().call();
        totNo = await contract.methods.getTotalNo().call();
        winner = await contract.methods.GetMaxVote().call();
    }

    return(

        <div id = "rr">
            <center>
                <h1 class = "heading"> 
                    <span>v</span>
                    <span>o</span>
                    <span>t</span>
                    <span>e</span>
                    <span>'</span>
                    <span>s</span>
                    <span class = "space"></span>
                    <span>r</span>
                    <span>e</span>
                    <span>s</span>
                    <span>u</span>
                    <span>l</span>
                    <span>t</span>
                    <span>s</span>
                </h1>
                <br></br>
                <div class = "res">
					<p> نعم:
                        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
						<span> {totYes} </span> 
					</p>
					<p> لا:
						&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                        <span> {totNo} </span> 
					</p>
				</div>
                <br></br><br></br>
				<div class = "res">
					<h3> النتائج النهائية </h3>
					<p>
                        <span> {winner} </span>
                    </p>
				</div>
            </center>
        </div>

    )

}

export default Result;