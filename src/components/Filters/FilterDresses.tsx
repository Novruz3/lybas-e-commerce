import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { filterDresses, filterPrice } from "../../assets/filter/filterDresses";
import { Checkbox, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";

export default function FilterDresses() {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(false);
  const [openAcc3, setOpenAcc3] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

  return (
    <div className="px-2">
      <Accordion open={openAcc1}>
        <AccordionHeader className="text-md" onClick={handleOpenAcc1}>
          All Categories
        </AccordionHeader>
        <AccordionBody>
          <div className="flex flex-col space-y-2 px-2">
            {filterDresses.map((val) => (
              <div className="flex items-center gap-2">
                <Checkbox id="age" />
                <Label htmlFor="age">{val}</Label>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="max-w-md">
            <TextInput
              id="search"
              type="search"
              icon={BsSearch }
              placeholder="Search..."
              required
            />
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc2}>
        <AccordionHeader className="text-md" onClick={handleOpenAcc2}>
          DressMakers
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc3}>
        <AccordionHeader className="text-md" onClick={handleOpenAcc3}>
          Price
        </AccordionHeader>
        <AccordionBody>
          <div className="flex flex-col space-y-2 px-2">
            {filterPrice.map((val) => (
              <div className="flex items-center gap-2">
                <Checkbox id="age" />
                <Label htmlFor="age">{val}</Label>
              </div>
            ))}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
}
