
import useEth from "../contexts/EthContext/useEth";
import {useState} from "react";

function hh(){

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

        <div id = "hh">
            <center>
                <p>Noor</p>
            </center>
        </div>

    )

}

export default hh;