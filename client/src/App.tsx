import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
