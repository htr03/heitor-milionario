import React from "react";
import { useNavigate } from "react-router-dom";
export default function Sidebar() {
  const options = [
    {
      route: "/",
      name: "Página inicial",
    },
    {
      route: "/projects",
      name: "Meus projetos",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="h-screen w-[200px] bg-red-500">
      <div className="text-3xl font-bold p-5">LOGO</div>
      {options.map((option) => (
        <div
          key={option.route}
          role="button"
          className="p-5"
          onClick={() => navigate(option.route)}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
}
