import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';
import './chart'



const RenderLineChart = (props) => {
  return (
    <div className={props.chartContainerClass}>
      <LineChart
        width={1200}
        height={200}
        data={props.data}
        className="chart-line"
      >
        <Line type="monotone" dataKey="price" stroke="#22DEBE" />
        <XAxis dataKey="name" tick={false} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default RenderLineChart;

