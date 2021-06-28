import './LoggedInHomePage.css'
import {Link} from 'react-router-dom'
function LIHPReportsBox() {
    return (
      <div className="Reports-Box-Main-Box">
          <button className="Reports-Box-Button">Expense Report</button>
          <Link to='/RevenueReport'><button className="Reports-Box-Button">Revenue Report</button></Link>
          <button className="Reports-Box-Button">Projection Report</button>
      </div>
    );
  }
  
  export default LIHPReportsBox;
  