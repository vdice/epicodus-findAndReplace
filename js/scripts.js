var findAndReplace = function(inputString, searchKey, replacement) {
  return searchKey.isEmpty() || replacement.isEmpty() ?
    inputString : inputString.replace(searchKey, replacement);
}

String.prototype.isEmpty = function() {
  return (this.length === 0 || !this.trim());
};
