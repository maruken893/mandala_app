const FormSelect = ({ isEdit, label, name, value, handleChange, list }) => {
  if (isEdit && !list.map((item) => item.name).includes(value)) {
    list.push({ id: 9, name: value });
  }
  return (
    <div className="type-selector">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        className="type-item"
        onChange={handleChange}
        value={value}
      >
        {list.map(({ id, name }) => {
          return (
            <option key={id} value={name}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
