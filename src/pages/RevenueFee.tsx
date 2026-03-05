import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartCard from '../components/ChartCard';

const monthly = [
  { month: '10月', fee: 980 },
  { month: '11月', fee: 1010 },
  { month: '12月', fee: 1100 },
  { month: '1月', fee: 1180 },
  { month: '2月', fee: 1320 },
];

export default function RevenueFee() {
  return (
    <div>
      <h2 className="page-title">營收分析 / 手續費</h2>
      <ChartCard title="近五個月手續費（萬）">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthly}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="fee" stroke="#9333ea" fill="#c4b5fd" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
