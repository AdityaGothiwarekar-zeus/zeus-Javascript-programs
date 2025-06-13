function removeCharacter(str1, index) {
  if (index < 0 || index >= str1.length) {
    return 'Invalid index';
  } else {
    return str1.slice(0, index) + str1.slice(index + 1);
  }
}

console.log(removeCharacter('str1', 2));
