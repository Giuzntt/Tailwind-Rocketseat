export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-bold text-violet-700">Used space</span>
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
  );
}
