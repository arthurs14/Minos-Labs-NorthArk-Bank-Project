import { useState } from 'react'
import transactionsData from "./DummyData";
import './LoggedInHomePage.css'

function TransactionsLog() {
    return (
        <div className="Trans-Log-Main-Box">
        <div className="Trans-Log-Title-Box">
          <p className="Trans-Log-Title">Transactions</p>
        </div>
        <div className="Trans-Log-Trans-Titles-Box">
          <p className="Trans-Log-Trans-Title-Date">Date</p>
          <p className="Trans-Log-Trans-Title-Name">Name</p>
          <p className="Trans-Log-Trans-Title-Item">Item</p>
          <p className="Trans-Log-Trans-Title-Category">Category</p>
          <p className="Trans-Log-Trans-Title-Amount">Amount</p>
        </div>
        <div className="Trans-Log-Trans-Main-Box">
          {transactionsData.map((tranData) => {
            return (
              <div className="Trans-Log-Trans-Box">
                <div className="Trans-Log-Trans-Date">
                  {new Date(tranData.Date).toLocaleDateString()}
                </div>
                <div className="Trans-Log-Trans-Name">{tranData.Name}</div>
                <div className="Trans-Log-Trans-Item">{tranData.Item}</div>
                <div className="Trans-Log-Trans-Category">
                  {tranData.Category}
                </div>
                <div className="Trans-Log-Trans-Amount">${tranData.Amount}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default TransactionsLog;
  