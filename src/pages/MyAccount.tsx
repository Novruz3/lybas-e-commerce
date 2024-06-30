import { Breadcrumb } from "flowbite-react";

export const MyAccount = () => {
  return (
    <>
      <div>
        <Breadcrumb aria-label="Default breadcrumb example" className="mt-4">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item>My accounts</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="mt-2">
        <p className="text-3xl font-bold">My account</p>
        
      </div>
    </>
  );
};
