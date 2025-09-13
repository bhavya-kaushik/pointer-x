import React from "react";
import { type PageProps } from "./types";

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <div data-testid='page-container' className='bg-black text-white'>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Page;