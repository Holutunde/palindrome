class CascadingPalindromeChecker {
  constructor(input) {
    if (typeof input !== "string") {
      throw new Error("Input must be a string");
    }

    this.input = input;
  }
  // checks if a given string is a palindrome, ignoring non-alphanumeric characters and case.
  isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
  }
  //splits the input string into components, checks each component for palindromes, and returns the cascading palindrome
  findCascadingPalindrome() {
    const components = this.input.split(" ");
    const palindromes = components.filter((component) =>
      this.isPalindrome(component)
    );
    return palindromes.join(" ");
  }
}

// Examples
const input1 = "1230321";
const checker1 = new CascadingPalindromeChecker(input1);
console.log(checker1.findCascadingPalindrome()); // Output: 1230321

const input2 = "1230321 09234 0124210";
const checker2 = new CascadingPalindromeChecker(input2);
console.log(checker2.findCascadingPalindrome()); // Output: 1230321 0124210

const input3 = "abcd5dcba 1230321 09234 0124210";
const checker3 = new CascadingPalindromeChecker(input3);
console.log(checker3.findCascadingPalindrome()); // Output: abcd5dcba 1230321 0124210
