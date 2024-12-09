"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MouseEvent, useId } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import { usePress } from "@react-aria/interactions";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: string;
  imageUrl?: string;
  handle: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imageUrl,
  handle,
}) => {
  const router = useRouter();

  const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(`Added ${title} to cart`);
  };

  const handleRedirect = () => {
    router.push(`/products/${handle}`);
  };

  const { pressProps } = usePress({
    onPress: handleRedirect,
  });

  const titleId = useId();

  return (
    <Card
      className="hover:shadow-lg hover:cursor-pointer focus:outline-blue-500"
      onClick={handleRedirect}
      tabIndex={0}
      aria-labelledby={titleId}
      aria-description="View product details"
      {...pressProps}
    >
      <CardHeader>
        {imageUrl && (
          <div className="bg-gray-100 rounded-lg">
            <Image
              src={imageUrl}
              alt={title}
              className="mx-auto brightness-[0.95] object-contain w-auto h-auto"
              width={180}
              height={150}
              priority
            />
          </div>
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <CardTitle className="text-gray-500 text-md font-medium" id={titleId}>
          {title}
        </CardTitle>

        <p className="text-gray-600 font-semibold">{price}</p>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="w-full"
                disabled
                aria-disabled
              >
                Buy now
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <p>Not available at the moment</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button onClick={handleAddToCart}>Add to cart</Button>
      </CardFooter>
    </Card>
  );
};
