const tableau = [
  'pomme',
  'banane',
  'orange',
  'kiwi',
  'fraise',
  'mangue',
  'ananas',
  'raisin',
  'cerise',
  'abricot',
] as const;

type OneOF<T extends unknown[]|readonly unknown[]> = T[number];

type fruits = OneOF<typeof tableau>;
