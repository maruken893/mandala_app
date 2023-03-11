const FormTextarea = ({ name, value, handleChange, inputRef }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <textarea
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
        ref={inputRef}
      />
    </div>
  );
};
export default FormTextarea;
