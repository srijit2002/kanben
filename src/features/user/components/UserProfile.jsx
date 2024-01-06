import Profile from "../assets/Profile.svg";

export const UserProfile = () => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <h2 className="text-highlight text-base">Srijit Mondal</h2>
        <p className="text-sm text-[#787486]">West Bengal, India</p>
      </div>
      <img src={Profile} alt="" className="rounded-full"/>
    </div>
  );
};
