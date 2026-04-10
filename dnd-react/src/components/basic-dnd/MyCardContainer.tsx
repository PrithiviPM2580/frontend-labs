import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "../ui/card";

interface MyCardContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const MyCardContainer = ({ className, children }: MyCardContainerProps) => {
  return (
    <Card className={cn("border-t w-64 h-80", className)}>
      <CardHeader>Drop Here!</CardHeader>
      <CardContent className="border-t py-2">{children}</CardContent>
    </Card>
  );
};

export default MyCardContainer;
