const FormTextarea = ({ name, label, value, handleChange, inputRef }) => {
  return (
    <div>
      <label htmlFor={name}>{label || name}</label>
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
