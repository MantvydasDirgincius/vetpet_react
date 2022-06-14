import Button from '../UI/Button/Button';
import './GridCard.css';

function Card({ title, sub1, sub2, btn, id, onClick }) {
  return (
    <div className='card'>
      <h2 className='cardTitle'>{title}</h2>
      <p>{sub1}</p>
      <p>{sub2}</p>
      {btn.length === 0 ? (
        ''
      ) : (
        <div>
          {btn.map((btn, i) => (
            <Button key={i} onClick={onClick} id={id} full={btn.full}>
              {btn.text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
