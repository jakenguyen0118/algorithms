# One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

# A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

# Write a function which takes a ROT13 encoded string as input and returns a decoded string.

# All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

# @param string
# @return string

def rot13(string)
  new_string_array = string.split("").inject("") do |text, char|
      text << case char 
      when "A".."M", "a".."m"
        char.ord + 13
      when "N".."Z", "n".."z"
        char.ord - 13
      else 
        char.ord 
      end 
  end 
  return new_string_array

 end 
end