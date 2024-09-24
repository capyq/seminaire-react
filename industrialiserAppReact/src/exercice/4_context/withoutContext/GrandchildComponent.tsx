type GrandchildProps = {
  theme: string;
};

export const GrandchildComponent: React.FC<GrandchildProps> = ({ theme }) => {
  return (
    <div>
      <h3>Grandchild Component</h3>
      <p>Theme: {theme}</p>
    </div>
  );
};
