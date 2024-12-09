"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex h-screen w-full items-center justify-center flex-col gap-4">
      <h2 className="text-2xl">Something went wrong!</h2>

      <Button onClick={reset} className="w-fit">
        Try again
      </Button>
    </div>
  );
}
