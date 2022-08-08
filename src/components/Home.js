
import useEth from "../contexts/EthContext/useEth";
import {useState} from "react";
import "./Home.css";
import img from "./shutterstock_1360488131.jpg";
import {navigate} from "@reach/router";
function Home(){
    const {state: {contract, accounts}} = useEth();
    const [title, setTitle] = useState(0);

    

    const Test = async(e) => {
        e.preventDefault();
        await contract.methods.setTitle(title).send({from: accounts[0]});
        console.log(accounts[0])
        navigate("/vote")
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
                <h3> فضلًا ادخال عنوان التصويت </h3>
                <br></br>
                <input type = "text" id = "topic" onChange = {e => setTitle(e.target.value)}/>
                <br></br>
                <br></br>
                <button onClick = {e => Test(e)}> <a href = "/"> تصويت نعم / لا </a></button>
                <button> تصويت بخيارات </button>
            </center>
        </div>

    )

}

export default Home;