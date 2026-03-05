const rows = [
  { tier: 'Top 10%', revenue: 'NT$ 7.6M', ratio: '57.6%' },
  { tier: 'Top 30%', revenue: 'NT$ 10.4M', ratio: '78.8%' },
  { tier: '其餘 70%', revenue: 'NT$ 2.8M', ratio: '21.2%' },
];

export default function RevenueContribution() {
  return (
    <div>
      <h2 className="page-title">營收分析 / 客戶貢獻</h2>
      <table className="table">
        <thead>
          <tr>
            <th>客戶分層</th>
            <th>貢獻營收</th>
            <th>貢獻佔比</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.tier}>
              <td>{row.tier}</td>
              <td>{row.revenue}</td>
              <td>{row.ratio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
