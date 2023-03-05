import { useState } from 'react';

import { useAppContext } from '../context/AppContext';

import Wrapper from '../assets/wrappers/Auth';
import { Alert, FormRow, Logo, LoadingSpinner } from '../components';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Auth = () => {
  const [state, setState] = useState(initialState);
  const {
    isLoading,
    showAlert,
    alertMessage,
    alertType,
    displayAlert,
    registerUser,
    login,
  } = useAppContext();

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.email || !state.password || (!state.isMember && !state.name)) {
      displayAlert({ msg: 'Please provide all values', type: 'failed' });
      return;
    }
    if (state.isMember) {
      login({ user: { email: state.email, password: state.password } });
    } else {
      registerUser({
        user: {
          name: state.name,
          email: state.email,
          password: state.password,
        },
      });
    }
  };

  const togglePage = () => {
    setState((prev) => ({ ...prev, isMember: !prev.isMember }));
  };

  return (
    <Wrapper>
      <div className="form-container">
        <Logo width="170px" />
        <form onSubmit={handleSubmit}>
          <h2>{state.isMember ? 'Login' : 'Register'}</h2>
          {showAlert && <Alert message={alertMessage} alertType={alertType} />}
          {!state.isMember && (
            <FormRow
              name="name"
              value={state.name}
              type="name"
              handleChange={handleChange}
            />
          )}
          <FormRow
            name="email"
            value={state.email}
            type="email"
            handleChange={handleChange}
          />
          <FormRow
            name="password"
            value={state.password}
            type="password"
            handleChange={handleChange}
          />
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {' '}
              <button type="submit" className="btn btn-wide">
                submit
              </button>
              <br />
              <br />
              <button type="submit" className="btn btn-wide btn-light-green">
                Demo User
              </button>
              <p>
                {state.isMember
                  ? "Don't have an account? "
                  : 'Have an account already? '}
                <button
                  type="button"
                  onClick={togglePage}
                  className="member-btn"
                >
                  {state.isMember ? 'Register' : 'Log in'}
                </button>
              </p>
            </>
          )}
        </form>
      </div>
    </Wrapper>
  );
};

export default Auth;
