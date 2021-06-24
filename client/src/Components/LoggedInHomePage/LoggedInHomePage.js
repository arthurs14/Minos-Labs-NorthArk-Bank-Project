import LIHPHeader from "./LIHPHeader";
import LIHPReportsBox from "./LIHPReportsBox";
import TransactionsLog from "./TransactionsLog";
import LIHPFooter from "./LIHPFooter";
import './LoggedInHomePage.css'

function LoggedInHomePage() {
  return (
    <div>
        <LIHPHeader />
        <LIHPReportsBox />
        <TransactionsLog />
        <LIHPFooter />
    </div>
  );
}

export default LoggedInHomePage;
