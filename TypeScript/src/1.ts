/**
 * 数据类型
 * @author zhang
 * @date 2018年12月17日17点36分
 */

//  基础类型
let num: number = 20;
let str: string = 'zjk';
let bol: boolean = true;
let arr: Array<string> = ['array'];
let arr2: number[] = [1, 2, 3, 5];
let obj: object = {
  name: 'zjk',
  age: 20,
  hobbys: [],
};
let fn: any = function (params: number): any {
  return params;
};

// 元组类型(类似于解构赋值)
let fullname: [string, string] = ['niko', 'zhang']

// 枚举类型，事先考虑某一个变量的所有的可能的值，尽量用自然语言中的单词表示它的每一个值，比如性别、月份、星期、颜色、单位、学历
enum ORDER_STATUS {
  status_1 = '未付款',
  status_2 = '已付款',
  status_3 = '已完成',
}

// null和undefined，null 和 undefined 是其它类型的子类型，可以赋值给其它类型
let x: number | null | undefined
x = 1;
x = undefined;
x = null;

// volid类型，void表示没有任何类型，一般用于定义方法的时候方法没有返回值
function handler(params: number): void {
  console.log(params ** 2);
  // return params ** 2;
}

// never类型，never是其它类型(null undefined)的子类型，代表不会出现的值
{
  let x: never
}