var button = document.querySelectorAll('input');
let numRegex = /[1-9]/;
let zeroRegex = /[0]/;
let signRegex = /[/+x-]/;
let dotRegex = /[.]/;
let multiplyRegex = /[*]/;
let calculateRegex = /^([0-9]\d{0,9}(\.\d{1,3})?%?)[/+*-]\d$/;
let tempoRegex = /([/+*-][+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$)/;
let autoCalculate = '';
let screen = document.querySelector('.result')
let shown = '';
var result = '';
let signHolder = '';
let prevShown = '';
let prevSign ='';
let equalsClicked = 0;
let tempoResult;
let answerLength;
let padLength = '1';


button.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(){
        let lastShown = shown.slice(-1);
        let lastResult = result.slice(-1);

        if (currentBtn.value === '.' && shown.length === 0) {
            result += '0.';
            shown += '0.';
            screen.textContent = shown;
            console.log("okay")
        }

        if (currentBtn.value === '.' && !dotRegex.test(shown) && !signRegex.test(lastShown)) {
            result += '.';
            shown += '.';
            screen.textContent = shown;
        }

        if (equalsClicked < 1) {
        if (zeroRegex.test(currentBtn.value) && shown.length != 0) {
          if (zeroRegex.test(currentBtn.value) && signRegex.test(lastShown)) {
            shown = '';
          }
                result += currentBtn.value;
                shown += currentBtn.value;
                prevShown = shown;
                if (zeroRegex.test(currentBtn.value) && shown.length > 9) {
                  shown = shown.slice(0, -1);
                  result = result.slice(0, -1)
                  }
                screen.textContent = shown;
        }
      }

        if (equalsClicked < 1) {
          if (numRegex.test(currentBtn.value)) {
            if (numRegex.test(currentBtn.value) && signRegex.test(lastShown)) {
              shown = '';
            }
            result += currentBtn.value;
            shown += currentBtn.value;
            prevShown = shown;
            if (numRegex.test(currentBtn.value) && shown.length > 9) {
              shown = shown.slice(0, -1);
              result = result.slice(0, -1)
            }
            screen.textContent = shown;
          }
        }
  

        if (signRegex.test(currentBtn.value) && lastShown != '.') {
          if (tempoRegex.test(result)) {
            shown = eval(result);
            shown = shown.toString();
            screen.textContent = shown;
            equalsClicked ++;
            console.log(equalsClicked);
        }
          if (shown.length != 0 /*&& !signRegex.test(lastShown)*/) {
            if(signRegex.test(lastShown) || signRegex.test(lastResult)){
                shown = shown.slice(0, -1);
                result = result.slice(0, -1);
              }
            equalsClicked = 0;
            result += currentBtn.value;
            result = result.replace("x", "*");
            prevSign = result.charAt(result.length - 1);
            shown += currentBtn.value;
            
        }
        if (shown.length === 0 && currentBtn.value === '-' && !signRegex.test(lastResult)) {
          result += currentBtn.value;
          //shown += currentBtn.value;
        }
      }

      if (equalsClicked < 1) {
      if (currentBtn.value === 'DEL') {
        if (shown.length > 0) {
          result = result.slice(0, -1);
          shown = shown.slice(0, -1);
          screen.textContent = shown;
        }
      }
    }

      if (currentBtn.value === 'RESET') {
        shown = '';
        result = '';
        screen.textContent = shown;
        equalsClicked = 0;
      }

      if (currentBtn.value === '=') {
        if (tempoRegex.test(result)){
          shown = eval(result);
          shown = shown.toString();
          result = shown;
          answerLength = shown.length;
          screen.textContent = shown;
          equalsClicked ++;
        }
      }

      

      //let answer = eval(result);
        console.log(result);
        //console.log(shown);
        console.log(prevShown);
        //console.log(prevSign);

      
    })
  })