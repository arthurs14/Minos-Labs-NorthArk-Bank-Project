import { useHistory } from 'react-router-dom';
import './LoggedInHomePage.css'

function LIHPHeader() {

    const useSignOut = () => {
        let history = useHistory()
        return () => {
            history.push('/')
        }
    }

    const signOut = useSignOut()

    return (
      <div className="Header-Main-Box">
          <div className="Title-Box">
              <p>NorthArk Investment Bank 💵</p> 
              <p className="User-Name-Text">Welcome to your account UserName!</p>
          </div>
          <div className="Sign-Out-Button-Box">
              <button className="Sign-Out-Button" onClick={signOut}>Sign Out</button>
          </div>
      </div>
    );
  }
  
  export default LIHPHeader;
  