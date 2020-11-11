# @param string
# @return string

def most_vowels(string)
  strArr = string.split(' ')
  most_vowel = ''
  strArr.each do |word|
    most_vowel = word if most_vowel.count('aeiou') < word.count('aeiou')
  end
  p most_vowel
end

most_vowels("what a wonderful ruby")