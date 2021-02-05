import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';
import './chart'

// import { withRouter } from 'react-router-dom';


const RenderLineChart = (props) => {
  return (
  <LineChart width={800} height={200} data={props.data} className='chart-line'>
    <Line type="monotone" dataKey="price" stroke="#8884d8"  />
    {/* <CartesianGrid stroke="#ccc" /> */}
    <XAxis dataKey="name" tick={false}/>
    <YAxis />
    <Tooltip />
    
  </LineChart>
  )
};

export default RenderLineChart;

{/* <LineChart width={800} height={200} data={props.data} className='chart-line' margin={{ top: 5, right: 20, bottom: 5, left: 0 }}></LineChart> */}
