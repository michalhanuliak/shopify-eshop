"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useId } from "react";
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
  productUrl: string;
  isPriority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imageUrl,
  productUrl,
  isPriority = false,
}) => {
  const router = useRouter();

  const handleAddToCart = () => {
    alert(`Added ${title} to cart`);
  };

  const handleBuyNow = () => {
    alert(`Buying ${title}`);
  };

  const handleRedirect = () => {
    router.push(productUrl);
  };

  const { pressProps: pressPropsRedirect } = usePress({
    onPress: handleRedirect,
  });

  const { pressProps: pressPropsAddToCart } = usePress({
    onPress: handleAddToCart,
  });

  const { pressProps: pressPropsBuyNow } = usePress({
    onPress: handleBuyNow,
    isDisabled: true,
  });

  const titleId = useId();

  return (
    <Card
      className="hover:shadow-lg hover:cursor-pointer focus:outline-blue-500"
      tabIndex={0}
      aria-labelledby={titleId}
      aria-description="View product details"
      {...pressPropsRedirect}
    >
      <CardHeader>
        {imageUrl && (
          <div className="bg-gray-100 rounded-lg">
            <Image
              src={imageUrl}
              alt={title}
              className="mx-auto brightness-[0.95] object-contain"
              width={256}
              height={256}
              priority={isPriority}
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

      <CardFooter className="grid grid-cols-2 gap-2 position-relative">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="inline-block w-full" aria-disabled="true">
                <Button
                  variant="outline"
                  className="w-full"
                  disabled
                  {...pressPropsBuyNow}
                >
                  Buy now
                </Button>
              </span>
            </TooltipTrigger>

            <TooltipContent>
              <p>Not available at the moment</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button {...pressPropsAddToCart}>Add to cart</Button>
      </CardFooter>
    </Card>
  );
};
