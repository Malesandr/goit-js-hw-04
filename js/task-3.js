function filterArray(numbers, value) {
    const array = [];
          for(let i = 0; i <= numbers.length; i ++) {
            if(numbers[i] > value) {
              array.push(numbers[i]);
            }
          }
      return array;
    }
    



    console.log(profile.getInfo()); // "Jacob has 300 active hours!"

    profile.changeUsername("Marco");
    console.log(profile.getInfo()); // "Marco has 300 active hours!"
    
    profile.updatePlayTime(20);
    console.log(profile.getInfo()); // "Marco has 320 active hours!"