const rows = [
  { product: '台指期', users: 1260, ratio: '47.7%' },
  { product: '小台指', users: 830, ratio: '31.4%' },
  { product: '電子期', users: 320, ratio: '12.1%' },
  { product: '金融期', users: 230, ratio: '8.8%' },
];

export default function SegmentPreference() {
  return (
    <div>
      <h2 className="page-title">客群分析 / 商品偏好</h2>
      <table className="table">
        <thead>
          <tr>
            <th>商品</th>
            <th>偏好客戶數</th>
            <th>佔比</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.product}>
              <td>{row.product}</td>
              <td>{row.users.toLocaleString()}</td>
              <td>{row.ratio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
