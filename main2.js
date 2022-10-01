function showVerticalMessage(str) {
    if(str[0] === 'м') {
        str = str[0].toUpperCase() + str.slice(1);
    }
    if(str.length > 10) {
        str = str.slice(0, 10);
    }
    for(let char of str) {
        console.log(char);
    }
    for(let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
    
 }
 showVerticalMessage('марафонспорт');