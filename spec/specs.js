describe('findAndReplace', function() {
  var searchKey = 'Ducati'
  var replacement = 'BMW'
  var inputString = 'Do I sound like a ' + searchKey + '?'

  it('returns empty string if input string is empty', function() {
    expect(findAndReplace('', searchKey, replacement)).to.equal('');
  });

  it('handles blank/whitespace-only strings', function() {
    expect(findAndReplace(inputString, '      ', replacement)).to.equal(inputString);
  });

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

  it('returns modified input string with multi-word search/replacement strings', function() {
    expect(findAndReplace(inputString, 'Do I', 'You really')).to.equal('You really sound like a ' + searchKey + '?');
  });

  it('replaces multiple occurences of search string with replacement string', function() {
    expect(findAndReplace('wowowow', 'w', 'z')).to.equal('zozozoz');
    expect(findAndReplace(inputString, 'D', 'd')).to.equal('do I sound like a ducati?');
  });
});

describe('isEmpty', function() {
  it('returns true if string contains no characters', function() {
    expect(''.isEmpty()).to.equal(true);
  });

  it('returns true if string contains only whitespace characters', function() {
    expect('        '.isEmpty()).to.equal(true);
  });

  it('returns false if string contains non-whitespace characters', function() {
    expect('!'.isEmpty()).to.equal(false);
  });
});
