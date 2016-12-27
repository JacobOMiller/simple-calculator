//bting the angular app module
var app = angular.module ('MyApp');

app.controller ('CalculatorController',[
    '$scope', '$http',
    function ($scope, $http) {
        console.log("calculator has loaded");
        var operationList = [''];

        var index = 0;

        $scope.display ='';

        $scope.setNumber = function (num) {
            console.log('the number is', num);
            //combine string into one number
            operationList [index] = operationList [index]+'' + num;
            $scope.updateDisplay();
            console.log('operation list is' ,operationList);
        }
        $scope.setOperator = function (operator) {
            console.log('this is the operator', operator)
            //move over to the next index in the op list
            index++;

            operationList [index] = operator;

            //show in the display what operator was clicked
            $scope.updateDisplay();
            // move over
            index++;
            operationList [index] = '';
        }
        $scope.updateDisplay = function (display){
            if (display){
                $scope.display = display;
            }else{
                $scope.display = operationList [index];
            }
        }
        $scope.calculate = function (){
            console.log('the answer is')
            if (operationList.length >= 3){
                if(operationList[1] == '+'){
                    //add items together
                    var answer = parseInt(operationList[0]) + parseInt(operationList[2]);
                } else if(operationList[1] == '-'){
                    //add items together
                    var answer = parseInt(operationList[0]) - parseInt(operationList[2]);
                }else if(operationList[1] == '/'){
                    //add items together
                    if(operationList[0]== 0 || operationList[2]==0){
                        $scope.display = 'cannot divide 0 or by 0';
                        updateDisplay(display);
                    }
                    var answer = parseInt(operationList[0]) / parseInt(operationList[2]);
                } else if(operationList[1] == '*'){
                    //add items together
                    var answer = parseInt(operationList[0]) * parseInt(operationList[2]);
                }
                $scope.updateDisplay(answer);
                console.log('the result is' , answer);
                $scope.clear();
            }
            else{
                console.log('not enough numbers picked');
            }
        }
        $scope.clear = function (){
            operationList = [''];
            index = 0;
        }
        $scope.clearDisplay= function (){
            $scope.clear();
            $scope.updateDisplay();
        }
    }
]);
