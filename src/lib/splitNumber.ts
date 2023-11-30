export const splitNumber = (number: number) => {
  if (typeof number !== 'number') {
    return number;
  }
  //   const arrNumber = Array.from(number.toString());
  //   const reverseArrNumber = arrNumber.reverse();
  //   const reverseString = reverseArrNumber.join('');
  //   const stringMatch = reverseString.match(/.{1,3}/g);
  //   const separatedReverseString = stringMatch?.join(' ');
  //   const result = Array.from(separatedReverseString || '')
  //     .reverse()
  //     .join('');

  //   return result;

  const stringNumber = number.toString();

  let result = '';
};

//100
//100000
//200000
//000|005|5
