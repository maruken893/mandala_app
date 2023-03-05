import { useState } from 'react';

import Wrapper from '../assets/wrappers/UserEdit';
import { FormRow } from '../components';
import { useAppContext } from '../context/AppContext';

const UserEdit = ({ toggleUserEditing }) => {
  const { user } = useAppContext();
  const [editInput, setEditInput] = useState({
    name: user.name,
    bio: user.bio || '',
  });

  const handleChange = (e) => {
    setEditInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(editInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('save user');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormRow
          name="name"
          value={editInput.name}
          type="text"
          handleChange={handleChange}
        />
        <div className="bio-form">
          <label htmlFor="bio">biography</label>
          <textarea
            name="bio"
            id="bio"
            onChange={handleChange}
            value={editInput.bio}
          />
        </div>
        <div type="submit" className="button-container">
          <button className="btn btn-save" onClick={toggleUserEditing}>
            Save
          </button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={toggleUserEditing}
          >
            Cancel
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default UserEdit;
