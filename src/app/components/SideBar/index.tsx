import { Cog, LifeBuoy, Search } from "lucide-react";
import { Logo } from "./assets/logo";

import NavItem from "./NavItem/NavItem";
import { Home, BarChart, SquareStack, Flag, Users } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 space-y-6">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm ">
        <Search className="w-5 h-5 text-zinc-500" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none border-none p-0 text-zinc-900 placeholder-zinc-600
          "
        />
      </div>
      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} to="/" />
        <NavItem title="Dashboard" icon={BarChart} to="/" />
        <NavItem title="Projects" icon={SquareStack} to="/" />
        <NavItem title="Tasks" icon={Flag} to="/" />
        <NavItem title="Reporting" icon={Users} to="/" />
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} to="/" />
          <NavItem title="Settings" icon={Cog} to="/" />
        </nav>
      </div>
      <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
        <div className="space-y-1">
          <span className="text-sm/5 font-bold text-violet-700">
            Used space
          </span>
          <p className="text-sm/5 text-violet-500 font-medium">
            Your team has used 80% of your avaible space. Need more space?
          </p>
        </div>
        <div className="h-2 rounded-full bg-violet-100">
          <div className="h-2 w-4/5 rounded-full bg-violet-600" />
        </div>
        <div className="space-x-3">
          <button className="text-sm/5 text-violet-600 font-medium hover:text-violet-500">
            Dimiss
          </button>
          <button className="text-sm/5 text-violet-600 font-bold hover:text-violet-900">
            Upgrade plan
          </button>
        </div>
      </div>
    </aside>
  );
}
