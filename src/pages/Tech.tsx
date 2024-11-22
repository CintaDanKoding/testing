import React from 'react';
import SkillCard from '../components/SkillCard';
import { FaHtml5, FaReact, FaJsSquare, FaLaravel } from 'react-icons/fa';
import { DiCodeigniter } from "react-icons/di";

const Tech: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Technology Used</h1>
      <div className="mt-8 px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <SkillCard
          icon={
            <FaHtml5 className="text-gray-500 text-7xl mx-auto transition-colors duration-300 hover:text-orange-500" />
          }
          title="HTML"
        />
        <SkillCard
          icon={
            <FaReact className="text-gray-500 text-7xl mx-auto transition-colors duration-300 hover:text-blue-500" />
          }
          title="React JS"
        />
        <SkillCard
          icon={
            <FaJsSquare className="text-gray-500 text-7xl mx-auto transition-colors duration-300 hover:text-yellow-500" />
          }
          title="JavaScript"
        />
        <SkillCard
          icon={
            <FaLaravel className="text-gray-500 text-7xl mx-auto transition-colors duration-300 hover:text-red-500" />
          }
          title="Laravel"
        />
      </div>
      <div className="mt-5 px-28 grid grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard
          icon={
            <FaReact className="text-gray-500 text-7xl mx-auto transition-colors duration-300 hover:text-blue-500" />
          }
          title="React JS"
        />
        <SkillCard
          icon={
            <FaLaravel className="text-gray-500 text-7xl mx-auto transition-colors duration-300 hover:text-red-500" />
          }
          title="Laravel"
        />
        <SkillCard
          icon={
            <DiCodeigniter className="text-gray-500 text-7xl mx-auto transition-colors duration-300 hover:text-red-500"  />
          }
          title="CodeIgniter"
        />
      </div>
    </div>
  );
};

export default Tech;
