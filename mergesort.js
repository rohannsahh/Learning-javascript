
function merge(left,right){
    let result =[]
    let leftIndex= 0;
    let rightIndex=0;

    while(leftIndex<left.length  && rightIndex<right.length){
        if (left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++  ;
        }
       else{
        result.push(right[rightIndex]);
        rightIndex++ ;
       } 
    }
    
       while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
      }
    
      while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
      }
     
    return result;

  }
  function mergeSort(arr){
    if (arr.length<2){
        return arr;
    }

  const middle = Math.floor(arr.length/2);
  const left =arr.slice(0,middle);
  const right = arr.slice(middle);
  
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}
  


  
  const arr = [8, 3, 1, 6, 4, 7, 2, 5];
  const sortedArray = mergeSort(arr);
  console.log(mergeSort(arr)); 

