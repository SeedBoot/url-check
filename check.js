function contains(stringArray) {
  // fn returns true if the first instance of the string is found
  function checkString(word, str) {
    if (typeof str == 'number') {
      str.toString();
    }
    if (str.indexOf(word)!== -1){
      return true;
    } 
    else {
      return false;
    }
  }

  var url = window.location.href;
  console.log(url);

  for(var i = 0; i < stringArray.length; i++) {
    var yas = checkString(stringArray[i], url);
    
    if(yas) {
      console.log(stringArray[i] + ' = yas!');
      // return true;
    }
    else {
      console.log(stringArray[i]);
    }
  }
}

var arr = ['dog', 'code', 'https', 'vAh', 20, 1, 2, 3, 4, 5, 6, 7, 'com', 'co', 'iFrame', 'i'];

var a = new contains(arr)
