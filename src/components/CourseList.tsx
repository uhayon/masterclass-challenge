import { Course } from "@/interfaces/courses";
import CourseCard from "./CourseCard";

interface CourseListProps {
  courses: Course[];
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {courses.map((course) => (
        <CourseCard {...course} key={course.id} />
      ))}
    </div>
  );
}
