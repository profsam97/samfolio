 const findMode = (players, results) => {
    const firstPlayer = players[0];
    const secondPlayer = players[1];
    const firstFilter = results.filter(item => item === firstPlayer);
    const secondFilter = results.filter(item => item === secondPlayer);
    const playerOne =  firstFilter.length;
    const playerTwo = secondFilter.length;
    if(playerOne > playerTwo){
      return 'first player wins';
    }
     if(playerOne < playerTwo){
      return 'second player wins';
    }
     if(playerOne == playerTwo){
      return 'Tie';
    }
  } 
  const  rounds_won = results => {
    const initialArray = [];

    for (let i = 0; i < results.length; i++) {
      const element =  initialArray.includes(results[i]);
      if(!element) {
            initialArray.push(results[i]);
      }
      
    }
 
 return  findMode(initialArray, results)
  }
  const results = [3,2,2,3,2,3,2,3,2,3,3];
    // rounds_won(results);
  console.log(rounds_won(results));

  function isDuoDigit(number) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    const isBoolean =  Math.abs(number);
    const string = isBoolean.toString();
    // const array = JSON.parse('[' + string + ']');
    const newArray = new Set();
    for (var i=0; i < string.length; i++){
        const c = string.charAt(i);
        newArray.add(c);
    }
    // const len = array.length;
    if(newArray.size <= 2){
        return 'y'
    }
    return 'n'
}

/* Ignore and do not change the code below */
// #region main
function isDuoDigit(number) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    const isBoolean =  Math.abs(number);
    const string = isBoolean.toString();
    // const array = JSON.parse('[' + string + ']');
    const newArray = new Set();
    for (var i=0; i < string.length; i++){
        const c = string.charAt(i);
        newArray.add(c);
    }
    // const len = array.length;
    if(newArray.size <= 2){
        return 'y'
    }
    return 'n'
}


