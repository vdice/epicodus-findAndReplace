describe('findAndReplace', function() {
  var searchString = 'Ducati'
  var replacementString = 'BMW'
  var originalString = 'Do I sound like a ' + searchString + '?'

  it('returns empty string if input string is empty', function() {
    expect(findAndReplace('', searchString, replacementString)).to.equal('');
  });

  it('handles blank/whitespace-only strings', function() {
    expect(findAndReplace(originalString, '      ', replacementString)).to.equal(originalString);
  });

  it('returns original string if no search string is provided', function() {
    expect(findAndReplace(originalString, '', replacementString)).to.equal(originalString);
  });

  it('returns original string if no replacement string is provided', function() {
    expect(findAndReplace(originalString, searchString, '')).to.equal(originalString);
  });

  it('returns original string if search string is identical to the replacement string', function() {
    expect(findAndReplace(originalString, searchString, searchString)).to.equal(originalString);
  });

  it('returns modified original string when search string and replacement string differ', function() {
    expect(findAndReplace(originalString, searchString, replacementString)).to.equal('Do I sound like a ' + replacementString + '?');
  });

  it('returns modified original string with multi-word search/replacement strings', function() {
    expect(findAndReplace(originalString, 'Do I', 'You really')).to.equal('You really sound like a ' + searchString + '?');
  });

  it('replaces multiple occurences of search string with replacement string', function() {
    expect(findAndReplace('wowowow', 'w', 'z')).to.equal('zozozoz');
    expect(findAndReplace(originalString, 'D', 'd')).to.equal('do I sound like a ducati?');
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
