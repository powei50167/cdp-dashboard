import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import ChartCard from '../components/ChartCard';

const data = [
  { name: '20-29', value: 18 },
  { name: '30-39', value: 36 },
  { name: '40-49', value: 27 },
  { name: '50+', value: 19 },
];

const colors = ['#2563eb', '#16a34a', '#f59e0b', '#ef4444'];

export default function SegmentAge() {
  return (
    <div>
      <h2 className="page-title">客群分析 / 年齡</h2>
      <ChartCard title="客戶年齡分佈（%）">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={110} label>
              {data.map((entry) => (
                <Cell key={entry.name} fill={colors[data.indexOf(entry)]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
