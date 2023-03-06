const FormSelect = ({ label, name, value, handleChange, list }) => {
  return (
    <div className="type-selector">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        className="type-item"
        onChange={handleChange}
        // value={value}
      >
        {list.map(({ id, name }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
