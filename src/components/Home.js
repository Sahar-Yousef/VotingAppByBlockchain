
import useEth from "../contexts/EthContext/useEth";
import {useState} from "react";
import "./Home.css";

function Home(){

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

        <div id = "home">
            <center>
                <h1 class = "heading">
                    <span>w</span>
                    <span>e</span>
                    <span>l</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>e</span>
                    <span class = "space"></span>
                    <span>t</span>
                    <span>o</span>
                </h1>
                <h1 class = "heading">
                    <span>m</span>
                    <span>e</span>
                    <span>t</span>
                    <span>a</span>
                    <span>v</span>
                    <span>o</span>
                    <span>t</span>
                    <span>e</span>
                </h1>
                <br></br>
                <h3> please enter the topic of the vote: </h3>
                <br></br>
                <input type = "text" onChange = {e => setInputvalue(e.target.value)}/>
                <br></br>
                <br></br>
                <button> yes / no vote </button>
                <button onClick = {e => Test(e)}> options vote </button>

                <br></br><br></br><br></br><br></br>

                <h1 class = "heading"> 
                    <span>v</span>
                    <span>o</span>
                    <span>t</span>
                    <span>e</span>
                </h1>
                <br></br>
                <h3 class = "res"> {inputvalue} </h3>
                <br></br><br></br>
                <button onClick = {e => Test(e)}> yes </button>
                <button onClick = {e => Test(e)}> no </button>

                <br></br><br></br><br></br><br></br>

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

                <br></br><br></br><br></br>
            </center>
        </div>

    )

}

export default Home;