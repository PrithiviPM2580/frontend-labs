import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DndKitBasic from "@/pages/DndKitBasic";
import DndKitSortable from "@/pages/DndKitSortable";
import DndKitKanban from "@/pages/DndKitKanban";
import Level1 from "@/pages/Level1";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/basic" element={<DndKitBasic />} />
      <Route path="/sortable" element={<DndKitSortable />} />
      <Route path="/kanban" element={<DndKitKanban />} />
      <Route path="/level1" element={<Level1 />} />
    </Routes>
  );
};

export default AppRoute;
