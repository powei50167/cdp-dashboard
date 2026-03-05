import KpiCard from '../components/KpiCard';

export default function CampaignPush() {
  return (
    <div>
      <h2 className="page-title">活動設計 / Push</h2>
      <div className="grid-3">
        <KpiCard title="觸達人數" value="22,400" />
        <KpiCard title="開啟率" value="23.4%" delta="+2.8%" />
        <KpiCard title="轉單率" value="6.1%" delta="+0.6%" hint="近7天" />
      </div>
    </div>
  );
}
