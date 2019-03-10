// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}


//Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return this.processedContent === reverse(processedContent);
  }
}



this.louder = function () {
  this.content.toUpperCase();
};

//Adds 'reverse' to all strings.
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
}

// Defines a TranslatedPhrase object.
function Phrase(content) {
  this.content = content;

  //Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }
  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
}
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
}
TranslatedPhrase.prototype = new Phrase();

String.prototype.blank = function () {
  const regex = /^\S$/gm;
  if (this.content === regex) {
    return false;
  }
  else {
    return true;
  }

  Array.prototype.last = function () {
    return this[-1];
  }

}