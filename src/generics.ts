function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
  }

//alternatively:

function loggingIdentityy<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}

//The type of generic functions is just like those of non-generic functions, with the type parameters listed first, similarly to function declarations:

function identity1<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity1: <Type>(arg: Type) => Type = identity1;

//We could also have used a different name for the generic type parameter in the type, so long as the number of type variables and how the type variables are used line up.

function identity2<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity2: <Input>(arg: Input) => Input = identity2;

//We can also write the generic type as a call signature of an object literal type:

function identity3<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity3: { <Type>(arg: Type): Type } = identity3;

/* ---------------------------------------------------------------------------- */
interface Identities<V, W> {
    id1: V,
    id2: W
 }

function identities<T, U> (arg1: T, arg2: U): Identities<T, U> {
    console.log(arg1 + ": " + typeof (arg1));
    console.log(arg2 + ": " + typeof (arg2));
    let identities: Identities<T, U> = {
     id1: arg1,
     id2: arg2
   };
   return identities;
 }
 
 identities('deniz', 5)

/* console:
'deniz: string'
'5: number'
{ id1: 'deniz', id2: 5 } */