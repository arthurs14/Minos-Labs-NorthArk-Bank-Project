import { useState, useEffect } from 'react'
import transactionsData from "./DummyData";
import './LoggedInHomePage.css'

function TransactionsLog() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users/1")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  console.log("Console for users:", users)



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
        {users.transactions && users.transactions.map((tranData, index) => {
          return (
            <div className="Trans-Log-Trans-Box">
              <div key={`${tranData.date}`} className="Trans-Log-Trans-Date">
                {tranData.date}
              </div>
              <div key={`${tranData.storeName}`} className="Trans-Log-Trans-Name">
                {tranData.storeName}
              </div>
              <div key={`${tranData.item}`} className="Trans-Log-Trans-Item">
                {tranData.item}
              </div>
              <div key={`${tranData.category}`} className="Trans-Log-Trans-Category">
                {tranData.category}
              </div>
              <div key={`${tranData.amount}`} className="Trans-Log-Trans-Amount">
                {tranData.amount}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// function TransactionsLog() {
//     return (
//         <div className="Trans-Log-Main-Box">
//         <div className="Trans-Log-Title-Box">
//           <p className="Trans-Log-Title">Transactions</p>
//         </div>
//         <div className="Trans-Log-Trans-Titles-Box">
//           <p className="Trans-Log-Trans-Title-Date">Date</p>
//           <p className="Trans-Log-Trans-Title-Name">Name</p>
//           <p className="Trans-Log-Trans-Title-Item">Item</p>
//           <p className="Trans-Log-Trans-Title-Category">Category</p>
//           <p className="Trans-Log-Trans-Title-Amount">Amount</p>
//         </div>
//         <div className="Trans-Log-Trans-Main-Box">
//           {transactionsData.map((tranData) => {
//             return (
//               <div className="Trans-Log-Trans-Box">
//                 <div className="Trans-Log-Trans-Date">
//                   {new Date(tranData.Date).toLocaleDateString()}
//                 </div>
//                 <div className="Trans-Log-Trans-Name">{tranData.Name}</div>
//                 <div className="Trans-Log-Trans-Item">{tranData.Item}</div>
//                 <div className="Trans-Log-Trans-Category">
//                   {tranData.Category}
//                 </div>
//                 <div className="Trans-Log-Trans-Amount">${tranData.Amount}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
  
  export default TransactionsLog;
  