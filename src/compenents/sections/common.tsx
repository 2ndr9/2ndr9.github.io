import React, { FC } from "react";

type SectionProps = {
  bgColor: string;
  sectionID: string;
  title: string;
};

const Section: FC<SectionProps> = ({ bgColor, sectionID, title, children }) => {
  return (
    <section className={`text-center ${bgColor} p-8`} id={sectionID}>
      <h2 className="text-4xl mt-3 mb-10">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
