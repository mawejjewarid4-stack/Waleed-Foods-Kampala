import { createRoot } from 'react-dom/client';
import RecentOrdersChart from './RecentOrdersChart.tsx';

function mountChart() {
  const chartTarget = document.getElementById('recharts-recent-orders-root');
  if (chartTarget) {
    createRoot(chartTarget).render(<RecentOrdersChart />);
  } else {
    const rootTarget = document.getElementById('root');
    if (rootTarget) {
      createRoot(rootTarget).render(<RecentOrdersChart />);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountChart);
} else {
  mountChart();
}

