import React from "react";
import Link from "next/link";

type Props = {};

const sideNav = (props: Props) => {
  return (
    <div>
      <ul className="flex flex-col gap-3 m-4 p-4">
        <li className="font-bold text-2xl m-auto p-2">
          <Link href="/">الرئيسية</Link>
        </li>
        <li className="font-bold text-2xl m-auto p-2">
          <Link href="/user">المستخدمين</Link>
        </li>
        <li className="font-bold text-2xl m-auto p-2">
          <Link href="/product">المنتجات</Link>
        </li>
        <li className="font-bold text-2xl m-auto p-2">
          <Link href="/cash">الصندوق</Link>
        </li>
      </ul>
    </div>
  );
};

export default sideNav;
