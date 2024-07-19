import React, { useState } from "react";
import { Chip, Button } from "@material-tailwind/react";

export default function ChipDismissible({className}) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className={"chip-set "+className}>
        <Chip open={open} value="Dismissible" className="bg-[#0762C818] py-2 text-black" onClose={() => setOpen(false)} />
      </div>
    </>
  );
}