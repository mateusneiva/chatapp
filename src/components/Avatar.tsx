"use client";

import { Avatar as RadixAvatar } from "@radix-ui/themes";
import { VariantProps, tv } from "tailwind-variants";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback: string;
  activity: "ONLINE" | "DND" | "AFK";
}

const activityIconVariants = tv({
  base: "flex w-2 h-2 rounded-full",
  variants: {
    activity: {
      ONLINE: "bg-green-500",
      DND: "bg-red-500",
      AFK: "bg-yellow-500",
    },
  },

  defaultVariants: {
    activity: "ONLINE",
  },
});

interface ActivityProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof activityIconVariants> {}

function ActivityIcon({ activity, className, ...props }: ActivityProps) {
  return (
    <span
      className={activityIconVariants({ activity, className })}
      {...props}
    ></span>
  );
}

export function Avatar({ src, alt, fallback, activity }: AvatarProps) {
  return (
    <div className="relative flex justify-center items-center w-[38px] h-[38px] bg-slate-950 bg-opacity-30 rounded-full">
      <div className="inline-flex items-center justify-center bg-inherit h-full w-full overflow-hidden rounded-full">
        <RadixAvatar
          className="flex justify-center items-center select-none font-semibold uppercase w-full h-full rounded-[inherit] object-cover"
          src={
            src
              ? src
              : `https://api.dicebear.com/7.x/notionists-neutral/svg?seed=${fallback}`
          }
          alt={alt}
          fallback={fallback[0]}
        />
      </div>
      <div className="absolute top-0 right-0 border-2 rounded-full border-slate-900">
        <ActivityIcon activity={activity} />
      </div>
    </div>
  );
}
