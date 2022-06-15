import styles from './button.module.scss';

function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick ? () => props.onClick(props.id) : null}
      className={props.full ? `${styles.btnFull}` : `${styles.btn}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
