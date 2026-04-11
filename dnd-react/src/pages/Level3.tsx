import { DRAGABBLE_GRID_ITEMS, type DraggableGridItem } from "@/constants";
import { cn } from "@/lib/utils";
import { closestCenter, DndContext, type DragEndEvent } from "@dnd-kit/core";
import {
  rectSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";

const Level3 = () => {
  return (
    <div className="absolute top-0 left-0  w-full bg-emerald-900 h-svh flex items-center justify-center overflow-hidden">
      <DragAndDrop />
    </div>
  );
};

function DragAndDrop() {
  const [items, setItems] = useState<DraggableGridItem[]>(DRAGABBLE_GRID_ITEMS);
  function handleDragEnd(event: DragEndEvent) {}
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-[repeat(3,180px)] place-content-center gap-5 w-150 h-200 bg-white">
          {items.map((item) => (
            <SortableItem key={item.id} item={item} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

function SortableItem({ item }: { item: DraggableGridItem }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "h-full w-full py-8 rounded-lg text-center text-white font-bold text-base cursor-grab active:cursor-grabbing",
        item.color,
      )}
    >
      {item.content}
    </div>
  );
}

export default Level3;
