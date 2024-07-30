"use client";

import { Course } from "@/interfaces/courses";
import CourseCard from "@components/CourseCard";
import { ToggleGroup, ToggleGroupItem } from "@components/ui/toggle-group";
import { useMemo, useState } from "react";

interface CourseListProps {
  courses: Course[];
}

export default function CourseList({ courses }: CourseListProps) {
  const [selectedToggle, setSelectedToggle] = useState("all");

  const filteredData = useMemo(() => {
    if (selectedToggle === "favorite") {
      return courses.filter((course) => course.favorite);
    }

    return courses;
  }, [courses, selectedToggle]);
  return (
    <div className="flex flex-col gap-3">
      <div>
        <ToggleGroup
          type="single"
          value={selectedToggle}
          onValueChange={setSelectedToggle}
        >
          <ToggleGroupItem value="all">All</ToggleGroupItem>
          <ToggleGroupItem value="favorite">Favorite</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {filteredData.map((course) => (
          <CourseCard {...course} key={course.id} />
        ))}
      </div>
    </div>
  );
}
