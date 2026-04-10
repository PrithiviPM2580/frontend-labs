import { useState } from "react";
import MyCard from "./MyCard";
import MyCardContainer from "./MyCardContainer";
import { DndContext, type UniqueIdentifier } from "@dnd-kit/core";

const BasicDragDrop = () => {
  const [overId, setOverId] = useState<UniqueIdentifier>();
  return (
    <div className="w-full h-dvh overflow-hidden relative">
      <DndContext onDragEnd={(event) => setOverId(event.over?.id)}>
        {overId ? null : (
          <MyCard className="absolute top-20 left-20 cursor-grab z-20">
            ID 1
          </MyCard>
        )}
        <MyCardContainer className="absolute top-120 left-120 z-10">
          {overId ? (
            <MyCard className="absolute top-20 left-20 cursor-grab z-20">
              ID 1
            </MyCard>
          ) : null}
        </MyCardContainer>
      </DndContext>
    </div>
  );
};

export default BasicDragDrop;
