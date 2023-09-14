import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

interface NavItemProps {
  title: string;
  icon: ElementType;
  to: string;
}

export default function NavItem({ title, icon: Icon, to = "/" }: NavItemProps) {
  return (
    <Link
      href={to}
      className=" group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50
      "
    >
      <Icon className="w-5 h-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="w-5 h-5 text-zinc-500 ml-auto group-hover:text-violet-400" />
    </Link>
  );
}
