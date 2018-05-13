function mergeSort(array) {
  if (array.length < 2) return array;
  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle, array.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var sorted = [];
  var lCursor = 0;
  var rCursor = 0;
  while (lCursor < left.length && rCursor < right.length) {
    if (left[lCursor] <= right[rCursor]) {
      sorted.push(left[lCursor++]);
    } else {
      sorted.push(right[rCursor++]);
    }
  }
  while (lCursor < left.length) sorted.push(left[lCursor++]);
  while (rCursor < right.length) sorted.push(right[rCursor++]);
  return sorted;
}
