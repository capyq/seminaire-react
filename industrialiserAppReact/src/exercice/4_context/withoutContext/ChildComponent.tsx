import { useState } from "react";
import { GrandchildComponent } from "./GrandchildComponent";


type ChildProps = {
  theme: string;
};

export const ChildComponent: React.FC<ChildProps> = ({ theme }) => {

  return (
    <div>
      <h2>Child Component</h2>
      <GrandchildComponent theme={theme} />
    </div>
  );
};
