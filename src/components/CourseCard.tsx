import { Course } from "@/interfaces/courses";
import Image from "next/image";
import React from "react";

export default function CourseCard({
  instructor_image_url,
  instructor_name,
  title,
}: Course) {
  return (
    <div className="border border-gray-500 flex flex-col rounded-lg">
      <Image
        src={instructor_image_url}
        width={200}
        height={200}
        alt={instructor_name}
        className="w-full rounded-t-lg"
      />
      <div className="py-2 px-4">
        <h2 className="text-lg font-semibold">{instructor_name}</h2>
        <h3 className="text-md capitalize">{title}</h3>
      </div>
    </div>
  );
}
