import React, { FC } from "react";

type SectionProps = {
  sectionID: string;
  title: string;
};

const Section: FC<SectionProps> = ({ sectionID, title, children }) => {
  return (
    <section className={`py-5 border-b-2 break-words`} id={sectionID}>
      <h2 className="text-center text-4xl mt-3 mb-5">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
