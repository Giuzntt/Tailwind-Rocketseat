"use client";
import * as Tabs from "@radix-ui/react-tabs";

type TabItemProps = {
  value: string;
  title: string;
  isSelected?: boolean;
};

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700
        data-[state=active]:text-violet-700  
      "
      value={value}
    >
      <span>{title}</span>

      {isSelected && (
        <div
          className="absolute left-0 right-0 -bottom-px  h-0.5 bg-violet-700
            "
        />
      )}
    </Tabs.Trigger>
  );
}
