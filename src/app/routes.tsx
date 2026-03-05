export type PageItem = { key: string; label: string; group: string };

export const pageItems: PageItem[] = [
  { key: 'dashboard-kpi', label: 'KPI', group: 'Dashboard' },
  { key: 'dashboard-fee', label: '手續費', group: 'Dashboard' },
  { key: 'dashboard-active', label: '活躍客戶', group: 'Dashboard' },
  { key: 'segment-age', label: '年齡', group: '客群分析' },
  { key: 'segment-preference', label: '商品偏好', group: '客群分析' },
  { key: 'segment-activity', label: '活躍度', group: '客群分析' },
  { key: 'revenue-fee', label: '手續費', group: '營收分析' },
  { key: 'revenue-contribution', label: '客戶貢獻', group: '營收分析' },
  { key: 'campaign-edm', label: 'EDM', group: '活動設計' },
  { key: 'campaign-push', label: 'Push', group: '活動設計' },
  { key: 'campaign-condition', label: '客戶條件', group: '活動設計' },
];
