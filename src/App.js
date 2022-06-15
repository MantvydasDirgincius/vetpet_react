import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AddPetsPage from './components/pages/AddPets/AddpetsPage';
import MedicationsPage from './components/pages/Medications/MedicationsPage';
import PetsPage from './components/pages/Pets/PetsPage';
import AddMedsPage from './components/pages/AddMeds/AddMedsPage';
import SoloPet from './components/pages/SoloPet/SoloPet';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/pets/:id/:name'>
          <SoloPet />
        </Route>
        <Route path='/addPets'>
          <AddPetsPage />
        </Route>
        <Route path='/addMeds'>
          <AddMedsPage />
        </Route>
        <Route path='/medication'>
          <MedicationsPage />
        </Route>
        <Route path='/'>
          <PetsPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
