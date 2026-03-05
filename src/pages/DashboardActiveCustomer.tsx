import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartCard from '../components/ChartCard';

const activeData = [
  { date: '2/01', active: 2010 },
  { date: '2/08', active: 2280 },
  { date: '2/15', active: 2360 },
  { date: '2/22', active: 2520 },
  { date: '2/29', active: 2640 },
];

export default function DashboardActiveCustomer() {
  return (
    <div>
      <h2 className="page-title">Dashboard / 活躍客戶</h2>
      <ChartCard title="活躍客戶數趨勢">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={activeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="active" stroke="#16a34a" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
