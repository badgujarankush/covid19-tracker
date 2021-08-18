import React from 'react'
import { Doughnut} from "react-chartjs-2";


function Graph({statistics}) {

    const stats = {
        labels: ['Cases', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
                '#157ECE',
                '#15CE41',
                '#CE2E15',
            ],
            hoverBackgroundColor: [
                '#003350',
                '#175000',
                '#501800'
            ],
            data: [statistics.cases, statistics.recovered, statistics.deaths]
          }
        ],
        
      }





    return (
        <div>
            <Doughnut
          data={stats}
          options={{
            title:{
              display:true,
              text:'Statistics',
              fontSize:10
            },
            legend:{
              display:true,
              position:'bottom'
            },
            
          }}
        
        />
        </div>
    )
}

export default Graph
