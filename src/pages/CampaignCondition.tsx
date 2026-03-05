const tagSections = [
  {
    key: 'persona',
    title: '樣貌標籤 (P)',
    className: 'persona',
    rows: [
      {
        field: '分公司',
        options: '台北 / 台中 / 台南 / 高雄',
        source: '無',
        nullable: 'N',
        enabled: 'Y',
        refresh: 'N',
      },
      {
        field: '年齡區間',
        options: '18-24(25Z世代) / 25-34(35Y世代) / 35-44(中堅世代) / 45-70(壯世代) / 70+',
        source: 'DB',
        nullable: 'N',
        enabled: 'Y',
        refresh: 'N',
      },
      {
        field: '性別',
        options: '男 / 女',
        source: 'DB',
        nullable: 'N',
        enabled: 'Y',
        refresh: 'N',
      },
      {
        field: '教育程度',
        options: '不識字 / 小學 / 國中 / 高中 / 大學 / 碩士 / 博士',
        source: 'DB',
        nullable: 'N',
        enabled: 'Y',
        refresh: 'N',
      },
      {
        field: '帳戶狀態',
        options: '正常戶 / 靜止戶 / 銷戶',
        source: 'DB',
        nullable: 'N',
        enabled: 'Y',
        refresh: 'N',
      },
      {
        field: '開戶年資',
        options: '新開戶(90天內) / 5年內 / 10年內 / 10年+',
        source: 'DB',
        nullable: 'N',
        enabled: 'Y',
        refresh: 'N',
      },
      {
        field: '開戶渠道',
        options: '線上 / 臨櫃 / 活動 / 介紹',
        source: 'DB',
        nullable: 'N',
        enabled: 'Y',
        refresh: 'N',
      },
    ],
  },
  {
    key: 'behavior',
    title: '行為標籤 (B)',
    className: 'behavior',
    rows: [
      {
        field: '登入天數',
        options: '無 / 低(5天內) / 中(10天內) / 高(15天內) / 極高(15天+)',
        source: '無',
        nullable: 'N',
        enabled: 'Y',
        refresh: '30天內',
      },
      {
        field: '委託天數',
        options: '無 / 低(5天內) / 中(10天內) / 高(15天內) / 極高(15天+)',
        source: '無',
        nullable: 'N',
        enabled: 'Y',
        refresh: '30天內',
      },
      {
        field: '成交天數',
        options: '無 / 低(5天內) / 中(10天內) / 高(15天內) / 極高(15天+)',
        source: 'DB',
        nullable: 'N',
        enabled: 'Y',
        refresh: '30天內',
      },
      {
        field: '商品偏好',
        options: '無 / 利率 / 指數 / 能源 / 農產品 / 金屬 / 外匯',
        source: '無',
        nullable: 'N',
        enabled: 'N',
        refresh: '30天內',
      },
      {
        field: '委託系統偏好',
        options: '無',
        source: '無',
        nullable: 'N',
        enabled: 'N',
        refresh: '30天內',
      },
      {
        field: '委託時間偏好',
        options: '無 / 8-17(上班) / 17-22(下班) / 22-8(夜間)',
        source: '無',
        nullable: 'N',
        enabled: 'N',
        refresh: '30天內',
      },
    ],
  },
  {
    key: 'operation',
    title: '營運標籤 (O)',
    className: 'operation',
    rows: [
      {
        field: '委託筆數',
        options: '依 30 天內公司總數，以分位數切 5 級(無 / 低 / 中 / 高 / 極高委託)',
        source: '無',
        nullable: 'N',
        enabled: 'Y',
        refresh: '30天內',
      },
      {
        field: '成交筆數',
        options: '依 30 天內公司總數，以分位數切 5 級(無 / 低 / 中 / 高 / 極高委託)',
        source: 'DB',
        nullable: 'N',
        enabled: 'Y',
        refresh: '30天內',
      },
      {
        field: '手續費加總',
        options: '依 30 天內公司總數，以分位數切 5 級(無 / 低 / 中 / 高 / 極高委託)',
        source: 'DB',
        nullable: 'N',
        enabled: 'Y',
        refresh: '30天內',
      },
      {
        field: '收盤平均風險指標',
        options: '依 30 天內公司總數，以分位數切 5 級(無 / 低 / 中 / 高 / 極高委託)',
        source: 'DB',
        nullable: 'N',
        enabled: 'Y',
        refresh: '30天內',
      },
      {
        field: '收盤平均權益數',
        options: '依 30 天內公司總數，以分位數切 5 級(無 / 低 / 中 / 高 / 極高委託)',
        source: 'DB',
        nullable: 'N',
        enabled: 'Y',
        refresh: '30天內',
      },
    ],
  },
];

export default function CampaignCondition() {
  return (
    <div>
      <h2 className="page-title">活動設計 / 客戶條件欄位矩陣</h2>
      <p className="condition-subtitle">整理樣貌、行為與營運標籤欄位，作為活動客群條件設定基礎。</p>

      <div className="condition-table-wrapper card">
        <table className="condition-table">
          <thead>
            <tr>
              <th>標籤類別</th>
              <th>欄位名稱</th>
              <th>欄位值</th>
              <th>資料來源</th>
              <th>允許空值</th>
              <th>可篩選</th>
              <th>更新週期</th>
            </tr>
          </thead>
          <tbody>
            {tagSections.map((section) =>
              section.rows.map((row, index) => (
                <tr key={`${section.key}-${row.field}`} className={`tag-row ${section.className}`}>
                  {index === 0 && (
                    <th rowSpan={section.rows.length} className="tag-category" scope="rowgroup">
                      {section.title}
                    </th>
                  )}
                  <td>{row.field}</td>
                  <td>{row.options}</td>
                  <td className={row.source === '無' ? 'source-empty' : ''}>{row.source}</td>
                  <td>{row.nullable}</td>
                  <td>{row.enabled}</td>
                  <td>{row.refresh}</td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
