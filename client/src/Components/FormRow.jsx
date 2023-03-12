const FormRow = ({ name, label, value, type, handleChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name}>{label || name}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default FormRow;
