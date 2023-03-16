import Wrapper from '../assets/wrappers/FormTextarea';

const FormTextarea = ({ name, label, value, handleChange, inputRef }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label || name}</label>
      <textarea
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
        ref={inputRef}
      />
    </Wrapper>
  );
};
export default FormTextarea;
