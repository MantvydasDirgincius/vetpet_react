import './PetsPage.css';
import Button from '../../UI/Button/Button.jsx';
import { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import { Link } from 'react-router-dom';

function PetsPage() {
  const [petsData, setPetsData] = useState([]);

  async function fetchPets() {
    const resp = await fetch('petsdb.json');
    const data = await resp.json();
    setPetsData(data);
  }

  useEffect(() => {
    fetchPets();
  }, []);

  function clicked(id) {
    console.log(id);
  }

  return (
    <div className='container'>
      <div className='hero'>
        <h1>PetsPage</h1>
        <div>
          <Link to='/addPets'>
            <Button full>ADD PET</Button>
          </Link>
        </div>
      </div>
      <div className='grid'>
        {petsData.map((obj) => (
          <Card
            key={obj.id}
            title={obj.name}
            onClick={clicked}
            sub1={obj.dob}
            sub2={obj.client_email}
            id={obj.id}
            btn={[
              { full: true, text: 'VIEW LOG' },
              { full: false, text: 'DELETE' },
            ]}
          />
        ))}
      </div>
    </div>
  );
}

export default PetsPage;
