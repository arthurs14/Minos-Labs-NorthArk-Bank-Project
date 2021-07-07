import LIHPHeader from '../LoggedInHomePage/LIHPHeader'
import LIHPFooter from '../LoggedInHomePage/LIHPFooter'
import Expense from './Expense'
import '../RevenueReport/RevenueReport.css'
import '../RevenueReport/RevenueLists.css'

export default function ExpenseMain(){
    return(
        <div className='RevenueMain-container'>
            <LIHPHeader/>
            <Expense/>
            <LIHPFooter/>
        </div>
    )
}