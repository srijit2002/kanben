import { forwardRef } from "react";
import { SearchBar } from "./SearchBar";
import { UserProfile, UserActionBar } from "@/features/user";

export const Navbar = forwardRef((_, ref) => {
  return (
    <header className="px-12 items-center flex justify-between border-b-2 border-gray-light py-3.5" ref={ref}>
      <SearchBar />
      <nav className="flex gap-20">
        <UserActionBar />
        <UserProfile />
      </nav>
    </header>
  );
});
Navbar.displayName = "Navbar";
