export const DisplayText = <TItem,>({ arr, onClick }: { arr: TItem[]; onClick: (item: TItem) => void }) => {
  return (
    <div>
      {arr.map((item, index) => (
        <p key={index}>
          {JSON.stringify(item)}
          <button onClick={() => onClick(item)}>click</button>
        </p>
      ))}
    </div>
  );
};

export default DisplayText;
