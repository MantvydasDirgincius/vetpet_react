import Button from '../../UI/Button/Button.jsx';
import { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import { Link } from 'react-router-dom';
function MedicationsPage() {
  const [medData, setMedData] = useState([]);

  async function getMed() {
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/meds/');
    const data = await resp.json();

    setMedData(data);
  }
  useEffect(() => {
    getMed();
  }, []);

  return (
    <div className='container'>
      <div className='hero'>
        <h1>Medications</h1>
        <div>
          <Link to='/addMeds'>
            <Button full>ADD MEDICATIONS</Button>
          </Link>
        </div>
      </div>
      <div className='grid'>
        {medData.map((obj) => (
          <Card key={obj.id} title={obj.name} sub1={obj.description} />
        ))}
      </div>
    </div>
  );
}

export default MedicationsPage;
