function rainWater(arr) {
  if (arr <= 2) return null;

  let left = 0;
  let right = 1;

  let leftMax = 0;
  let totalVol = 0;
  let barVol = 0;
  // let currVol = 0;

  while (left < right && right < arr.length) {
    //arr[r] > arr[l]
    //

    if (arr[right] > arr[left]) {
      const width = right - left - 1;
      let currVol = arr[left] * width - barVol;
      totalVol += currVol;

      //update
      console.log('total updated: ', totalVol);
      barVol = 0;
      left = right;
      right++;
    } else {
      barVol += arr[right];
      right++;
    }
  }

  return totalVol;
}

let arr = [];
arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

console.log(rainWater(arr));
/*
Complexity analysis
-------------------


Test cases
----------

[0,1,0,2,1,0,3,1,0,1,2], answer = 8

[] = 0
[3] = 0
[3,4,3] = 0
[3,4,5] = 0
*/

/*
  l=0
  r=1
	totalVolume = 0;
	currVolume = 0;
	barVolume = 0;

	while(l < r && r<arr.length){

		//calulate volume
		// totalVolume += vol;
		
		
		if (arr[l] < arr[r]) {
			//when LEFT has to be reset, update TOTAL VOLUME
			width = r-l-1;
			let vol = width*arr[l];
			currVol = vol - barVolume;
			totalVolume += currVol

			//update settings
			l = r
			r++;
			currVol = 0;
			barVolume = 0;
	 } else {
		 barVolume += arr[r];
		 r += 1
	 }


	}
  
 */
/**

to collect water,
	1. left and right should be > middle
	2. 



	if 'middle' is greater than left
		move left pointer to middle
----

for every index,
	find height of water above it, 
	send pointers to left and right, till height is found
		(height is determined by lower of the two walls)
	calculate volume
	subtract volume of walls in between
		for all the walls/indexes in between,
			ignore volume calculation
			?recursively go left and right and continue?
				OR, just start on index 1, and keep going right 
	

 */
