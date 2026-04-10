import { useState } from "react";
import { closestCenter, DndContext, type DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DRAGABBLE_ITEMS, type DraggableItem } from "@/constants/index";
import { cn } from "@/lib/utils";

const Level1 = () => {
  return (
    <div className="absolute top-0 left-0  w-full bg-amber-900 h-svh flex items-center justify-center overflow-hidden">
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
        const oldIndex = prevItems.findIndex(
          (item) => item.id === String(active.id),
        );
        const newIndex = prevItems.findIndex(
          (item) => item.id === String(over.id),
        );

        if (oldIndex < 0 || newIndex < 0) return prevItems;

        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  }
  return (
    <div className="w-120 h-154 bg-white flex flex-col gap-8 items-center justify-between p-8 rounded-lg">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <SortableItem key={item.id} item={item} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

function SortableItem({ item }: { item: DraggableItem }) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className={cn(
        "w-full py-8 rounded-lg text-center text-white font-bold text-base cursor-grab active:cursor-grabbing",
        item.color,
      )}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {item.content}
    </div>
  );
}

export default Level1;
