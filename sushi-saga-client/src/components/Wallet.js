import React from "react";

const Wallet = props => {
  return (
    <div className="wallet">
      <form onSubmit={props.addFunds}>
        <input type="number" name="amount" placeholder="Add Funds" />
        <input type="submit" value="Add to Wallet" />
      </form>
    </div>
  );
};

export default Wallet;
