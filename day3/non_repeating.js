// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
function nonRepeating(s) {
    var st = s.toLowerCase();
    for (var i = 0; i < st.length; i++) {
        var con = st[i];
        if (st.indexOf(con) == st.lastIndexOf(con)) {
            return s[i];
        }
    }
    return " ";
}
console.log(nonRepeating("jemima"));
