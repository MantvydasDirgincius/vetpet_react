import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Card from '../../Card/Card';
import Button from '../../UI/Button/Button';
import styles from './SoloPet.module.scss';
function SoloPet() {
  const [logs, setLogs] = useState([]);

  const { id, name } = useParams();

  useEffect(() => {
    getLogs(id);
  }, [id]);

  async function getLogs(id) {
    const resp = await fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${id}`);
    const data = await resp.json();

    setLogs(data);
  }
  return (
    <div className='container'>
      <div className='hero'>
        <h1>{name}: Health Records</h1>
        <div>
          <Link to='/addPres'>
            <Button full>ADD PRESSCRIPTIONS</Button>
          </Link>
          <Link to={`/addLogs/${id}`}>
            <Button full>ADD LOGS</Button>
          </Link>
        </div>
      </div>
      <div className={styles.display}>
        <h2>Display: </h2>
        <Button full>LOGS</Button>
        <Button full>PRESSCRIPTIONS</Button>
      </div>
      {logs.length === 0 ? (
        <h2>No Health Records </h2>
      ) : (
        <div className='grid'>
          {logs.map((obj, i) => (
            <Card
              key={i}
              title={obj.status}
              sub1={obj.description}
              sub2={new Date(obj.dob).toDateString()}
              id={obj.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SoloPet;
