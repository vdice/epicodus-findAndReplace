describe('findAndReplace', function() {
  var inputString = 'Do I sound like a Ducati?'

  it('returns input string if no search string is provided', function() {
    expect(findAndReplace(inputString, '', 'BMW')).to.equal(inputString);
  });
});
