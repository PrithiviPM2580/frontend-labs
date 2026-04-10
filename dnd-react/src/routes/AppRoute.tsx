import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DndKitBasic from "@/pages/DndKitBasic";
import DndKitSortable from "@/pages/DndKitSortable";
import DndKitKanban from "@/pages/DndKitKanban";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/basic" element={<DndKitBasic />} />
      <Route path="/sortable" element={<DndKitSortable />} />
      <Route path="/kanban" element={<DndKitKanban />} />
    </Routes>
  );
};

export default AppRoute;
