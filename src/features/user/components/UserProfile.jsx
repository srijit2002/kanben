import { CaretDown } from "phosphor-react";
import Profile from "../assets/Profile.svg";

export const UserProfile = () => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <h2 className="text-highlight text-base">Anima Agrawal</h2>
        <p className="text-sm text-[#787486]">U.P, India</p>
      </div>
      <img src={Profile} alt="" className="rounded-full"/>
      <CaretDown size={20} />
    </div>
  );
};
