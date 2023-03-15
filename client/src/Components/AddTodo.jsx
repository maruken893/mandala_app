import Wrapper from '../assets/wrappers/AddTodo';
import { FormRow, DatePicker, Alert, LoadingSpinner } from '../components';
import { useAppContext } from '../context/AppContext';

const AddTodo = () => {
  const {
    isEdit,
    todoContent,
    todoDueDate,
    isLoading,
    showAlert,
    alertMessage,
    alertType,
    displayAlert,
    createTodo,
    cancelEditTodo,
    changeTodoState,
  } = useAppContext();

  const handleChange = (e) => {
    changeTodoState({ name: 'todoContent', data: e.target.value });
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
    createTodo({ content: todoContent, dueDate: todoDueDate });
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
          name="content"
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
