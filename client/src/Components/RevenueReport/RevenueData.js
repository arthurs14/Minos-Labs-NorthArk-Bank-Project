import TransactionGraph from "./TransactionGraph"
import TransactionList from "./TransactionList"
import TransactionBar from "./TransactionBar"

export default function RevenueData(props){

    const show = props.show

    return(
        <div className='all-Rev-Data'>
        {show === 0 ? <TransactionList/>: null}
        {show === 1 ?
        <div className='Rev-Graph-padding'>
            <TransactionGraph/> 
        </div>
        : null}
        {show === 2 ?
        <div className='Rev-Graph-padding'>
            <TransactionBar/> 
        </div>
        :null}
        </div>
    )
}

