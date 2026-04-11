import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DndKitBasic from "@/pages/DndKitBasic";
import DndKitSortable from "@/pages/DndKitSortable";
import DndKitKanban from "@/pages/DndKitKanban";
import Level1 from "@/pages/Level1";
import Level2 from "@/pages/Level2";
import Level3 from "@/pages/Level3";
import Level4 from "@/pages/Level4";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/basic" element={<DndKitBasic />} />
      <Route path="/sortable" element={<DndKitSortable />} />
      <Route path="/kanban" element={<DndKitKanban />} />
      <Route path="/level1" element={<Level1 />} />
      <Route path="/level2" element={<Level2 />} />
      <Route path="/level3" element={<Level3 />} />
      <Route path="/level4" element={<Level4 />} />
    </Routes>
  );
};

export default AppRoute;
