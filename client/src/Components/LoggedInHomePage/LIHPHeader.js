import './LoggedInHomePage.css'

function LIHPHeader() {
    return (
      <div className="Header-Main-Box">
          <div className="Title-Box">
              <p>NorthArk Investment Bank 💵</p> 
          </div>
          <div className="User-Name-Box">
              <p>Welcome "UserName"!</p>
          </div>
          <div className="Sign-Out-Button-Box">
              <button className="Sign-Out-Button">Sign Out</button>
          </div>
      </div>
    );
  }
  
  export default LIHPHeader;
  