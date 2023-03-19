import { useEffect } from 'react';
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AddTodo';
import {
  FormRow,
  DatePicker,
  Alert,
  LoadingSpinner,
  FormSelect,
  FormTextarea,
} from '../components';
import { useAppContext } from '../context/AppContext';
import { fetchTodos } from '../utils/api/todo';

const AddTodo = () => {
  const {
    isEdit,
    todoId,
    todoContent,
    todoDueDate,
    todoType,
    todoMemo,
    missions,
    isLoading,
    showAlert,
    alertMessage,
    alertType,
    displayAlert,
    createTodo,
    updateTodo,
    cancelEditTodo,
    changeTodoState,
  } = useAppContext();
  const { setTodos, setCurrentPage, setTodoCount } = useOutletContext();
  const navigate = useNavigate();

  if (missions.length <= 0) {
    console.log('a')
    displayAlert({
      msg: "Can't create a Todo because no goals have been set yet",
      type: 'failed',
    });
    return <Navigate to={'/'} />;
  }

  const todoTypes = missions[4]
    .filter((mission) => mission.goalId === undefined && mission.cont)
    .map((mission) => ({ id: mission.missionPos, name: mission.cont }));
  todoTypes.push({ name: 'Other', id: -1 });

  const handleChange = (e) => {
    changeTodoState({ name: e.target.name, data: e.target.value });
  };

  const handleChangeDate = (date) => {
    changeTodoState({ name: 'todoDueDate', data: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todoContent) {
      displayAlert({ msg: 'Todo content is not provided', type: 'failed' });
      return;
    }
    if (isEdit) {
      await updateTodo({
        id: todoId,
        content: todoContent,
        dueDate: todoDueDate || new Date(),
        type: todoType,
        memo: todoMemo || '',
      });
    } else {
      await createTodo({
        content: todoContent,
        dueDate: todoDueDate || new Date(),
        type: todoType || todoTypes[0].name,
        memo: todoMemo || '',
      });
    }
    const INIT_PAGE = 0;
    const { todos, todoCount } = await fetchTodos({ page: INIT_PAGE });
    setTodos(todos);
    setTodoCount(todoCount);
    setCurrentPage(INIT_PAGE);
    cancelEditTodo();
    navigate('/todo/all');
  };

  const handleCancel = () => {
    cancelEditTodo();
  };

  return (
    <Wrapper>
      <p className="title">{isEdit ? 'Edit Todo' : 'Add Todo'}</p>
      {showAlert && <Alert message={alertMessage} alertType={alertType} />}
      <form onSubmit={handleSubmit}>
        <FormRow
          name="todoContent"
          label="Todo"
          value={todoContent}
          type="text"
          handleChange={handleChange}
        />
        <div className="flex">
          <DatePicker
            name="dueDate"
            label="Due Date"
            value={todoDueDate ? new Date(todoDueDate) : new Date()}
            handleChangeDate={handleChangeDate}
          />
          <FormSelect
            label="type"
            name="todoType"
            value={todoType}
            handleChange={handleChange}
            list={todoTypes}
            isEdit={isEdit}
          />
        </div>
        <FormTextarea
          name="todoMemo"
          label="Memo"
          value={todoMemo}
          handleChange={handleChange}
        />
        {isLoading ? (
          <div className="loading">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="btn-container">
            <button type="onSubmit" className="btn btn-save">
              {isEdit ? 'Edit' : 'Add'}
            </button>
            <button
              type="button"
              className="btn btn-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </Wrapper>
  );
};
export default AddTodo;
