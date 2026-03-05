import type { ReactNode } from 'react';
import type { PageItem } from './routes';

type AppShellProps = {
  pages: PageItem[];
  currentPage: string;
  onPageChange: (key: string) => void;
  children: ReactNode;
};

export default function AppShell({ pages, currentPage, onPageChange, children }: AppShellProps) {
  const groups = [...new Set(pages.map((item) => item.group))];

  return (
    <div className="layout-root">
      <aside className="sidebar">
        <div className="brand">
          <h1>CDP系統</h1>
          <p>Data-Driven Console</p>
        </div>
        {groups.map((group) => (
          <section key={group} className="menu-group">
            <h2>{group}</h2>
            {pages
              .filter((item) => item.group === group)
              .map((item) => (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => onPageChange(item.key)}
                  className={item.key === currentPage ? 'menu-item active' : 'menu-item'}
                >
                  {item.label}
                </button>
              ))}
          </section>
        ))}
      </aside>
      <main className="content">
        <header className="topbar">
          <span>資料期間：2026/02/01 - 2026/02/29</span>
          <span>更新時間：每日 08:00</span>
        </header>
        <div className="page-container">{children}</div>
      </main>
    </div>
  );
}
