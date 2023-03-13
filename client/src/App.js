import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
          <Route path="/todo" element={<TodoLayout />}>
            <Route path="" element={<Navigate to="all" />} />
            <Route path="all" element={<TodoList />} />
            <Route path="add" element={<AddTodo />} />
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
