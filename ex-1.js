// Exercise 1: Length of Last Word

const lengthOfLastWord = function (s) {
  const sentence = s.replace(/[^a-zA-Z0-9]/g, " ").split(" ");
  word = sentence.filter((item) => {
    return item !== "";
  });
  word.reverse();
  return word[0].length;
  console.log(word);
};

const result1 = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log(result1); // 5
console.log(result2); // 4
console.log(result3); // 6
