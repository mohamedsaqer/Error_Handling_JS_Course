let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Match Character Symbols
re = /^h/i; // Must start with
re = /world$/i; // Must end with
re = /^hello$/i; // Must start and end with
re = /^h.llo$/i; // Match any ONE Character
re = /h*llo/i; // Match any Character 0 or more times
re = /gre?a?y/i; // Optional Character
re = /gre?a?y\?/i; // Escape Character

// Brackets [] - Character Sets
re = /gr[aez]y/i; // must be an a or e or z
re = /[GF]ray/; // must be an G or F
re = /[^GF]ray/i; // Match anything except a G or F
re = /[A-Z]ray/; // Match any Uppercase latter
re = /[a-z]ray/; // Match any Lowercase latter
re = /[A-Za-z]ray/; // Match any latter
re = /[0-9]ray/; // Match any digit

// Braces {} - QUANTIFIERS
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exactly between {m,n} amount of times
re = /Hel{2,}o/i; // Must occur at least m times

// Paretheses () - Grouping
re = /([0-9]x){3}/i;

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric pr _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non-digit
re = /\s/; // Match Whitespaces char
re = /\S/; // Match Non-Whitespaces char
re = /Hell\b/i; // word boundary

// Assertion
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if Not followed by y

// String to match
const str = "ikubhgjhbgvjhxyjkbkjblk";

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} match ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
