import { Breadcrumb } from "flowbite-react";

export const BreadCrumb = () => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="mt-4">
      <Breadcrumb.Item href="#">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>Dresses</Breadcrumb.Item>
    </Breadcrumb>
  );
};
