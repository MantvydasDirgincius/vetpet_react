import Button from '../../UI/Button/Button.jsx';
import { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import { Link } from 'react-router-dom';
import Input from '../../UI/Input/Input.jsx';

function PetsPage() {
  const [petsData, setPetsData] = useState([]);
  const [visiblePets, setVisiblePets] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInput() {
    const filtered = petsData.filter((pObj) => pObj.name.toLowerCase().includes(inputValue.toLowerCase()));
    setVisiblePets(filtered);
  }

  useEffect(() => {
    handleInput();
  }, [inputValue]);

  async function fetchPets() {
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets');
    const data = await resp.json();
    setPetsData(data);
    setVisiblePets(data);
  }
  useEffect(() => {
    fetchPets();
  }, []);

  async function deleteById(id) {
    const resp = await fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${id}`, {
      method: 'DELETE',
    });
    const data = await resp.json();
    if (data.changes === 1) {
      fetchPets();
    }
  }

  return (
    <div className='container'>
      <div className='hero'>
        <h1>PetsPage</h1>
        <Input
          type='text'
          placeholder='Search'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          name='search'
        />
        <div>
          <Link to='/addPets'>
            <Button full>ADD PET</Button>
          </Link>
        </div>
      </div>

      {inputValue.length === 0 ? (
        <div className='grid'>
          {petsData.map((obj, i) => (
            <Card
              key={i}
              title={obj.name}
              sub1={new Date(obj.dob).toDateString()}
              sub2={obj.client_email}
              id={obj.id}
              btn={[
                { full: true, text: 'VIEW LOG', link: true, name: obj.name },
                { full: false, text: 'DELETE', onDelete: deleteById },
              ]}
            />
          ))}
        </div>
      ) : (
        <div className='grid'>
          {visiblePets.map((obj, i) => (
            <Card
              key={i}
              title={obj.name}
              sub1={new Date(obj.dob).toDateString()}
              sub2={obj.client_email}
              id={obj.id}
              btn={[
                { full: true, text: 'VIEW LOG', link: true, name: obj.name },
                { full: false, text: 'DELETE', onDelete: deleteById },
              ]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PetsPage;
