# @param string
# @return [[string]]

def dna_string(string)
  string = string.split("")

  string.each do |i|
    if i == "A"
      p [i, "T"]
    elsif i == "T"
      p [i, "A"]
    elsif i == "C"
      p [i, "G"]
    elsif i == "G"
      p [i, "C"]
    end
  end
end

dna_string('GTAAAACTG')