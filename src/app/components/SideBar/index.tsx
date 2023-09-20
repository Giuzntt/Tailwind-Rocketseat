import { Cog, LifeBuoy, Search } from "lucide-react";
import { Logo } from "./assets/logo";

import NavItem from "./NavItem/NavItem";
import { Home, BarChart, SquareStack, Flag, Users } from "lucide-react";
import { Profile } from "./Profile";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { InputControl, InputPrefix, InputRoot } from "../Input";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <Search className="text-zinc-500 w-5 h-5" />
        </InputPrefix>
        <InputControl placeholder="Search" />
      </InputRoot>

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

      <div className="mt-auto flex flex-col gap-5">
        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  );
}
