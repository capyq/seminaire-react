// dans un fichier
const myObject = {
  a: 1,
  b: '2',
  c: true,
};
const myObject2 = {
  main: 'gray-100',
  hover: 'gray-200',
  active: 'gray-200',
} as const;

// dans un autre fichier hook.
type composeType = <TObj, TKey extends keyof TObj>(data: TObj, key: TKey) => TObj[TKey];

const compose: composeType = (data, key) => {
  return data[key];
};

const value = compose(myObject, 'a');
//      ^?

const value2 = compose(myObject2, 'active');
//      ^?
export {};
