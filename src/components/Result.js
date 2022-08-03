
import useEth from "../contexts/EthContext/useEth";
import {useState} from "react";

function Result(){

    const {state: {contract, accounts}} = useEth();
    const [inputvalue, setInputvalue] = useState(0);
    const [result, setResult] = useState();

    const Test = async(e) => {
        e.preventDefault();
        await contract.methods.write(inputvalue).send({from: accounts[0]});
        const value = await contract.methods.read().call();
        setResult(value);
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
					<p> yes: xx% {e => setInputvalue(e.target.value)}
                        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
						<span> count {e => setInputvalue(e.target.value)} </span> 
					</p>
					<p> no: xx% {e => setInputvalue(e.target.value)}
						&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                        <span> count {e => setInputvalue(e.target.value)} </span> 
					</p>
				</div>
                <br></br><br></br>
				<div class = "res">
					<h3> final results </h3>
					<p>
                        <span> winner vote </span>
                    </p>
				</div>
            </center>
        </div>

    )

}

export default Result;