import { Breadcrumb } from "flowbite-react";
import { GoLocation } from "react-icons/go";
import FilterDresses from "../components/Filters/FilterDresses";
import { SmallProductCard } from "../components/Dresses/SmallProductCard";

export const DressMaker = () => {
  return (
    <>
      <div className="bg-gray-300 flex p-2 gap-2 rounded-lg mt-4">
        <div className="flex gap-2">
          <img
            className="w-16 h-16 rounded-lg object-cover"
            src="https://s3-alpha-sig.figma.com/img/325d/7d21/68909ccb835ee9080b96d8ef18c91baf?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c49GRM6avOMGz4~3MB47fY9iagJ0vr1o~6sZnUYzk2sNj0rfAnGFM7UPUYndTdi90ElPFtKcfQTj~htL5a-HhJ4PqaMGl6grmumZOwz0v82fSCYnP7sPNjHKcO5XdiOIflRtluX4Ig2skbeW0jifaE8mCbCzDjB-Mkw6~evqcv07vgQqT0DcM7Qy6DN1SF2gdA1mogqigZgrsrVNgE2Sr1403HPV0LkmcuxTOtBIo6oWATHRsZRjDaPLNy0qCZFVAQxSltvDHm14YKJLZNLixgxy~kE38E7UZIFzgYGgGYAWwdmy~BQloRiFkVGHXGkSwcp~z0r3WJa21Cfs4cdDLA__"
            alt=""
          />
          <div>
            <p className="text-2xl font-semibold">Kümuş.G</p>
            <div className="flex items-center gap-2">
              <GoLocation className="text-blue-500 text-xl" />
              <p className="font-bold text-sm">Ashgabat</p>
            </div>
          </div>
        </div>
        <p className="text-blue-500 mt-2">
          Evening dress, Casual dress, Home dresses
        </p>
      </div>
      <div>
        <Breadcrumb aria-label="Default breadcrumb example" className="mt-4">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">DressMakers</Breadcrumb.Item>
          <Breadcrumb.Item>Kumus.G</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="md:grid md:grid-cols-5 pb-4 mt-4 gap-4">
        <div className="md:flex md:flex-col xl:col-span-1 md:col-span-2 px-2 border rounded-lg hidden">
          <FilterDresses/>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 xl:col-span-4 md:col-span-3 gap-4">
          <SmallProductCard/>
          <SmallProductCard/>
          <SmallProductCard/>
        </div>
      </div>
    </>
  );
};
