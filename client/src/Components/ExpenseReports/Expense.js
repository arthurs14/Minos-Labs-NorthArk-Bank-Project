import {Link} from 'react-router-dom' 
import ExpenseList from './ExpenseList'
import moment from 'moment'
import home from '../../Assets/SvgIcons/home.svg'
import leftArrow from '../../Assets/SvgIcons/LeftArrow.svg'
import rightArrow from '../../Assets/SvgIcons/RightArrow.svg'
import { useState } from 'react'


export default function Expense(){

    const [isOpen,setIsOpen] = useState(false)
    
    //place holder variables
    const [yearlyIncome, setYearlyIncome] = useState(32420)
    const [monthlyIncome, setMonthlyIncome] = useState(yearlyIncome/12)
    const [quarterlyIncome, setQuarterlyIncome] = useState(yearlyIncome/4)
    const [weeklyIncome, setWeeklyIncome] = useState(yearlyIncome/52)
    
    
    return(
        <div className='Revenue-container'>
            <div className='Rev-Home-Route'>
                <Link  to='/'><span><img src={home} alt='home'/></span>Home</Link>
            </div>
                        <div className='Revenue-top-prev'>
                            <ExpensePrev week={weeklyIncome}/>
                            <ExpensePrev month={monthlyIncome}/>
                            <ExpensePrev quarter={quarterlyIncome}/>  
                            <ExpensePrev year={yearlyIncome}/>
                        </div>

                    <div className='Rev-content-panel-container'>
                        <div className='Revenue-content'>
                            <ExpenseList/>
                        </div>
                    
                        <div  className={isOpen ? 'panel-active': 'Rev-options-panel' }>
                            <img onClick={()=>setIsOpen(!isOpen)} 
                                className='panel-arrow' 
                                src={!isOpen ? leftArrow : rightArrow} alt='caret'/>
                            
                            <div className='panel-banner'/>
                            
                            <div className='panel-view-options'>
                                <h2>View Options</h2>
                                {/* <RevenueOptions/> */}
                            </div>


                        </div>
                        
                    </div>
        </div>
    )
}


 function ExpensePrev(props){
    const week = props.week;
    const month = props.month;
    const quarter = props.quarter;
    const year = props.year;

    //formatting number to currency 
    const currency = new Intl.NumberFormat('en-US' , {style: 'currency', currency: 'usd'})
   
    //moment used for measuring income by date 
    const today = moment()

    //income by week
    const beginningOfCurrentWeek = moment().startOf('isoWeek')
    const endOfWeek = moment().endOf('isoWeek')

    //by Month 
    const beginningOfCurrentMonth = moment().startOf('Month')
    const endOfMonth = moment().endOf('Month')

    //quarter
    const beginningOfCurrentQuarter = moment().startOf('quarter')
    const endOfQuarter = moment().endOf('quarter')

    //Annual 
    const beginningOfCurrentYear = moment().startOf('Year')
    const endOfYear = moment().endOf('Year')

    return(
        <>

        {/* Rendered based on filled props */}
        {week != null ? 
            <div className='Rev-prev-box'>
                <div className='Rev-prev-top-border'><b>Weekly Expenses:</b></div>
                <div className='Rev-prev-container'>
                    <small>{today.format("L")}</small> 
                    <h3>{currency.format(week)}</h3>
                    <span> {beginningOfCurrentWeek.format("L")} - {endOfWeek.format("L")}</span>
                </div>
                </div> 
        : null}

        {month != null ? 
            <div className='Rev-prev-box'>
                <div className='Rev-prev-top-border'><b>Monthly Expenses:</b></div>
                <div className='Rev-prev-container'>
                    <small>{today.format("MMMM")}</small>  
                    <h3>{currency.format(month)}</h3>
                    <span> {beginningOfCurrentMonth.format("L")} - {endOfMonth.format("L")}</span>
                </div>
            </div>
        : null}

        {quarter != null ? 
            <div className='Rev-prev-box'>
                <div className='Rev-prev-top-border'><b>Quarterly Expenses:</b></div>
                <div className='Rev-prev-container'>
                    <small>{today.format("Qo")}</small>  
                    <h3>{currency.format(quarter)}</h3>
                    <span> {beginningOfCurrentQuarter.format("L")} - {endOfQuarter.format("L")}</span>
                </div>
            </div>
        : null}

        {year != null ? 
            <div className='Rev-prev-box'>
                <div className='Rev-prev-top-border'><b>Annual Expenses:</b></div>
                <div className='Rev-prev-container'> 
                    <small>{today.format("YYYY")}</small>
                    <h3>{currency.format(year)}</h3>
                    <span> {beginningOfCurrentYear.format("L")} - {endOfYear.format("L")}</span>
                </div>
            </div> 
        :null}
        </>

    )
}