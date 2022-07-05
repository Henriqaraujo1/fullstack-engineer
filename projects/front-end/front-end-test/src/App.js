import logo from './image/Logo.svg';
import './sass/styles.scss';
import Card from './component/Card';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="nav-logo">
          <img className="logo"src={logo}  alt="log"/>
        </nav>
        <h1 className="h-title">Airlines</h1>
        <form className="form">
          <h2 className="f-title">Filter by alliances</h2>
          <div className="f-check">
            <input type="checkbox" name="oneworld"/>
            <label>Oneworld</label>
            <input type="checkbox" name="Skyteam"/>
            <label>Sky Team</label>
            <input type="checkbox" name="Star Alliance"/>
            <label>Star Alliance</label>
          </div>

        </form>
        <Card />
      </header>
    </div>
  );
}

export default App;
