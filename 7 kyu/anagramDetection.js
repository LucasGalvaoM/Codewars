const isAnagram = (str1, str2) => [...str1.toLowerCase()].sort().join('') === [...str2.toLowerCase()].sort().join('');