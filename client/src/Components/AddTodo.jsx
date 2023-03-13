import { useState } from 'react';

import Wrapper from '../assets/wrappers/AddTodo';
import { FormRow, DatePicker, FormSelect } from '../components';
import { useAppContext } from '../context/AppContext';

const initTodo = {
  content: '',
  dueDate: null,
  missionPos: null,
};

const AddTodo = () => {
  const [todo, setTodo] = useState({ initTodo });
  const { missions } = useAppContext();
  const todoTypes = missions[4]
    .filter((mission) => mission.goalId === undefined && mission.cont !== '')
    .map((mission) => ({
      id: mission.missionPos,
      name: mission.cont,
    }));
  todoTypes.push({ id: -1, name: 'Other' });

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

  return (
    <Wrapper>
      <p className="title">Add Todo</p>
      <form>
        <FormRow
          name="content"
          label="Todo"
          value={todo.content}
          type="text"
          handleChange={handleChange}
        />
        <div className="flex">
          <FormSelect
            label="type"
            name="missionPos"
            value={todo.missionPos}
            handleChange={handleChange}
            list={todoTypes}
          />
          <DatePicker
            name="dueDate"
            label="Due Date"
            value={todo.dueDate}
            handleChangeDate={handleChangeDate}
          />
        </div>
        <div className="btn-container">
          <button type="onSubmit" className="btn btn-save">
            Add Todo
          </button>
          <button type="button" className="btn btn-cancel">
            Cancel
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddTodo;
