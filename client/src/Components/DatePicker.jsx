import DatePickerLib from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ name, label, value, handleChangeDate }) => {
  return (
    <div className="date-picker">
      <label htmlFor={name}>{label}</label>
      <DatePickerLib
        showIcon
        dateFormat="yyyy/MM/dd"
        id={name}
        selected={value || new Date()}
        onChange={handleChangeDate}
      />
    </div>
  );
};
export default DatePicker;
