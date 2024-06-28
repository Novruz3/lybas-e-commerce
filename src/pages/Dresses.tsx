import { BreadCrumb } from "../components/BreadCrumb/BreadCrumb"
import { SmallProductCard } from "../components/Dresses/SmallProductCard"
import FilterDresses from "../components/Filters/FilterDresses"

export const Dresses = () => {
  return (
    <div className="lg:px-36 px-4">
      <BreadCrumb/>
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
    </div>
  )
}
