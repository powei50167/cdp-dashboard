// src/components/KpiCard.tsx
export default function KpiCard(props: {
    title: string;
    value: string;
    delta?: string;
    hint?: string;
  }) {
    return (
      <div className="bg-white rounded-2xl border p-4 shadow-sm">
        <div className="text-xs text-slate-500">{props.title}</div>
        <div className="mt-2 text-2xl font-semibold">{props.value}</div>
        <div className="mt-1 flex items-center gap-2">
          {props.delta && <span className="text-xs rounded-full px-2 py-0.5 bg-slate-100">{props.delta}</span>}
          {props.hint && <span className="text-xs text-slate-500">{props.hint}</span>}
        </div>
      </div>
    );
  }