// src/components/ChartCard.tsx
import { ReactNode } from "react";

export default function ChartCard(props: { title: string; right?: ReactNode; children: ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-medium">{props.title}</div>
        {props.right}
      </div>
      <div className="h-72">{props.children}</div>
    </div>
  );
}