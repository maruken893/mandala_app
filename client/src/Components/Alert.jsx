const Alert = ({ message, alertType }) => {
  return <div className={`alert alert-${alertType}`}>{message}</div>;
};
export default Alert;
