import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MedicationsPage from './components/Medications/MedicationsPage';
import PetsPage from './components/Pets/PetsPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/medication'>
          <MedicationsPage />
        </Route>

        <Route path='/'>
          <PetsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
