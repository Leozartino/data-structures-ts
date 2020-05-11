function binarySearch(data: Array<any>, target: number){

  let rightPointer = data.length - 1;
  let leftPointer = 0;
  let middlePosition = Math.trunc((leftPointer + rightPointer) / 2)

  while(data.length > middlePosition){
    let element = data[middlePosition];

    if(element === target){
      return element;
    }

    if(element > target){
      rightPointer = middlePosition - 1;
    }

    else if(element < target){
      leftPointer = middlePosition + 1;
    }

    if(leftPointer > rightPointer){
      return -1;
    }

    middlePosition = Math.trunc((leftPointer + rightPointer)/2);
  }
}

export default binarySearch;

// Inicialmente:
// [50, 55, 62, 63, 70, 78, 100]
//  ^                       ^
// leftPointer       rightPointer
