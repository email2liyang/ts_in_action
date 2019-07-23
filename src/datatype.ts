let bool: boolean = true
let num: number = 123
let str: string = 'abc'

let arr1: number[] = [1,2,3]
let arr2: Array<number | string> = [1,2,3, '4']

let tuple: [number,string] = [0,'1']

let add = (x: number,y:number) => x + y

let compute: (x:number, y:number) => number
compute = (a,b) => a + b;

let obj:{x:number, y:number} = {x:1,y:2}
obj.x = 3
