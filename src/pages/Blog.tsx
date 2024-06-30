import { Breadcrumb } from "flowbite-react"
import { BlogCard } from "../components/Blogs/BlogCard"

export const Blog = () => {
  return (
    <>
      <div>
        <Breadcrumb aria-label="Default breadcrumb example" className="mt-4">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item>Blog</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 mt-4 mb-16">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </>
  )
}
