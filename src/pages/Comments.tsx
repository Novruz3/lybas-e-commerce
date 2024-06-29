import { Breadcrumb, Progress } from "flowbite-react";
import { Comment } from "../components/Comments/Comment";

export const Comments = () => {
  return (
    <div>
      <div>
        <Breadcrumb aria-label="Default breadcrumb example" className="mt-4">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Dresses</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Nike</Breadcrumb.Item>
          <Breadcrumb.Item>Comments</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="bg-gray-200 w-full rounded-md grid grid-cols-5 py-8 mt-4">
        <div className="col-span-1 flex-col px-8 text-gray-500 text-sm">
          <p className="font-bold text-7xl text-black">4.5</p>
          <p>4.5 Stars</p>
          <p>128 Comments</p>
        </div>
        <div className="col-span-4 flex-col">
          <div className="flex items-center w-full gap-4 px-6">
            <p>5</p>
            <Progress progress={45} className="w-[750px] bg-white border" />
          </div>
          <div className="flex items-center w-full gap-4 px-6">
            <p>4</p>
            <Progress progress={35} className="w-[750px] bg-white border" />
          </div>
          <div className="flex items-center w-full gap-4 px-6">
            <p>3</p>
            <Progress progress={40} className="w-[750px] bg-white border" />
          </div>
          <div className="flex items-center w-full gap-4 px-6">
            <p>2</p>
            <Progress progress={15} className="w-[750px] bg-white border" />
          </div>
          <div className="flex items-center w-full gap-4 px-6">
            <p>1</p>
            <Progress progress={20} className="w-[750px] bg-white border" />
          </div>
        </div>
      </div>
      <div className="my-8">
        <Comment />
      </div>
    </div>
  );
};
