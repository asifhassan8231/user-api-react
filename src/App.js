import './App.css';
import Friends from './component/Friends/Friends';
import Users from './component/Users/Users';

function App() {
  return (
    <div className="App">
      <h1>List of users</h1>
      <Friends />
      <Users />
    </div>
  );
}

export default App;
