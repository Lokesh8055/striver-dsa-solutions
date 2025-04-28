

const printName = (count, n) => {
    if(count > n) return;
    console.log('Lokesh')
    printName(count + 1, n)
}

printName(1, 5);

const printTillN = (i, n) => {
    if(i > n) return;
    console.log(i)
    printTillN(i + 1, n);
}

printTillN(1, 4);

const printTillOne = (i, n) => {
   if(i < n) return;
   console.log(i);
   printTillOne(i - 1, n);
}

printTillOne(4, 1)

// backtracking
const printTillNBackTrack = (i, n) => {
   if(i < 1) return;
   printTillNBackTrack(i - 1, n);
   console.log(i);
}

printTillNBackTrack(4, 4)

const printTillOneBackTrack = (i, n) => {
    if(i > n) return;
    printTillOneBackTrack(i + 1, n);
    console.log(i);
}

printTillOneBackTrack(1, 4)

