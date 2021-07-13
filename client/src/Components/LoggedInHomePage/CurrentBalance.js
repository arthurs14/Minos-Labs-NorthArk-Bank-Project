import { useState, useEffect } from 'react'
import './LoggedInHomePage.css'

function CurrentBalance() {
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
        <div className="Current-Bala-Main-Box">
        <div className="Current-Bala-Title-Box">
          <p className="Current-Bala-Title">Current Balance: {users.currentBalance}</p>
        </div>
      </div>
    );
  }
  
  export default CurrentBalance;
  