"use server";

import { ToastResponse } from "@/interfaces/toast";
import { revalidateTag } from "next/cache";

export async function toggleFavoriteStatus(
  courseId: number,
  isFavorite: boolean
): Promise<ToastResponse> {
  // Start a loading state for the page to show feedback
  if (isFavorite) {
    return removeCourseFromFavorites(courseId);
  }

  return addCourseToFavorites(courseId);
}

async function addCourseToFavorites(courseId: number): Promise<ToastResponse> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/${process.env.API_VERSION_SUFFIX}/favorite`,
    {
      method: "POST",
      headers: {
        accept: "",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        course_id: courseId,
        email: process.env.API_USER,
      }),
    }
  );

  if (!res.ok) {
    return {
      status: "error",
      message:
        "There was an unexpected error while adding the course to favorites",
    };
  }

  const data = await res.json();

  if (!data.id || data?.course_id !== courseId) {
    return {
      status: "error",
      message: "There was an error while adding the course to favorites",
    };
  }

  revalidateTag("courses");
  return {
    status: "success",
    message: "Course added to favorites successfully",
  };
  // Finish the loading state
}

async function removeCourseFromFavorites(
  courseId: number
): Promise<ToastResponse> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/${process.env.API_VERSION_SUFFIX}/favorite`,
    {
      method: "DELETE",
      headers: {
        accept: "",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        course_id: courseId,
        email: process.env.API_USER,
      }),
    }
  );

  if (!res.ok || res.status !== 204) {
    return {
      status: "error",
      message: "There was an error while removing the course from favorites",
    };
  }

  revalidateTag("courses");
  return {
    status: "success",
    message: "Course removed from favorites successfully",
  };
  // Finish the loading state
}
