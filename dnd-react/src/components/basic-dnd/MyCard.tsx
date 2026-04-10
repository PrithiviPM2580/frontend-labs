import { cn } from "@/lib/utils";
import { Card, CardHeader } from "../ui/card";
import { useDraggable } from "@dnd-kit/core";
import type { CSSProperties } from "react";

interface MyCardProps {
  className?: string;
  children?: React.ReactNode;
}

const MyCard = ({ className, children }: MyCardProps) => {
  const { setNodeRef, listeners, attributes, transform } = useDraggable({
    id: "drag-1",
  });

  const style: CSSProperties | undefined = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Card
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={cn("w-32 h-32", className)}
      role="button"
      tabIndex={0}
    >
      <CardHeader className="border-b">Drop: {children}</CardHeader>
    </Card>
  );
};

export default MyCard;
