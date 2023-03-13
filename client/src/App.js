import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddTodo } from './components';

import { Auth, Landing, ProtectedRoute } from './page';
import {
  Chart,
  History,
  Layout,
  TodoLayout,
  TodoList,
  Profile,
} from './page/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Chart />} />
          <Route path="/" element={<TodoLayout />}>
            <Route path="add-todo" element={<AddTodo />} />
            <Route path="all-todo" element={<TodoList />} />
          </Route>
          <Route path="history" element={<History />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
