import "./App.css";

function App() {
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>期貨 CDP 管理平台</h1>

      <h2>公司概況</h2>

      <div style={{ display: "flex", gap: 20 }}>
        <div style={card}>
          <h3>本月手續費</h3>
          <p>12,800,000</p>
        </div>

        <div style={card}>
          <h3>活躍客戶</h3>
          <p>2,430</p>
        </div>

        <div style={card}>
          <h3>成交客戶</h3>
          <p>1,120</p>
        </div>

        <div style={card}>
          <h3>沉睡客戶</h3>
          <p>4,980</p>
        </div>
      </div>
    </div>
  );
}

const card = {
  border: "1px solid #ddd",
  padding: 20,
  borderRadius: 10,
  width: 200,
};

export default App;