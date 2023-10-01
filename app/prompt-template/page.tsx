'use client';

import FadeIn from '@/components/motions/FadeIn';
import TemplateCard from '@/components/templates/TemplateCard';
import { TEMPLATE_DATA } from '@/components/templates/TemplateData';
import SearchBar from '@/components/templates/TemplateSearch';
import nextI18NextConfig from '@/next-i18next.config.js';
// import DashboardLayout from "../layout/dashboard";
import { languages } from '@/utils/languages';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  const filteredData = TEMPLATE_DATA.filter((model) => {
    const matchQuery = model.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchCategory =
      category === '' ||
      model.category.toLowerCase() === category.toLowerCase();
    return matchQuery && matchCategory;
  });

  return (
    <div className="flex h-full max-w-6xl px-6 mx-auto flex-col p-10">
      <FadeIn initialX={-45} initialY={0} delay={0.1}>
        <div>
          <div className="flex flex-row items-start">
            <span className="text-xl text-center font-bold text-white xs:text-3xl sm:text-3xl">
              AI ChatGPT Prompts Template
            </span>
          </div>
          <div className="flex flex-row items-start">
            <p className="text-lg text-zinc-400 px-4 text-center  md:px-0">
              Simplify your workflow and work smarter with the power of ChatGPT.
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn initialY={45} delay={0.1} className="mt-4">
        <SearchBar setSearchQuery={setSearchQuery} setCategory={setCategory} />
        <div className="mt-3 grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredData.map((model) => (
            <TemplateCard key={model.name + model.description} model={model} />
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default Templates;
