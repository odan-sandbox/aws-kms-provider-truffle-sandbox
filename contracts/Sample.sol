pragma solidity ^0.6.1;

contract Sample {
  string public value;
  event SetValue(string value);


  function setValue(string memory _value) public {
    value = _value;
    emit SetValue(_value);
  }

  function getValue() public view returns (string memory) {
    return value;
  }
  function getValue(string memory x) public pure returns (string memory) {
    return x;
  }
}