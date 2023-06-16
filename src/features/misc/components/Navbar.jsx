import { forwardRef } from "react";
import { SearchBar } from "./SearchBar";
import { UserProfile, UserActionBar } from "@/features/user";

export const Navbar = forwardRef((_, ref) => {
  return (
    <header className="px-12 lg:flex-col gap-4 items-center flex justify-between border-b-2 border-gray-light py-3.5" ref={ref}>
      <SearchBar />
      <nav className="flex gap-20 lg:w-full lg:justify-between sm:flex-wrap sm:gpa-4">
        <UserActionBar />
        <UserProfile />
      </nav>
    </header>
  );
});
Navbar.displayName = "Navbar";
