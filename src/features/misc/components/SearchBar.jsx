import { MagnifyingGlass } from "phosphor-react";

export const SearchBar = () => {
  return (
    <div className="flex lg:w-full bg-gray-dark py-2 px-2.5 gap-2 rounded-md">
      <MagnifyingGlass size={20} className="text-[#787486]" />
      <input
        type="text"
        className="bg-transparent text-sm outline-none min-w-[300px]"
        placeholder="Search for anything..."
      />
    </div>
  );
};
