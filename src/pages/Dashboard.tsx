// src/pages/Dashboard.tsx
import KpiCard from "../components/KpiCard";
import ChartCard from "../components/ChartCard";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

const revenueTrend = [
  { d: "W1", fee: 120 },
  { d: "W2", fee: 135 },
  { d: "W3", fee: 128 },
  { d: "W4", fee: 160 },
];

const activeByBranch = [
  { name: "台北", active: 520 },
  { name: "台中", active: 310 },
  { name: "台南", active: 180 },
  { name: "高雄", active: 260 },
];

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <KpiCard title="本月手續費" value="NT$ 12.8M" delta="+6.2%" hint="較上月" />
        <KpiCard title="近30天活躍客數" value="2,430" delta="+3.1%" hint="登入/委託任一" />
        <KpiCard title="近30天成交客數" value="1,120" delta="+1.4%" hint="有成交" />
        <KpiCard title="沉睡戶（30天無登入）" value="4,980" delta="-0.8%" hint="可做喚回" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <ChartCard title="手續費趨勢（週）">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="d" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="fee" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="分公司活躍客數（近30天）">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activeByBranch}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="active" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}