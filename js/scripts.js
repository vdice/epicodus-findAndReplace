var findAndReplace = function(inputString, searchKey, replacement) {
  return searchKey.isEmpty() || replacement.isEmpty() ?
    inputString : inputString.replace(searchKey, replacement);
}

String.prototype.isEmpty = function() {
  return (this.length === 0 || !this.trim());
};

$(document).ready(function() {
  $('form').submit(function(event) {
    var originalString = $('input#original-string').val();
    var searchString = $('input#search-string').val();
    var replacementString = $('input#replacement-string').val();

    var newString = findAndReplace(originalString, searchString, replacementString);

    $('#new-string').text(newString);
    $('#result').fadeIn();

    event.preventDefault();
  });
});
