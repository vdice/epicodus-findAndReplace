describe('findAndReplace', function() {
  var searchKey = 'Ducati'
  var replacement = 'BMW'
  var inputString = 'Do I sound like a ' + searchKey + '?'

  it('returns input string if no search string is provided', function() {
    expect(findAndReplace(inputString, '', replacement)).to.equal(inputString);
  });

  it('returns input string if no replacement string is provided', function() {
    expect(findAndReplace(inputString, searchKey, '')).to.equal(inputString);
  });

  it('returns input string if search string is identical to the replacement string', function() {
    expect(findAndReplace(inputString, searchKey, searchKey)).to.equal(inputString);
  });

  it('returns modified input string when search string and replacement string differ', function() {
    expect(findAndReplace(inputString, searchKey, replacement)).to.equal('Do I sound like a ' + replacement + '?');
  });
});
