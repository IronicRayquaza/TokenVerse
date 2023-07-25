import React,{useState} from "react";
import { token } from "../../../declarations/token";

function Faucet() {

  const [isDisabled, setDisabled] = useState(false);
  const [msgText, setMsgtext] = useState("Gimme gimme")

  async function handleClick(event) {

    setDisabled(true);
    const result = await token.payOut();
    setMsgtext(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free CyberSphere tokens here! Claim 10,000 CSP tokens to your account.</label>
      <p className="trade-buttons">
        <button disabled={isDisabled} id="btn-payout" onClick={handleClick}>
          {msgText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
