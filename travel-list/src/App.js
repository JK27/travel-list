export default function App() {
  return <div className="app">
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </div>;
}

/////////////////////////////////////////////////////////// LOGO
function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

/////////////////////////////////////////////////////////// FORM
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}

/////////////////////////////////////////////////////////// PACKING LIST
function PackingList() {
  return (
    <div className="list">LIST</div>
  );
}

/////////////////////////////////////////////////////////// STATS
function Stats() {
  return (
    <footer className="stats">
      <em>
        💼 You have X items on your list and you already packed X (X%)
      </em>
    </footer>
  );
}