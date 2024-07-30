"use client";

import { toggleFavoriteStatus } from "@/actions/favorite";
import { Course } from "@/interfaces/courses";
import { clsx } from "clsx";
import Image from "next/image";
import React, { useCallback } from "react";
import { useToast } from "@components/ui/use-toast";

export default function CourseCard({
  instructor_image_url,
  instructor_name,
  title,
  favorite,
  id,
}: Course) {
  const { toast } = useToast();

  // Currently the toast jumps before the UI update, need to fix that.
  const handleCardClick = useCallback(async () => {
    const response = await toggleFavoriteStatus(id, favorite);

    toast({
      title: response.status,
      description: response.message,
      className: response.status === "success" ? "bg-green-200" : "bg-red-200",
    });
  }, [id, favorite, toast]);
  return (
    <button
      className={clsx("border flex flex-col rounded-lg overflow-hidden", {
        "border-gray-500": !favorite,
        "border-yellow-500 bg-yellow-100": favorite,
      })}
      onClick={handleCardClick}
    >
      <Image
        src={instructor_image_url}
        width={200}
        height={200}
        alt={instructor_name}
        className="w-full"
      />
      <div className="py-2 px-4 h-full w-full flex flex-col gap-4">
        <div className="flex flex-col gap-0 items-start">
          <h2 className="text-lg font-semibold text-left">{instructor_name}</h2>
          <h3 className="text-md capitalize text-left">{title}</h3>
        </div>
        <div className="mt-auto flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 47.94 47.94"
            xmlSpace="preserve"
            className={clsx(" h-8 w-8", {
              "fill-yellow-500 stroke-yellow-500": favorite,
              "fill-none stroke-black": !favorite,
            })}
          >
            <path
              d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
          c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
          c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
          c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
          c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
          C22.602,0.567,25.338,0.567,26.285,2.486z"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
