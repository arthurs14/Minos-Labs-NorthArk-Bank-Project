import { useState } from "react"
import '../RevenueReport/RevenueOptions.css'
import moment from "moment"



export default function RevenueOptions(){
    
    
    const [today,setToday] = useState(moment())
    const [val, setVal] = useState(null)
    const week = today.startOf('isoWeek').format('L') + '-' +  today.endOf('isoWeek').format('L')
    const month = today.startOf('Month').format('L') + '-' + today.endOf('Month').format('L')
    const quarter = today.startOf('quarter').format('L')+ '-' + today.endOf('quarter').format('L')
    const year  = today.startOf('Year').format('L')+ '-' + today.endOf('Year').format('L')

     
     const handleChange = (event) => {
        event.preventDefault()
        setToday( moment(event.target.value,'YYYY-MM-DD',true))
        setVal(1)
      }
      const handleSubmit = (event) => {
        event.preventDefault()
        //for setting date context
        setVal(null)
      }

      const style= {
          color: val!= null ? '#75b3c6': 'lightgray',
          margin: 0,
          padding: '5px',
          background: 'lightgray',
          borderRadius: '5px'
      }
    
    return(
        <div className='Rev-options-container'>
            <input className='Date-Picker-style' onChange={handleChange} type="date"  />
            <h3 >Revenue Week:<p style={style}>{ week }</p></h3>
            <h3>Revenue Month:<p style={style}>{ month }</p></h3>
            <h3>Revenue Quarter:<p style={style}> {quarter }</p></h3>
            <h3>Revenue Year:<p style={style}>{ year }</p> </h3>
            <div className='view-button-container'> 
                <button className='view-button' onClick={handleSubmit}>View</button>
            </div>
        </div>
    )
}