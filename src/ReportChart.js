import React,{useState,useEffect} from "react";
import { Chart } from "react-google-charts";
const ReportChart=(props)=>{
    const {data}=props
    const [bar,setBar]=useState([])
    useEffect(()=>{
        const result=[ [
            'Element',
            'Density',
            { role: 'style' },
            {
              sourceColumn: 0,
              role: 'annotation',
              type: 'string',
              calc: 'stringify',
            },
          ]]
       data.forEach(ele=>{
           if(ele['Guest']==='No')
           {
            result.push([ele['Name (Original Name)'],ele['Total Duration (Minutes)'],'#FE1957',null])
           }
           else
           {
            result.push([ele['Name (Original Name)'],ele['Total Duration (Minutes)'],'blue',null])
           }
       })
       setBar(result)
    },[data])
    return(
        <Chart
        display={'inline-block'}
        width={'500px'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={bar}
        options={{
          title: 'List of Attendies',
          width: 600,
          height: 400,
          bar: { groupWidth: '95%' },
          legend: { position: 'none' },
        }}
        // For tests
        rootProps={{ 'data-testid': '6' }}
      />
    )
}
export default ReportChart