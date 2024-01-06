import { Bell } from "phosphor-react";
import { Calender } from "@/components/Calender";
import { useState } from "react";

export const UserActionBar = () => {
  const [calenderOpen, setCalenderOpen] = useState(false);
  return (
    <div className="flex gap-4 items-center">
      <Calender isOpen={calenderOpen} onClose={() => setCalenderOpen(false)} />
      <button onClick={() => setCalenderOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-[#787486]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
      </button>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z"
          stroke="#787486"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002"
          stroke="#787486"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9955 13.75H12.0045"
          stroke="#787486"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <button className="relative">
        <span className="absolute w-2 h-2 rounded-full bg-[#D8727D]"></span>
        <Bell size={24} className="text-[#787486]" />
      </button>
    </div>
  );
};
