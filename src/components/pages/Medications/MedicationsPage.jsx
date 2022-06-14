import Button from '../../UI/Button/Button.jsx';
import { useEffect, useState } from 'react';
import Card from '../../Card/Card';
function MedicationsPage() {
  const [medData, setMedData] = useState([]);

  async function getMed() {
    const resp = await fetch('./medsdb.json');
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
          <Button full>ADD MEDICATIONS</Button>
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
