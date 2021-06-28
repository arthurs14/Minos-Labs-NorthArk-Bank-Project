import {Line} from 'react-chartjs-2'



export default function TransactionGraph(){
    //more dummy data
    const months = ["January", "February", "March", "April", "May", "June", "July","August", "September","October","November", "December"]
    const income =[1200.50,1069.05,1440.21,700,1200,1000,700,1234,1423.76,950,1234.67,970.89]
    const income2=[1000.50,869.05,1240.21,500,1100,900,800,1034,1223.76,850,1034.67,670.89]
    
    const data = {
      labels: months,
      datasets: [{
            label: 'Yearly Revenue by Month(2020)',
            data: income,
            borderColor:['#75b3c6'],
            backgroundColor:['rgb(117, 179, 198, 0.1)'],
            fill: true,
            pointBackgroundColor:['#75b3c6'],
            pointBorderColor:['#75b3c6']
      },
      {
            label: 'Yearly Revenue by Month(2019)',
            data: income2,
            borderColor:['#854901'],
            backgroundColor:['rgb(133, 73, 1, 0.1)'],
            fill:true,
            pointBackgroundColor:['#854901'],
            pointBorderColor:['#854901']
        }
    ]
    }
    
    return<Line  data={data}/>
        
            
        
    
}

