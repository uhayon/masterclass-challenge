import CourseList from "@/components/CourseList";
import { Course } from "@/interfaces/courses";

async function getData(): Promise<Course[]> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/${process.env.API_VERSION_SUFFIX}/courses?email=${process.env.API_USER}`,
    {
      next: {
        revalidate: 3600,
        tags: ["courses"],
      },
      headers: {
        accept: "",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Unexpected Error Ocurred. Please contact an admin");
  }

  return res.json();
}

// Currently there's a hydration error that needs some reviewing
export default async function CoursesPage() {
  const data = await getData();

  return (
    <div className="p-4">
      <CourseList courses={data} />;
    </div>
  );
}
