import { useState } from 'react';

import { useAppContext } from '../context/AppContext';
import { FormRow, FormSelect } from '../components';

const initState = { name: '', id: 1 };

const CharWithoutGoal = () => {
  const { createGoal } = useAppContext();
  const [goal, setGoal] = useState(initState);

  const list = [
    { id: 1, name: 'スポーツ' },
    { id: 2, name: '受験' },
    { id: 3, name: '就職' },
    { id: 4, name: 'その他' },
  ];

  const handleChange = (e) => {
    setGoal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createGoal({ goal: goal.name, goalGenreId: Number(goal.id) });
  };

  const handleCancel = () => {
    setGoal({ ...initState });
  };

  return (
    <div className="goal-null">
      <div className="message-container">
        <p className="welcome">Welcome to Mandala! </p>
        <p>
          Goal have not been set yet. <br /> Let's set your goal!{' '}
        </p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <FormRow
            name="name"
            value={goal.name}
            type="text"
            handleChange={handleChange}
          />
          <FormSelect
            label="Goal Type"
            name="id"
            value={goal.id}
            handleChange={handleChange}
            list={list}
          />
          <div className="btn-container">
            <button type="submit" className="btn btn-save">
              Create
            </button>
            <button
              type="button"
              className="btn btn-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CharWithoutGoal;
