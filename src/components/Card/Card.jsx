import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import styles from './GridCard.module.scss';

function Card({ title, sub1, sub2, btn, id }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p>{sub1}</p>
      <p>{sub2}</p>
      {btn === undefined ? (
        ''
      ) : (
        <div>
          {btn.map((btn, i) =>
            btn.link ? (
              <Link key={i} to={`/pets/${id}/${btn.name}`} state={btn.name}>
                <Button key={id} onClick={btn.onDelete && btn.onDelete} id={id} full={btn.full}>
                  {btn.text}
                </Button>
              </Link>
            ) : (
              <Button key={i + 1} onClick={btn.onDelete && btn.onDelete} id={id} full={btn.full}>
                {btn.text}
              </Button>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
