const conditions = [
  '近 30 天未登入，且 AUM > 50 萬',
  '近 7 天交易次數 >= 3，偏好台指期',
  '開啟 EDM 但未下單，近 14 天有瀏覽報告',
];

export default function CampaignCondition() {
  return (
    <div>
      <h2 className="page-title">活動設計 / 客戶條件</h2>
      <ol className="condition-list">
        {conditions.map((condition) => (
          <li key={condition}>{condition}</li>
        ))}
      </ol>
    </div>
  );
}
