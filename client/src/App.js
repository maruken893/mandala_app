import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Auth, Landing, ProtectedRoute } from './page';
import { Chart, History, Layout, Todo } from './page/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route path="/" element={<Chart />} />
          <Route path="todo" element={<Todo />} />
          <Route path="history" element={<History/>} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
