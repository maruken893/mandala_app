import { useState } from 'react';

import Wrapper from '../assets/wrappers/AddTodo';
import { FormRow, DatePicker, Alert, LoadingSpinner } from '../components';
import { useAppContext } from '../context/AppContext';

const initTodo = {
  content: '',
  dueDate: null,
};

const AddTodo = () => {
  const [todo, setTodo] = useState({ initTodo });
  const {
    isLoading,
    showAlert,
    alertMessage,
    alertType,
    displayAlert,
    createTodo,
  } = useAppContext();

  const handleChange = (e) => {
    setTodo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeDate = (date) => {
    setTodo((prev) => ({
      ...prev,
      dueDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.content) {
      displayAlert({ msg: 'Todo content is not provided', type: 'failed' });
      return;
    }
    createTodo({ content: todo.content, dueDate: todo.dueDate });
    setTodo(initTodo);
  };

  return (
    <Wrapper>
      <p className="title">Add Todo</p>
      {showAlert && <Alert message={alertMessage} alertType={alertType} />}
      <form onSubmit={handleSubmit}>
        <FormRow
          name="content"
          label="Todo"
          value={todo.content}
          type="text"
          handleChange={handleChange}
        />
        <DatePicker
          name="dueDate"
          label="Due Date"
          value={todo.dueDate}
          handleChangeDate={handleChangeDate}
        />
        {/* <div className="flex"> */}
        {/* <FormSelect
            label="type"
            name="missionPos"
            value={todo.missionPos}
            handleChange={handleChange}
            list={todoTypes}
          /> */}
        {/* </div> */}
        {isLoading ? (
          <div className="loading">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="btn-container">
            <button type="onSubmit" className="btn btn-save">
              Add Todo
            </button>
            <button type="button" className="btn btn-cancel">
              Cancel
            </button>
          </div>
        )}
      </form>
    </Wrapper>
  );
};
export default AddTodo;
