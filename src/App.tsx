// App.tsx
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (


      <Routes>
        <Route path="/tehnosysteemid.ee" element={<MainPage />} />
        <Route path="/tehnosysteemid.ee/contact" element={<ContactPage />} />
      </Routes>

  );
}

export default App;
