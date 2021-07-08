// import { useState } from 'react' ---to replace variables
import {Link} from 'react-router-dom' 
import RevenueLists from './RevenueLists'
import moment from 'moment'
import home from '../../Assets/SvgIcons/home.svg'
import { useState } from 'react'


export default function Revenue(){

    const [isOpen,setIsOpen] = useState(false)
    
    //place holder variables
    const yearlyIncome = 75000
    const monthlyIncome = 6250.52
    const WeeklyIncome = 1400

    //formatting number to currency 
    const currency = new Intl.NumberFormat('en-US' , {style: 'currency', currency: 'usd'})
    
    
    
    return(
        <div className='Revenue-container'>
            <div className='Rev-Home-Route'>
                <Link  to='/home'><span><img src={home} alt='home'/></span>Home</Link>
            </div>
                        <div className='Revenue-top-prev'>
                            <RevenuePrev week={currency.format(Number(WeeklyIncome))}/>
                            <RevenuePrev month={currency.format(Number(monthlyIncome))}/> 
                            <RevenuePrev year={currency.format(Number(yearlyIncome))}/>
                        </div>
                    <div className='Rev-content-panel-container'>
                        <div className='Revenue-content'>
                            <RevenueLists/>
                        </div>
                    
                        <div onClick={()=>setIsOpen(!isOpen)} className={isOpen ? 'panel-active': 'Rev-options-panel' }>

                        </div>
                    </div>
        </div>
    )
}


 function RevenuePrev(props){
    const week = props.week;
    const month = props.month;
    const year = props.year;
    //moment used for measuring income by date 
    const today = moment()

    //income by week
    const beginningOfCurrentWeek = moment().startOf('isoWeek')
    const endOfWeek = moment().endOf('isoWeek')

    //by Month 
    const beginningOfCurrentMonth = moment().startOf('Month')
    const endOfMonth = moment().endOf('Month')

    //Annual 
    const beginningOfCurrentYear = moment().startOf('Year')
    const endofYear = moment().endOf('Year')

    return(
        <>

        {/* Rendered based on filled props */}
        {week != null ? 
            <div className='Rev-prev-box'>
                <div className='Rev-prev-top-border'><b>Weekly Revenue:</b></div>
                <div className='Rev-prev-container'>
                    <small>{today.format("L")}</small> 
                    <h3>{week}</h3>
                    <span> {beginningOfCurrentWeek.format("L")} - {endOfWeek.format("L")}</span>
                </div>
                </div> 
        : null}

        {month != null ? 
            <div className='Rev-prev-box'>
                <div className='Rev-prev-top-border'><b>Monthly Revenue:</b></div>
                <div className='Rev-prev-container'>
                    <small>{today.format("MMM [/] YYYY")}</small>  
                    <h3>{month}</h3>
                    <span> {beginningOfCurrentMonth.format("L")} - {endOfMonth.format("L")}</span>
                </div>
            </div>
        : null}

        {year != null ? 
            <div className='Rev-prev-box'>
                <div className='Rev-prev-top-border'><b>Annual Revenue:</b></div>
                <div className='Rev-prev-container'> 
                    <small>{today.format("YYYY")}</small>
                    <h3>{year}</h3>
                    <span> {beginningOfCurrentYear.format("L")} - {endofYear.format("L")}</span>
                </div>
            </div> 
        :null}
        </>

    )
}
