import './Button.css';

const Button = ({ onSubmit }) => {
  return (
    <button type="submit" className="Button" onClick={onSubmit}>
      Load more
    </button>
  );
};

export default Button;
