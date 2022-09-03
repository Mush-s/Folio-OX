import ReactDOM from 'react-dom';

const Test = () => {
  return ReactDOM.createPortal(
    <h1>Hello Portals</h1>,
    document.getElementById('portal')
  );
};

function App() {
  return (
    <div>
      <p>初めてのreact.jsでのPortalsの設定です。</p>
    </div>
  );
}

export default App;
