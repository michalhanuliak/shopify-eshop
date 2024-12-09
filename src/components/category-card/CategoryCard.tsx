import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { usePress } from "@react-aria/interactions";
import { ArrowUpRight } from "lucide-react";
import { useId } from "react";

export type CategoryCardProps = {
  title: string;
  onClick: () => void;
  description: string;
};

// Fake description for the example
const EXAMPLE_DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et egestas purus. Sed nec nunc nec nunc.`;

export function CategoryCard({
  title,
  description,
  onClick,
}: CategoryCardProps) {
  const titleId = useId();
  const descriptionId = useId();

  const { pressProps } = usePress({
    onPress: onClick,
  });

  return (
    <Card
      className="hover:shadow-lg hover:cursor-pointer focus:outline-blue-500 flex flex-col"
      tabIndex={0}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      role="group"
      {...pressProps}
    >
      <CardHeader>
        <div className="flex justify-between ">
          <CardTitle className="text-3xl font-medium" id={titleId}>
            {title}
          </CardTitle>

          <div className="flex align-center justify-center border rounded-full p-2 h-fit">
            <ArrowUpRight />
          </div>
        </div>
      </CardHeader>

      <CardContent className="mt-auto">
        <p className="text-gray-500" id={descriptionId}>
          {description || EXAMPLE_DESCRIPTION}
        </p>
      </CardContent>
    </Card>
  );
}
