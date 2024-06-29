import { Breadcrumb, Checkbox, Label } from "flowbite-react";
import { DressMakersCard } from "../components/DressMakers/DressMakersCard";

export const Dressmakers = () => {
  return (
    <>
      <div>
        <Breadcrumb aria-label="Default breadcrumb example" className="mt-4">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dressmakers</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="grid grid-cols-5 pb-4 mt-4 gap-4">
        <div className="flex flex-col col-span-1">
          <div className="w-full border-2 border-gray-300 rounded-md">
            <div className="flex items-center justify-between px-1 my-4">
              <p className="font-bold text-sm">Delivery location</p>
              <p className="text-[12px] text-blue-500 underline">Select all</p>
            </div>
            <div className="w-full h-[1px] bg-gray-200" />
            <div className="flex-col space-y-2 px-2 my-4">
              <div className="flex items-center gap-2">
                <Checkbox id="age" />
                <Label htmlFor="age">Balkan</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="age" />
                <Label htmlFor="age">Ashgabat</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="age" />
                <Label htmlFor="age">Mary</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="age" />
                <Label htmlFor="age">Lebap</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="age" />
                <Label htmlFor="age">Dasoguz</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="age" />
                <Label htmlFor="age">Ahal</Label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 col-span-4 gap-4">
          <DressMakersCard />
          <DressMakersCard />
          <DressMakersCard />
          <DressMakersCard />
          <DressMakersCard />
        </div>
      </div>
    </>
  );
};
