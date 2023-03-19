import Wrapper from '../assets/wrappers/Alert';

const Alert = ({ message, alertType }) => {
  return (
    <Wrapper>
      <div className={`alert alert-${alertType}`}>{message}</div>
    </Wrapper>
  );
};
export default Alert;
