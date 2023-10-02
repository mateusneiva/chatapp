import React from "react";

import {
  IoSettingsOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";

import { getCurrentUser } from "@/lib/session";
import { getUsers } from "@/lib/users";

import { Button } from "./Button";
import { UserList } from "./UserList";
import { Avatar } from "./Avatar";
import { ToggleThemeMenu } from "./ToggleThemeMenu";

function SidebarButton({ icon }) {
  return (
    <Button
      variant="ghost"
      className="rounded-md w-[40px] h-[40px] px-0 hover:"
    >
      {icon}
    </Button>
  );
}

export async function Sidebar({ children }) {
  const user = await getCurrentUser();
  const users = await getUsers();

  return (
    <div className="flex h-full">
      <div className="flex flex-col justify-between items-center px-2 py-4 border-r dark:border-slate-700">
        <div className="flex flex-col items-center gap-2">
          <Avatar src={user.image} fallback={user.name[0]} activity="DND" />
          <SidebarButton icon={<IoChatbubbleEllipsesOutline size={24} />} />
          <SidebarButton icon={<IoSettingsOutline size={24} />} />
        </div>

        <ToggleThemeMenu className="rounded-md h-[40px] w-[40px] px-0" />
      </div>
      <div className="flex flex-col w-[500px] pt-2 border-r dark:border-slate-700">
        <UserList users={users} />
      </div>

      <main className="w-full h-full">{children}</main>
    </div>
  );
}
