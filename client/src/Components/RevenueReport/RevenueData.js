import TransactionGraph from "./TransactionGraph"
import TransactionList from "./TransactionList"
import TransactionBar from "./TransactionBar"

export default function RevenueData(props){

    const show = props.show
    const expense = props.expense

    return(
        <div className='all-Rev-Data'>
        {show === 0 && expense === false ? <TransactionList/>
        : null }
        {show === 0 && expense === true ?
         <TransactionList expense={true}/> : null}
        {show === 1 && expense === false   ?
        <div className='Rev-Graph-padding'>
            <TransactionGraph/> 
        </div>
        : null}
        {show === 2 && expense === false  ?
        <div className='Rev-Graph-padding'>
            <TransactionBar/> 
        </div>
        :null}
        </div>
    )
}

