// 数组降维
{
  const arr = [1, 2, [3, 4, [5, 6, [7, 8, 9, [10]]]]];

  function arrayFlatByES5(array, count) {
    return array.reduce(function(result, item) {
      if (Array.isArray(item)) {
        return result.concat(arrayFlatByES5(item));
      } else {
        result.push(item);
        return result;
      }
    }, []);
  }

  function arrayFlatByES6(array, count) {
    return array.reduce(
      (result, item) =>
        Array.isArray(item)
          ? [...result, ...arrayFlatByES6(item)]
          : [...result, item],
      []
    );
  }
  console.log(arrayFlatByES6(arr));
}
