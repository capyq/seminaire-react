import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent />
    </div>
  );
};