import React from "react";
import UserNav from "@/components/ui/userNav";

type Props = {};

const TopNav = (props: Props) => {
  return (
    <div>
      <UserNav />
      <div>أسم البرنامج</div>
    </div>
  );
};

export default TopNav;
