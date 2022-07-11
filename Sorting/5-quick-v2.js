/*

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
