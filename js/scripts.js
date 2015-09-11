var findAndReplace = function(inputString, searchString, replacementString) {
  return searchString.isEmpty() || replacementString.isEmpty() ?
    inputString : inputString.replace(new RegExp(searchString, 'g'), replacementString);
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
