/**
 * 接口
 * 
 * 
 */
{
    interface Person {
        readonly id: number,
        name: string,
        age: number,
        hobby?: Array<any>,
    }

    let tom: Person = {
        id: 123,
        name: 'BIO',
        age: 20,
        hobby: [1, 2, 3],
    }

    interface IndexArray {
        [index: number]: number
    }












}