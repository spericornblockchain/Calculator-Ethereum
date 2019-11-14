pragma solidity ^0.5.10;

contract Calc {
  int public Result;
    function Add(uint operator,int first,int second) public {
      require(operator==1,'invalid Operator');
      Result = first + second;
    }
    function Sub(uint operator,int first,int second) public {
      require(operator==2,'invalid Operator');
      Result = first - second;
    }
    function Mul(uint operator,int first,int second) public {
      require(operator==3,'invalid Operator');
      Result = first * second;
    }
    function Div(uint operator,int first,int second) public {
      require(operator==4,'invalid Operator');
      Result = first / second;
    }
}