import React from "react";

export type SkillCategory =
  | "languages"
  | "frameworks"
  | "backend"
  | "databases"
  | "practices";

interface ChipProps {
  text: string;
  category: SkillCategory;
}

const categoryColors: Record<SkillCategory, { bg: string; text: string }> = {
  languages: { bg: "bg-blue-500", text: "text-blue-500" },
  frameworks: { bg: "bg-green-500", text: "text-green-500" },
  backend: { bg: "bg-purple-500", text: "text-purple-500" },
  databases: { bg: "bg-red-500", text: "text-red-500" },
  practices: { bg: "bg-yellow-500", text: "text-yellow-500" },
};

export const Chip: React.FC<ChipProps> = ({ text, category }) => {
  const { bg, text: textColor } = categoryColors[category];
  return (
    <span
      className={`inline-block ${bg} bg-opacity-30 px-3 py-1.5 text-xs font-medium ${textColor} mr-2 mb-2 rounded-full`}
    >
      {text}
    </span>
  );
};

interface ChipListProps {
  items: string[];
  category: SkillCategory;
}

export const ChipList: React.FC<ChipListProps> = ({ items, category }) => (
  <div className="flex flex-wrap">
    {items.map((item, index) => (
      <Chip key={index} text={item} category={category} />
    ))}
  </div>
);
