import Elemental from '../../Elemental';

function Test() {
  return <div>1</div>;
}

function App() {
  return (
    <div>
      <Test />
      <Test />
    </div>
  );
}

export default App;
