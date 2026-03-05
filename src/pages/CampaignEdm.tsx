import KpiCard from '../components/KpiCard';

export default function CampaignEdm() {
  return (
    <div>
      <h2 className="page-title">活動設計 / EDM</h2>
      <div className="grid-3">
        <KpiCard title="發送總量" value="48,000" />
        <KpiCard title="開信率" value="41.8%" delta="+4.2%" hint="較上檔期" />
        <KpiCard title="點擊率" value="12.6%" delta="+1.3%" hint="CTA優化後" />
      </div>
    </div>
  );
}
