function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }    
  }

  sum = arr.reduce((a, b) => a + b, sum);
  let m = sum / arr.length;
  avg = Number(m.toFixed(2));

  if (arr.length === 0) {
  max = 0;
  min = 0;
  avg = 0; 
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  sum = arr.reduce((a, b) => a + b, sum);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = -Infinity;
  let min = Infinity;
    
  max = Math.max(...arr);
  min = Math.min(...arr); 

  if (arr.length === 0) {
  max = 0;
  min = 0;
  }
   
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
    
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  let result = sumEvenElement / countEvenElement;
  if (arr.length === 0) {
  result = 0; 
  }
  return result;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const res = func(...arrOfArr[i]);
    summElementsWorker();
    differenceMaxMinWorker();
    differenceEvenOddWorker();
    averageEvenElementsWorker();
    if (res > maxWorkerResult) {
      maxWorkerResult = res;
    }
  }
  return maxWorkerResult;
}