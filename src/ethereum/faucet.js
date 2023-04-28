import { ethers } from "ethers";

const faucetAbi = [];

const faucetContract = (provider) =>{
    return new ethers.Contract(
        "",
        faucetAbi,
        provider
    )
}

export default faucetContract;