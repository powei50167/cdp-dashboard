type KpiCardProps = {
  title: string;
  value: string;
  delta?: string;
  hint?: string;
};

export default function KpiCard({ title, value, delta, hint }: KpiCardProps) {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <p className="card-value">{value}</p>
      <div className="card-meta">
        {delta ? <span className="badge">{delta}</span> : null}
        {hint ? <span>{hint}</span> : null}
      </div>
    </div>
  );
}
