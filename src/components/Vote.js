
import useEth from "../contexts/EthContext/useEth";
import {useState} from "react";
import Home from "./Home"; 

function Vote(){

    const {state: {contract, accounts}} = useEth();
    const [title, setTitle] = useState(0);
    const [tit, getTitle] = useState(0);

    const Test = async(e) => {
        e.preventDefault();
        await contract.methods.write(title).send();
        const value = await contract.methods.getTitle().call();
        //setResult(value);
    }

    return(

        <div id = "vv">
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
                    <span>v</span>
                    <span>o</span>
                    <span>t</span>
                    <span>e</span>
                    <span>r</span>
                </h1>
                <br></br>
                <h3 class = "res">{e => getTitle(e.target.value)}</h3>
                <br></br><br></br>
                <input type = "text" id = "add" onChange = {e => setTitle(e.target.value)}/>
                <br></br><br></br>
                <button onClick = {e => Test(e)}><a href = "/result"> yes </a></button>
                <button onClick = {e => Test(e)}><a href = "/result"> no </a></button>
            </center>
        </div>

    )

}

export default Vote;