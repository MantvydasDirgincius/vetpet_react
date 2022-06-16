import Button from '../../UI/Button/Button.jsx';
import { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import { Link } from 'react-router-dom';
import Input from '../../UI/Input/Input.jsx';
function MedicationsPage() {
  const [medData, setMedData] = useState([]);
  const [visibleMeds, setVisibleMeds] = useState([]);
  const [inputValue, setInputValue] = useState('');

  async function getMed() {
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/meds/');
    const data = await resp.json();
    setMedData(data);
    setVisibleMeds(data);
  }
  useEffect(() => {
    getMed();
  }, []);
  // mObj.name.toLowerCase().includes(inputValue.toLowerCase())
  function handleInput() {
    const filtered = medData.filter((mObj) => {
      if (!mObj.name) {
        return;
      }
      return mObj.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setVisibleMeds(filtered);
  }

  useEffect(() => {
    handleInput();
  }, [inputValue]);

  return (
    <div className='container'>
      <div className='hero'>
        <h1>Medications</h1>
        <Input
          type='text'
          placeholder='Search'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          name='search'
        />
        <div>
          <Link to='/addMeds'>
            <Button full>ADD MEDICATIONS</Button>
          </Link>
        </div>
      </div>
      {inputValue.length === 0 ? (
        <div className='grid'>
          {medData.map((obj) => (
            <Card key={obj.id} title={obj.name} sub1={obj.description} />
          ))}
        </div>
      ) : (
        <div className='grid'>
          {visibleMeds.map((obj) => (
            <Card key={obj.id} title={obj.name} sub1={obj.description} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MedicationsPage;
