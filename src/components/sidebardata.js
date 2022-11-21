import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsStack } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Admin",
    path: "/admin",
    icon: <AiOutlineUser />,
    class: "adminonly",
  },
  {
    title: "User",
    path: "/user",
    icon: <AiOutlineUser />,
    class: "adminonly",
  },
  {
    title: "Products",
    path: "/products",
    icon: <BsStack />,
    class: "adminonly",
  },
];
