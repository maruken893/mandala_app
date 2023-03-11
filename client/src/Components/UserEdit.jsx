import { useState } from 'react';

import Wrapper from '../assets/wrappers/UserEdit';
import { Alert, FormRow, FormTextarea } from '../components';
import { useAppContext } from '../context/AppContext';

const UserEdit = ({ toggleUserEditing }) => {
  const { user, updateUser, showAlert, alertMessage, alertType } =
    useAppContext();
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
    updateUser(editInput);
    console.log(alertType);
  };

  return (
    <Wrapper>
      {showAlert && <Alert message={alertMessage} alertType={alertType} />}
      <form onSubmit={handleSubmit}>
        <FormRow
          name="name"
          value={editInput.name}
          type="text"
          handleChange={handleChange}
        />
        <FormTextarea
          name="bio"
          handleChange={handleChange}
          value={editInput.bio}
        />
        <div type="submit" className="button-container">
          <button className="btn btn-save" onClick={handleSubmit}>
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
