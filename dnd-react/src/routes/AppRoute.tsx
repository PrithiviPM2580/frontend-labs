import { Route, Routes } from "react-router-dom";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/about" element={<div>About</div>} />
    </Routes>
  );
};

export default AppRoute;
