import { BreadCrumb } from "../components/BreadCrumb/BreadCrumb"
import { SmallProductCard } from "../components/Dresses/SmallProductCard"
import { AccordionCustomIcon } from "../components/Filters/FilterDresses"

export const Dresses = () => {
  return (
    <div className="lg:px-36 px-4">
      <BreadCrumb/>
      <div className="grid grid-cols-5 pb-4 mt-4 gap-4">
        <div className="flex flex-col col-span-1">
          <AccordionCustomIcon/>
        </div>
        <div className="grid grid-cols-4 col-span-4 gap-4">
          <SmallProductCard/>
          <SmallProductCard/>
          <SmallProductCard/>
        </div>
      </div>
    </div>
  )
}
