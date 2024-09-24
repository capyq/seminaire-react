import { GrandchildComponent } from "./GrandchildComponent";


export const ChildComponent: React.FC = () => {

  return (
    <div>
      <h2>Child Component</h2>
      <GrandchildComponent />
    </div>
  );
};
