const tableau = ['pomme', 'banane', 'orange', 'mangue', 'ananas', 'raisin', 'cerise', 'abricot'] as const;

type OneOF<T extends unknown[] | readonly unknown[]> = T[number];

type fruits = (typeof tableau)[number];

const myObject = {
  main: 'gray-100',
  hover: 'gray-200',
  active: 'gray-200',
} as const;

type ObjectType = {
  main: string;
  hover: string;
  active: string;
};
type myObjectKeysByType = keyof ObjectType;
type myObjectKeysWithObject = keyof typeof myObject;
type myObjectValues = ObjectType[myObjectKeysByType];
type myObjectValuesExpended = {
  main: string;
  hover: string;
  active: string;
}['main' | 'hover' | 'active'];
