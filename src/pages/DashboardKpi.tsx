import KpiCard from '../components/KpiCard';

export default function DashboardKpi() {
  return (
    <div>
      <h2 className="page-title">Dashboard / KPI</h2>
      <div className="grid-3">
        <KpiCard title="本月手續費" value="NT$ 13.2M" delta="+8.4%" hint="較上月" />
        <KpiCard title="活躍客戶" value="2,640" delta="+5.3%" hint="近30天有登入或交易" />
        <KpiCard title="活動轉換率" value="18.7%" delta="+2.1%" hint="EDM + Push" />
      </div>
    </div>
  );
}
