import type { ReactNode } from 'react';

type ChartCardProps = {
  title: string;
  children: ReactNode;
};

export default function ChartCard({ title, children }: ChartCardProps) {
  return (
    <section className="card chart-card">
      <h3 className="section-title">{title}</h3>
      <div className="chart-body">{children}</div>
    </section>
  );
}
