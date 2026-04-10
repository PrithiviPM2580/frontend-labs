import { cn } from "@/lib/utils";
import { Card, CardHeader } from "../ui/card";

interface MyCardProps {
  className?: string;
  children?: React.ReactNode;
}

const MyCard = ({ className, children }: MyCardProps) => {
  return (
    <Card className={cn("w-32 h-32", className)}>
      <CardHeader className="border-b">Drop: {children}</CardHeader>
    </Card>
  );
};

export default MyCard;
