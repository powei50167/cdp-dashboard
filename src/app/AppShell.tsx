// src/app/AppShell.tsx
import { NavLink, Outlet } from "react-router-dom";

const nav = [
  { to: "/", label: "總覽儀表板" },
  { to: "/customers", label: "客群分析" },
  { to: "/revenue", label: "營收與貢獻" },
  { to: "/strategy", label: "策略目標" },
  { to: "/campaigns", label: "活動設計" },
];

export default function AppShell() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex">
        <aside className="w-64 bg-white border-r min-h-screen">
          <div className="p-4 border-b">
            <div className="text-lg font-semibold">期貨 CDP</div>
            <div className="text-xs text-slate-500">Executive Console</div>
          </div>
          <nav className="p-2">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-sm mb-1 ${
                    isActive ? "bg-slate-900 text-white" : "hover:bg-slate-100"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="flex-1">
          <header className="h-14 bg-white border-b flex items-center justify-between px-4">
            <div className="text-sm text-slate-600">統一期貨 / 管理層視角</div>
            <div className="text-xs text-slate-500">資料窗：近 30 天（可切換）</div>
          </header>
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}