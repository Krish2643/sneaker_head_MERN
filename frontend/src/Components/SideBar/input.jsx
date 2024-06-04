const Input = ({ handleChange, value, title, name}) => {  
    return (
      <label className="radio">
        <input className="radio"  onChange={handleChange} type="radio" value={value} name={name} />
        {title}
      </label>
    );
  };
  
  export default Input;