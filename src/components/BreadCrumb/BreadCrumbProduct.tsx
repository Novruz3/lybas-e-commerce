import { Breadcrumb } from "flowbite-react"

export const BreadCrumbProduct = () => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="mt-4">
      <Breadcrumb.Item href="#">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Dresses
      </Breadcrumb.Item>
      <Breadcrumb.Item>Nike</Breadcrumb.Item>
    </Breadcrumb>
  )
}
