"use client";

import { ErrorBoundary } from "@/interfaces/nextjs";
import { useEffect } from "react";
export default function GlobalErrorBoundary({ error, reset }: ErrorBoundary) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
