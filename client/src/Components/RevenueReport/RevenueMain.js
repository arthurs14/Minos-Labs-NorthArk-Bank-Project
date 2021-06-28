import LIHPHeader from '../LoggedInHomePage/LIHPHeader'
import LIHPFooter from '../LoggedInHomePage/LIHPFooter'
import Revenue from './Revenue'
import '../RevenueReport/RevenueReport.css'
import '../RevenueReport/RevenueLists.css'

export default function RevenueMain(){
    return(
        <div className='RevenueMain-container'>
            <LIHPHeader/>
            <Revenue/>
            <LIHPFooter/>
        </div>
    )
}