import MyCard from "./MyCard";
import MyCardContainer from "./MyCardContainer";
import { DndContext } from "@dnd-kit/core";

const BasicDragDrop = () => {
  return (
    <div className="w-full h-dvh overflow-hidden relative">
      <DndContext>
        <MyCard className="absolute top-20 left-20 cursor-grab z-20">
          ID 1
        </MyCard>
        <MyCardContainer className="absolute top-120 left-120 z-10"></MyCardContainer>
      </DndContext>
    </div>
  );
};

export default BasicDragDrop;
