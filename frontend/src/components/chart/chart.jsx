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
    {/* <ReferenceLine y={props.lowMid} label="low-to-mid" stroke="red" strokeDasharray="3 3" />
    <ReferenceLine y={props.midHigh} label="mid-to-high" stroke="red" strokeDasharray="3 3" /> */}
  </LineChart>
  )
};

export default RenderLineChart;

{/* <LineChart width={800} height={200} data={props.data} className='chart-line' margin={{ top: 5, right: 20, bottom: 5, left: 0 }}></LineChart> */}
