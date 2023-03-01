import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Auth, Landing } from './page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
