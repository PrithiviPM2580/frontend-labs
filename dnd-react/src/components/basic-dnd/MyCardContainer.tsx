import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "../ui/card";

interface MyCardContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const MyCardContainer = ({ className, children }: MyCardContainerProps) => {
  return (
    <Card className={cn("border-t w-48 h-48", className)}>
      <CardHeader>Drop Here!</CardHeader>
      <CardContent className="border-t py-2">{children}</CardContent>
    </Card>
  );
};

export default MyCardContainer;
