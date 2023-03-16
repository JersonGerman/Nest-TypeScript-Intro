export let name: string | number = "Jerson";
export const age: number = 25;
export const isValid: boolean = true;

name = "Andrea";
// name = 123;
// name = true;

export const templateString = ` Esto es un string
multilínea
que puedes tener 
" dobles
' simple
inyectar valores ${name}
expresiones ${ 1 + 1 }
números: ${ age }
booleanos: ${ isValid }
`

console.log( templateString )