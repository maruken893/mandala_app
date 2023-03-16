import Wrapper from '../assets/wrappers/AddTodo';
import {
  FormRow,
  DatePicker,
  Alert,
  LoadingSpinner,
  FormSelect,
} from '../components';
import { useAppContext } from '../context/AppContext';

const AddTodo = () => {
  const {
    isEdit,
    todoId,
    todoContent,
    todoDueDate,
    todoType,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoContent) {
      displayAlert({ msg: 'Todo content is not provided', type: 'failed' });
      return;
    }
    if (isEdit) {
      updateTodo({
        id: todoId,
        content: todoContent,
        dueDate: todoDueDate || new Date(),
      });
    } else {
      createTodo({
        content: todoContent,
        dueDate: todoDueDate || new Date(),
        type: todoType || todoTypes[0],
      });
    }
    cancelEditTodo();
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
        <DatePicker
          name="dueDate"
          label="Due Date"
          value={todoDueDate ? new Date(todoDueDate) : new Date()}
          handleChangeDate={handleChangeDate}
        />
        {/* <div className="flex"> */}
        <FormSelect
          label="type"
          name="todoType"
          value={todoType}
          handleChange={handleChange}
          list={todoTypes}
        />
        {/* </div> */}
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
