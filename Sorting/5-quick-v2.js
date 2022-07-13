function quickSort(arr, left, right) {
  if (arr.length === 1) return arr;

  if (left < right) {
    const partition_idx = partition(arr, left, right);
    quickSort(arr, left, partition_idx - 1);
    quickSort(arr, partition_idx + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let start = left;
  let partition_idx = left;

  while (start < right) {
    if (arr[start] < pivot) {
      swap(arr, partition_idx, start);
      partition_idx++;
    }
    start++;
  }
  swap(arr, partition_idx, right);
  return partition_idx;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let arr = [5, 3, 1, 6, 4, 2];
console.log(quickSort(arr, 0, 5));
// console.log(partition(arr, 0, 5));

// function quickSort(arr, left, right) {
//   // let left = 0;
//   // let right = arr.length - 1;

//   if (left < right) {
//     const partition_idx = partition(arr, left, right);
//     quickSort(arr, left, partition_idx - 1);
//     quickSort(arr, partition_idx + 1, right);
//   }
//   return arr;
// }

// function partition(arr, left, right) {
// function partition(arr) {
//   let final_position = 0;
//   let starting_position = 0;
//   let right = arr.length - 1;
//   // let pivot = right;
//   // let final_position = left;
//   // let starting_position = left;
//   // let pivot = right;

//   while (starting_position < right) {
//     if (arr[starting_position] < arr[right]) {
//       swap(arr, final_position, starting_position);
//       final_position++;
//     }
//     starting_position++;
//   }
//   swap(arr, final_position, right);
//   console.log(arr);
// }

// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// let arr = [5, 3, 1, 6, 4, 2];
// // console.log(partition(arr));
// console.log(quickSort(arr));
/*





----------------------------
----------------------------
if(arr.length <= 1) return arr;

i as parition_idx
j as i

function partition(arr, right_idx){
	let pivot = right_idx;
	let pivot_value = arr[pivot];
	let partition_idx = 0;

	for(let i = 0; i<pivot; i++){
		if(arr[i] < pivot_value){
			swap(arr, i, j);
			partition_idx++;
		}
	}
	swap(arr, partition_idx, pivot);
	return partition_idx;	
}

function swap(arr, i, j){
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

======

after receiving paritionIdx,

pick 

parition(arr, 0, partition_idx-1)
parittion(arr, partition_idx-1, arr.length-1)




---
init = [5,3,1,6,4,2]
swap(i=0, j=2)
post = [1,3,5,6,4,2]



after for loop
init = [1,3,5,6,4,2]
swap(partition_idx=1, pivot=5)
post = [1,2,5,6,4,3]
*/
