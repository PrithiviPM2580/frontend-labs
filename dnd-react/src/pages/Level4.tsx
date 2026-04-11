import { closestCenter, DndContext, type DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

const Level4 = () => {
  return (
    <div className="relative top-0 left-0 w-full h-svh overflow-hidden flex items-center justify-center">
      <Kanban />
    </div>
  );
};

function Kanban() {
  const [columns, setColumns] = useState({
    todo: ["Task 1", "Task 2"],
    inProgress: ["Task 3"],
    done: ["Task 4"],
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    if (active.id === over.id) return;

    setColumns((prev) => {
      const newColumns = { ...prev };

      let sourceCol = null;

      for (const key in prev) {
        if (prev[key].includes(active.id)) {
          sourceCol = key;
        }
      }

      if (!sourceCol) return prev;

      const items = [...newColumns[sourceCol]];

      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);

      if (oldIndex === -1 || newIndex === -1) return prev;

      items.splice(oldIndex, 1);
      items.splice(newIndex, 0, active.id);

      newColumns[sourceCol] = items;

      return newColumns;
    });
  }
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: "20px" }}>
        <Column title="Todo" items={columns.todo} />
        <Column title="In Progress" items={columns.inProgress} />
        <Column title="Done" items={columns.done} />
      </div>
    </DndContext>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="w-64 h-80 bg-[#f4f4f4] p-2.5 rounded-md">
      <h3 className="border-b-2 font-bold">{title}</h3>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableItem key={item} id={item} />
        ))}
      </SortableContext>
    </div>
  );
}

function SortableItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="p-2.5 my-1.5 bg-white border border-[#ccc] rounded-md cursor-grab active:cursor-grabbing"
    >
      {id}
    </div>
  );
}
export default Level4;
