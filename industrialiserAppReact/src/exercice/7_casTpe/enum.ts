enum MyEnum {
    VALUE1 = 'VALUE1',
    VALUE2 = 'VALUE2',
    VALUE3 = 'VALUE3'
}


enum MyEnum2 {
  VALUE1,
  VALUE2,
  VALUE3,
}

// console.log(MyEnum.VALUE1)
// console.log(MyEnum2.VALUE1)
// console.log(MyEnum2[0])

const myfunction = (arg?: MyEnum|MyEnum2) => {
  if (arg){
    return "Defined"
  }
  return "Not Defined"
}


// console.log(myfunction(MyEnum.VALUE1))
// console.log(myfunction(MyEnum2.VALUE1))