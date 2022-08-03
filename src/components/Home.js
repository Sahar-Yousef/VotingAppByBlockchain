
import useEth from "../contexts/EthContext/useEth";
import {useState} from "react";
import "./Home.css";
import img from "./shutterstock_1360488131.jpg";

function Home(){
    const {state: {contract, accounts}} = useEth();
    const [title, setTitle] = useState(0);
    const [result, setResult] = useState();

    

    const Test = async(e) => {
        e.preventDefault();
        await contract.methods.write(title).send();
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
                <center><img src = {img}></img></center>
                <br></br>
                <br></br>
                <h3> please enter the topic of the vote: </h3>
                <br></br>
                <input type = "text" id = "topic" onChange = {e => setTitle(e.target.value)}/>
                <br></br>
                <br></br>
                <button> <a href = "/vote"> yes / no vote </a> </button>
                <button onClick = {e => Test(e)}> options vote </button>
            </center>
        </div>

    )

}

export default Home;