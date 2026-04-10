import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useDroppable } from "@dnd-kit/core";

interface MyCardContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const MyCardContainer = ({ className, children }: MyCardContainerProps) => {
  const { setNodeRef, isOver } = useDroppable({ id: "my-droppable-1" });

  return (
    <Card
      ref={setNodeRef}
      className={cn(
        "border-t w-64 h-80",
        isOver && "border-red-500",
        className,
      )}
    >
      <CardHeader>Drop Here!</CardHeader>
      <CardContent className="border-t py-2">{children}</CardContent>
    </Card>
  );
};

export default MyCardContainer;
