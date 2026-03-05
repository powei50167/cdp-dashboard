import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartCard from '../components/ChartCard';

const feeData = [
  { week: 'W1', fee: 280 },
  { week: 'W2', fee: 300 },
  { week: 'W3', fee: 325 },
  { week: 'W4', fee: 350 },
];

export default function DashboardFee() {
  return (
    <div>
      <h2 className="page-title">Dashboard / 手續費</h2>
      <ChartCard title="近四週手續費（萬）」">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={feeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="fee" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
