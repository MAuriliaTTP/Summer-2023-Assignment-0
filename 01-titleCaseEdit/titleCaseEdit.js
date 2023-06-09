function titleCaseEdit(title) {
return title.replace(/\b\w/g, function(letter) {
    return letter.toUpperCase();
   })
}

console.log(titleCaseEdit("hello world"));
// Do not edit this line;
module.exports = titleCaseEdit;