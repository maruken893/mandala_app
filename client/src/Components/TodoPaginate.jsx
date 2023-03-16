import ReactPaginate from 'react-paginate';

import { fetchTodos } from '../utils/api/todo';

const TodoPaginate = ({
  setTodos,
  setTodoCount,
  currentPage,
  setCurrentPage,
  todoCount,
}) => {
  const TODO_PER_PAGE = 12;
  const TOTAL_PAGE = Math.floor(todoCount / TODO_PER_PAGE) + 1;
  const handlePageClick = async (e) => {
    const { todos, todoCount } = await fetchTodos({ page: e.selected });
    setTodos(todos);
    setTodoCount(todoCount);
    setCurrentPage(e.selected);
  };

  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={TOTAL_PAGE}
      initialPage={currentPage}
      forcePage={currentPage}
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
    />
  );
};
export default TodoPaginate;
