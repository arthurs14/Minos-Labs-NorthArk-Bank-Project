import { useState } from "react"
import '../RevenueReport/RevenueOptions.css'
import moment from "moment"


export default function RevenueOptions(){
    const today = moment()
    const [date, setDate] = useState(new Date())
    const [week, setWeek] = useState(today.startOf('isoWeek').format('L') + '-' +  today.endOf('isoWeek').format('L'))
    const [month, setMonth] = useState(today.startOf('Month').format('L') + '-' + today.endOf('Month').format('L'))
    const [quarter, setQuarter] = useState(today.startOf('quarter').format('L')+ '-' + today.endOf('quarter').format('L'))
    const [year, setYear] = useState(today.startOf('Year').format('L')+ '-' + today.endOf('Year').format('L'))
    
    console.log(date)
    return(
        <div className='Rev-options-container'>
            <input type="date" defaultValue={today.format("YYYY[-]MM[-]DD")} /><h3>Revenue Week: {week}</h3>
            <input type="date" defaultValue={today.format("YYYY[-]MM[-]DD")} /><h3>Revenue Month: {month}</h3>
            <input type="date" defaultValue={today.format("YYYY[-]MM[-]DD")} /><h3>Revenue Quarter: {quarter}</h3>
            <input type="date" defaultValue={today.format("YYYY[-]MM[-]DD")} /><h3>Revenue Year: {year}</h3>
        </div>
    )
}