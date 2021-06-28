import plus from '../../Assets/SvgIcons/plus.svg'
import dash from '../../Assets/SvgIcons/dash.svg'
import { useState } from 'react';


export default function TransactionList(){
    const currency = new Intl.NumberFormat('en-US' , {style: 'currency', currency: 'usd'})
    const [index, setIndex] = useState();
    //generated date
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    //dummy data
    const transactions = [{
        AuthorizationName: 'Company1',
        AuthorizationDate: today.toLocaleDateString(),
        AccountNum: 'xxxx-xxxx-xxxx-1234',
        Amount: 123.45
    },{ 
        AuthorizationName: 'Company2',
        AuthorizationDate: today.toLocaleDateString(),
        AccountNum: 'xxxx-xxxx-xxxx-5678',
        Amount: 456.7
    },{
        AuthorizationName: 'Company3',
        AuthorizationDate: today.toLocaleDateString(),
        AccountNum: 'xxxx-xxxx-xxxx-9012',
        Amount: 89.10
    },{
        AuthorizationName: 'Company4',
        AuthorizationDate: today.toLocaleDateString(),
        AccountNum: 'xxxx-xxxx-xxxx-3456',
        Amount: 112.34,
    },{
        AuthorizationName: 'Company1',
        AuthorizationDate: today.toLocaleDateString(),
        AccountNum: 'xxxx-xxxx-xxxx-1234',
        Amount: 123.45
    },{ 
        AuthorizationName: 'Company2',
        AuthorizationDate: today.toLocaleDateString(),
        AccountNum: 'xxxx-xxxx-xxxx-5678',
        Amount: 456.7
    },{
        AuthorizationName: 'Company3',
        AuthorizationDate: today.toLocaleDateString(),
        AccountNum: 'xxxx-xxxx-xxxx-9012',
        Amount: 89.10
    },{
        AuthorizationName: 'Company4',
        AuthorizationDate: today.toLocaleDateString(),
        AccountNum: 'xxxx-xxxx-xxxx-3456',
        Amount: 112.34
        }]
    
    //map dummy data
    const tran = transactions.map((t, indx)=>{
    
        return(
            <div key={indx}>
            {/* I'm trying to think of a better way to write this accordian toggle if any suggestions */}
            <div onClick={()=> index !== indx ?  setIndex(indx): setIndex(null)} className='state1-container'>
               <span className='state1MoreInfo'>{index === indx ? <img src={dash} alt='dash'/>: <img src={plus} alt='plus'/> }</span> <p>TRANSACTION AUTHORIZED <span className='state1Income'><b> + {currency.format(Number(t.Amount)) }</b></span> ON {t.AuthorizationDate} BY {t.AuthorizationName }</p>
            </div>
            <div className={index === indx ?'state1-comments active': "state1-comments" }>This is a comment for more relevant information.</div>
            </div>
        )
    })
    return(
        <div>{tran}</div>
    )

    
}