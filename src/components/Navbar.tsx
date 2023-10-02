import React from "react";
import { Avatar } from "@radix-ui/themes";

import { AiOutlineBell } from "react-icons/ai";

import { Button } from "./Button";
import { getCurrentUser } from "@/lib/session";

export async function Navbar() {
  const user = await getCurrentUser();

  if (!user) {
    return;
  }

  return (
    <div className="fixed flex justify-between w-full bg-slate-800">
      <div className="flex justify-between items-center gap-2 w-full py-4 px-8">
        <div className="flex w-full flex-col"></div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="p-0 w-10 h-10 rounded-full">
            <AiOutlineBell size={23} />
          </Button>

          <div className="pl-1">
            <div className="flex justify-center items-center w-8 h-8 bg-slate-950 bg-opacity-30 cursor-pointer rounded-full">
              <div className="inline-flex items-center justify-center bg-inherit h-full w-full overflow-hidden rounded-full">
                <Avatar
                  src={user.image}
                  fallback={user.name[0]}
                  className="w-full h-full rounded-[inherit] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
