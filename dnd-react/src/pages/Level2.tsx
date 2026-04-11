import { DRAGABBLE_ITEMS, type DraggableItem } from "@/constants";
import { cn } from "@/lib/utils";
import { closestCenter, DndContext, type DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

const Level2 = () => {
  return (
    <div className="absolute top-0 left-0  w-full bg-fuchsia-900 h-svh flex items-center justify-center overflow-hidden">
      <DragAndDrop />
    </div>
  );
};

function DragAndDrop() {
  const [items, setItems] = useState<DraggableItem[]>(DRAGABBLE_ITEMS);
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item.id === active.id);
        const newIndex = prevItems.findIndex((item) => item.id === over.id);

        if (oldIndex < 0 || newIndex < 0) return prevItems;

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
  return (
    <div className="w-180 h-120 bg-white flex  gap-8 items-center justify-between p-8 rounded-lg">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
          {items.map((item) => (
            <Sortable key={item.id} item={item} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

function Sortable({ item }: { item: DraggableItem }) {
  const { setNodeRef, listeners, attributes, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
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

export default Level2;
