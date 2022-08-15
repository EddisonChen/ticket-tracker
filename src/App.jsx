import './App.scss';
import team from './data/team';
import Card from './components/Card/Card';

function App() {

  // const teamNames = team.map((member) => {
  //   return member.name;
  // })
  // const teamRole = team.map((member) => {
  //   return member.role;
  // })
  

  return (
    <>
      <h1>Ticket Tracker</h1>

      <div className="card">
        <Card team={team} className="perCard"/>
      </div>
    </>
  );
}

export default App;
