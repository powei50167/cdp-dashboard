import { useMemo, useState, type ReactNode } from 'react';
import AppShell from './app/AppShell';
import { pageItems } from './app/routes';
import DashboardKpi from './pages/DashboardKpi';
import DashboardFee from './pages/DashboardFee';
import DashboardActiveCustomer from './pages/DashboardActiveCustomer';
import SegmentAge from './pages/SegmentAge';
import SegmentPreference from './pages/SegmentPreference';
import SegmentActivity from './pages/SegmentActivity';
import RevenueFee from './pages/RevenueFee';
import RevenueContribution from './pages/RevenueContribution';
import CampaignEdm from './pages/CampaignEdm';
import CampaignPush from './pages/CampaignPush';
import CampaignCondition from './pages/CampaignCondition';

const pageMap: Record<string, ReactNode> = {
  'dashboard-kpi': <DashboardKpi />,
  'dashboard-fee': <DashboardFee />,
  'dashboard-active': <DashboardActiveCustomer />,
  'segment-age': <SegmentAge />,
  'segment-preference': <SegmentPreference />,
  'segment-activity': <SegmentActivity />,
  'revenue-fee': <RevenueFee />,
  'revenue-contribution': <RevenueContribution />,
  'campaign-edm': <CampaignEdm />,
  'campaign-push': <CampaignPush />,
  'campaign-condition': <CampaignCondition />,
};

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard-kpi');
  const currentView = useMemo(() => pageMap[currentPage] ?? <DashboardKpi />, [currentPage]);

  return (
    <AppShell pages={pageItems} currentPage={currentPage} onPageChange={setCurrentPage}>
      {currentView}
    </AppShell>
  );
}

export default App;
