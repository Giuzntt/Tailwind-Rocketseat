import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/Giuzntt.png"
        alt="Giulianno Zanetti"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="font-semibold text-zinc-800">Giulianno Zanetti</span>
        <span className="text-sm text-zinc-500 truncate">
          giuzntt@gmail.com
        </span>
      </div>
      <button
        className="ml-auto rounded-md p-2 hover:bg-zinc-50
      "
        type="button"
      >
        <LogOut className="text-zinc-500 w-5 h-5" />
      </button>
    </div>
  );
}
