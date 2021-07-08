import LIHPHeader from "./LIHPHeader";
import LIHPReportsBox from "./LIHPReportsBox";
import CurrentBalance from "./CurrentBalance";
import TransactionsLog from "./TransactionsLog";
import LIHPFooter from "./LIHPFooter";
import './LoggedInHomePage.css'

function LoggedInHomePage() {
  return (
    <div>
        <LIHPHeader />
        <div className="Rep-CuBala-Joint-Box">
          <CurrentBalance />
          <LIHPReportsBox />
        </div>
        <TransactionsLog />
        <LIHPFooter />
    </div>
  );
}

export default LoggedInHomePage;
