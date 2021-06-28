import {useState} from 'react'
import RevenueData from './RevenueData'
import listIcon from '../../Assets/SvgIcons/listIcon.svg'
import graphIcon from '../../Assets/SvgIcons/graphIcon.svg'
import barIcon from '../../Assets/SvgIcons/barIcon.svg'


export default function RevenueLists(){
    const [rDataState, setRDataState] = useState(0);
    const revData = ['Revenue List', 'Comparison Graph', 'Revenue Chart'  ]
    return(
        <div className='Rev-List-container'>
            <div className='Rev-sidebar'>
                <img className={rDataState === 0 ? 'sidebar-active': null} onClick={()=>setRDataState(0)} src={listIcon} alt='ListIcon'/>
                <img className={rDataState === 1 ? 'sidebar-active': null} onClick={()=>setRDataState(1)} src={graphIcon} alt='GraphIcon'/>
                <img className={rDataState === 2 ? 'sidebar-active': null} onClick={()=>setRDataState(2)} src={barIcon} alt='BarIcon'/>
            </div>

            <div className='Rev-data-container'>
                <div className='Rev-data-top'><b>{revData[rDataState]}</b></div>
                <RevenueData show={rDataState}/>
            </div>

        </div>
    )
}