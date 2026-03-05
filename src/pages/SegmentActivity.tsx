import KpiCard from '../components/KpiCard';

export default function SegmentActivity() {
  return (
    <div>
      <h2 className="page-title">客群分析 / 活躍度</h2>
      <div className="grid-3">
        <KpiCard title="高活躍客戶" value="920" hint="每週交易 ≥ 4 次" />
        <KpiCard title="中活躍客戶" value="1,110" hint="每週交易 1-3 次" />
        <KpiCard title="低活躍客戶" value="610" hint="每月交易 < 4 次" />
      </div>
    </div>
  );
}
