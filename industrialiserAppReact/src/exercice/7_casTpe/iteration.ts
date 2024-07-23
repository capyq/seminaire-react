const generateTable =(length:number)=> Array.from({ length }, (_, i) => (i + 1).toFixed() );

const tableSize = 10**6
const tableGenetated = generateTable(tableSize)
console.time("🚀 QCA :  ~ tableTic:");
const table1 =  tableGenetated.reduce((acc, curr) => ({...acc, [curr]:curr}), {});
console.timeEnd("🚀 QCA :  ~ tableTic:");

console.time("🚀 QCA :  ~ tableTic2");
const table2 = tableGenetated.reduce(
  (acc, curr) => {
    Object.assign(acc,{[curr]:curr});
    return acc
  }, {} as {[key: string]: string});
  console.timeEnd("🚀 QCA :  ~ tableTic2");
  
  console.time("🚀 QCA :  ~ tableTic3");
  const table3 = tableGenetated.reduce((acc, curr) => {
    acc[curr] = curr;
    return acc;
  }, {} as {[key: string]: string});
  console.timeEnd("🚀 QCA :  ~ tableTic3");

