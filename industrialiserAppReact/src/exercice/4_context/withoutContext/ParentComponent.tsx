import { ChildComponent } from "./ChildComponent";

type Props = {
  theme: string;
};

export const ParentComponent: React.FC<Props> = ({ theme }) => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent theme={theme} />
    </div>
  );
};