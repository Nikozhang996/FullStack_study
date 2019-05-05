/**
 * 2：函数
 */
{
    function sum(x: number, y: number): number {
        return x + y;
    }

    interface SumFunc {
        (source: string, subString: string): boolean
    }

    let fn: SumFunc = function (source: string, subString: string) {
        return source == subString;
    }
    function reverse(x: number): number
    function reverse(x: string): string
    function reverse(x: number | string): number | string {
        if (typeof x === 'number') {
            console.log(x ** 2);
        } else if (typeof x === 'string') {
            console.log(`hello${x}`);
        } else {
            console.log('error');
        }

        return 'hello';
    }

    reverse(10)
}