import * as React from 'react'; 
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faChartLine, faCoins, faDollar, faSignal } from '@fortawesome/free-solid-svg-icons' 
import { styled } from '@mui/material/styles';
import { StackedChart } from './StackedChart'; 

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'; 
import { ColorToggleButton } from './ColorToggleButton';

const BorderLinearProgress = styled(LinearProgress)(({ linecolor }) => ({
  height:5, 
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:"#e1e6f1"
  },
  [`& .${linearProgressClasses.bar}`]: { 
    backgroundColor:linecolor
  },
}));

function App() {
  return (
    <div className="App">
       <Dashboard/>
    </div>
  );
}
function Dashboard(){
  return(
    <div > 
      <Details/> 
      <div className='month-overview'>
      <div className='overview'>
      <Overview/>  
      </div>      
      <div className='monthly'>
      <Monthlyprofits/>
      </div>
      </div>
    </div>
    
  );
}

function  Details(){
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "rgb(135, 96, 251)",
      performance: "up",
      type: "count",
      pval:70,
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money",
      pval:60,
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money",
      pval:50,
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money",
      pval:40,
    }
  ]; 
  return(
    <div className='Summarybox-list'>
      {dataList.map((m)=> <Summarybox details={m} /> )}
    </div>
  );
}

function Summarybox({details}){ 
   
  return( 
    <div className='Summarybox-container'>
      <div className='text-icon'>
        <p className='Summarybox-text'>{details.text}</p> 
        <FontAwesomeIcon style={{color:details.iconColor}} icon={details.icon} />
      </div> 

     <h2 className='Summarybox-number'>
     {details.type=="money" ? "$":""} 
     {details.number}
     </h2>

     <BorderLinearProgress linecolor={details.iconColor} variant="determinate" value={details.pval} />
 

      <div className='month-per'>
        <p className='Summarybox-month'>{details.time} </p> 

        <div className='dir-per'>
        <p className='Summarybox-direction'></p>
        <FontAwesomeIcon 
        style={{color: details.performance=="up"? "#03c895":"#ff473d" }} 
        icon={details.performance=="up" ? faCaretUp:faCaretDown}
        /> 
        <p className='Summarybox-percent'>{details.percent}%</p>
        </div>   
      </div>
      
    </div>
  );
}

function Overview(){
  const Monthlabels = ["January", "February", "March", "April", "May", "June", "July"]; 
  const Yearlabels=[2016,2017,2018,2019,2020,2021,2022]
  
  const [time, setTime] = React.useState('month');
  return(
    <div className='Overview-container'>
      <div className='Overview-spec'>
        <div> 
          <p className='monthly-profits-name'>Overview of Sales Win/Lost</p>
          <p className='monthly-profits-text'>Comapred to last month sales.</p>
        </div>
        <ColorToggleButton time={time} setTime={setTime}/>
      </div>

      <StackedChart labels={ time=="month" ? Monthlabels : Yearlabels}/>
    </div>
  );
}

const MonthlyProfits1 = styled(LinearProgress)(({ linecolor }) => ({
  height:5, 
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:"#e1e6f1"
  },
  [`& .${linearProgressClasses.bar}`]: { 
    backgroundColor:linecolor
  },
}));
 

function Monthlyprofits(){
  const MP=[{  
    time:"This Month",
    per:75,
    color:"#8760fb"
  },
  {  
    time:"Last Month",
    per:50,
    color:"#03c895"
  }
]
  return(
    <div className='monthly-profits'>
      <p className='monthly-profits-name'>Monthly Profits</p>
      <p className='monthly-profits-text'>Excepteur sint occaecat cupidatat non proident.</p>
      <h2 className='monthly-profits-number'>$22,534</h2>

      <div className='monthly-profits-last-this'>
         {MP.map((m)=> <Percentprogress dets={m} />)}
      </div> 
    </div>
  );
}

function Percentprogress({dets}){
  return(
      <div className='monthly-profits-last-this'>
        <div className='this-per '>
        <p className='monthly-profits-this'>{dets.time}</p> 
        <p className='monthly-profits-this-per'>{dets.per}%</p>
        </div>
        <div className='Monthly-progress'>
        <MonthlyProfits1  linecolor={dets.color} variant="determinate" value={dets.per} />
        </div>
      </div> 
  );
}
export default App;
