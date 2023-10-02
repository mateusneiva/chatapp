// "use client";

// import * as Select from "@radix-ui/react-select";
// import React, { Ref, useState } from "react";
// import { IoChevronDown } from "react-icons/io5";
// import { IoMdCheckmark } from "react-icons/io";

// interface SelectItemProps {
//   children?: React.ReactNode;
//   value?: string;
// }

// const SelectItem = React.forwardRef(
//   (
//     { children, value, ...props }: SelectItemProps,
//     forwardedRef: Ref<HTMLDivElement>
//   ) => {
//     return (
//       <Select.Item
//         value={value}
//         className="text-[13px] leading-none  rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-slate-700"
//         ref={forwardedRef}
//         {...props}
//       >
//         <Select.ItemText>{children}</Select.ItemText>
//         <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
//           <IoMdCheckmark size={16} />
//         </Select.ItemIndicator>
//       </Select.Item>
//     );
//   }
// );

// SelectItem.displayName = "SelectItem";

// export function SelectStatus() {
//   const [status, setStatus] = useState<"Online" | "Do Not Disturb" | "Idle">(
//     "Online"
//   );

//   function onChange(data) {
//     setStatus(data);
//   }

//   return (
//     <Select.Root value={status} onValueChange={onChange}>
//       <Select.Trigger className="flex justify-between items-center  gap-1 p-1 px-3 rounded text-sm outline-none border dark:border-slate-600 ">
//         <div className="flex items-center gap-2">
//           <Select.Icon>
//             {status === "Online" && <OnlineIcon />}
//             {status === "Do Not Disturb" && <DndIcon />}
//             {status === "Idle" && <IdleIcon />}
//           </Select.Icon>

//           <Select.Value placeholder={status} className="flex items-center" />
//         </div>

//         <Select.Icon>
//           <IoChevronDown size={16} />
//         </Select.Icon>
//       </Select.Trigger>

//       <Select.Portal>
//         <Select.Content>
//           <Select.Viewport>
//             <Select.Group className="bg-slate-900 p-1 border border-slate-600 rounded">
//               <Select.Label>Status</Select.Label>
//               <SelectItem value="Online">Online</SelectItem>
//               <SelectItem value="Do Not Disturb">Do Not Disturb</SelectItem>
//               <SelectItem value="Idle">Idle</SelectItem>
//             </Select.Group>
//           </Select.Viewport>
//         </Select.Content>
//       </Select.Portal>
//     </Select.Root>
//   );
// }

"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { DropdownMenu } from "@radix-ui/themes";
import { FiMoon, FiSun, FiMonitor } from "react-icons/fi";

import { Button } from "./Button";

interface ToggleThemeMenuProps {
  buttonVariant?: "default" | "ghost" | "outline";
}

function OnlineIcon() {
  return <span className="flex w-2 h-2 rounded-full bg-green-500"></span>;
}

function DndIcon() {
  return <span className="flex w-2 h-2 rounded-full bg-red-500"></span>;
}

function IdleIcon() {
  return <span className="flex w-2 h-2 rounded-full bg-yellow-500"></span>;
}

export function SelectStatus({
  buttonVariant = "ghost",
}: ToggleThemeMenuProps) {
  const [status, setStatus] = useState<"Online" | "Do Not Disturb" | "Idle">(
    "Online"
  );

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button className="px-3 min-w-max" variant={buttonVariant} size="sm">
          {status === "Online" && <OnlineIcon />}
          {status === "Do Not Disturb" && <DndIcon />}
          {status === "Idle" && <IdleIcon />}
          {status}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="z-50 min-w-[8rem] text-sm shadow-md bg-white border border-gray-200 rounded-md p-1 dark:bg-slate-900 dark:border-slate-700 animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
        <DropdownMenu.Item
          onClick={() => setStatus("Online")}
          className="select-none px-2.5 py-1.5 outline-none transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <span className="flex items-center gap-2">
            <OnlineIcon /> Online
          </span>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => setStatus("Do Not Disturb")}
          className="select-none px-2.5 py-1.5 outline-none transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <span className="flex items-center gap-2">
            <DndIcon /> Do Not Disturb
          </span>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => setStatus("Idle")}
          className="select-none px-2.5 py-1.5 outline-none transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <span className="flex items-center gap-2">
            <IdleIcon />
            Idle
          </span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
