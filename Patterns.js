const rectangularPattern = (n) => {
  let pattern = ''
  for(let i = 0; i < n; i++) {
     for(let j = 0; j < n; j++) {
      pattern += '*'
     }
     pattern += '\n'
  }
  return pattern
}

// console.log(rectangularPattern(6));

const rightAngleTrianglePattern = (n) => {
  let pattern = ''
    for(let i = 0; i < n; i++) {
      for(let j = 0; j <= i; j++) {
          pattern += '*'
      }
      pattern += '\n'
    }
    return pattern
}

// console.log(rightAngleTrianglePattern(6));

const rightAngleTriangleNumberPattern = (n) => {
    let number = ''
    for(let i = 1; i < n; i++) {
      for(let j = 1; j <= i; j++) {
        number += j
      }
      number += '\n'
    }
    return number
}

// console.log(rightAngleTriangleNumberPattern(6))

const rightAngleTriangleNumberPatternTwo = (n) => {
  let number = ''
  for(let i = 1; i < n; i++) {
    for(let j = 1; j <= i; j++) {
      number += i
    }
    number += '\n'
  }
  return number
}

console.log(rightAngleTriangleNumberPatternTwo(6))

const invertedRightPyramid = (n) => {
  let pattern = '';
  for(let i = 0; i < n; i++) {
    for(let j = n; j > i; j--) {
      pattern += '*'
    }
    pattern += '\n'
  }
  return pattern
}

// console.log(invertedRightPyramid(6))

const invertedRightNumberPyramid = (n) => {
  let number = '';
  for(let i = 0; i < n; i++) {
    for(let j = n; j > i; j--) {
      number += (n - j) + 1
    }
    number += '\n'
  }
  return number;
}

console.log(invertedRightNumberPyramid(5))


const starPattern = (num) => {
  let pattern = '';
  for (let i = 0; i < num; i++) {
    // Space
    for (let j = 0; j < num - i - 1; j++) {
      pattern += ' ';
    }
    // Star
    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += '*';
    }
    // Space
    for (let j = 0; j < num - i - 1; j++) {
      pattern += ' ';
    }
    pattern += '\n';
  }
  return pattern;
};

console.log(starPattern(6));

const starPatternReverse = (num) => {
  let pattern = '';
  for (let i = 0; i < num; i++) {
    // Space
    for (let j = 0; j < i; j++) {
      pattern += ' ';
    }
    // Star
    for (let j = 0; j < 2 * num - (2 * i + 1); j++) {
      pattern += '*';
    }
    // Space
    for (let j = 0; j < i; j++) {
      pattern += ' ';
    }
    pattern += '\n';
  }
  return pattern;
};

// console.log(starPatternReverse(6));

const diamondPattern = (num) => {
  let patternOne = starPattern(num);
  let patternTwo = starPatternReverse(num);
  return patternOne + patternTwo;
};

// console.log(diamondPattern(6));

const halfDiamondPattern = (n) => {
  let pattern = '';
  for (let i = 0; i < 2 * n - 1; i++) {
    let star = i;
    if (i > n) star = 2 * n - i;
    for (let j = 0; j <= star; j++) {
      pattern += '*';
    }
    pattern += '\n';
  }
  return pattern;
};

// console.log(halfDiamondPattern(3));

const binaryNumberPattern = (n) => {
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) pattern += '1';
      else pattern += 0;
    }
    pattern += '\n';
  }
  return pattern;
};

// console.log(binaryNumberPattern(5));
