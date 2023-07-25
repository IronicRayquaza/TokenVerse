import React, {useState} from "react";
import { token } from "../../../declarations/token"
import { Principal } from "@dfinity/principal";

function Transfer() {

  const [receiverId, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [msgText, setMsgtext] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const [isHidden, setHidden] = useState(true);
  
  async function handleClick() {
    setDisabled(true);
    setHidden(true);
    const receiver = Principal.fromText(receiverId);
    const amountToTransfer  = Number(amount);
    const result = await token.transfer(receiver, amountToTransfer);
    setMsgtext(result);
    setHidden(false);
    setDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={receiverId}
                onChange={(e) => setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button disabled={isDisabled} id="btn-transfer" onClick={handleClick} >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>
          {msgText}
        </p>
      </div>
    </div>
  );
}

export default Transfer;
