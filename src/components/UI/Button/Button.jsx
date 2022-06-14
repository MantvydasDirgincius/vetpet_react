import './button.css';

function Button(props) {
  return (
    <button onClick={() => props.onClick(props.id)} className={props.full ? 'btnFull' : 'btn'}>
      {props.children}
    </button>
  );
}

export default Button;
