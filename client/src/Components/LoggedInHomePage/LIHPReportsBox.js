import './LoggedInHomePage.css'
import {Link} from 'react-router-dom'
function LIHPReportsBox() {
    return (
      <div className="Reports-Box-Main-Box">
          <Link to='/expense-report'><button className="Reports-Box-Button">Expense Report</button></Link>
          <Link to='/revenue-report'><button className="Reports-Box-Button">Revenue Report</button></Link>
          <button className="Reports-Box-Button">Projection Report</button>
      </div>
    );
  }
  
  export default LIHPReportsBox;
  