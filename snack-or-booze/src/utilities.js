// caps first letter & returns
// ex.  "snacks" => "Snacks"
function Capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

// takes a plural noun and returns singular version
// ex.  "snacks" => "snack"
// for now just check if there is 's' at end, then chop it off!
function Singularize(s) {
  if (s.charAt(s.length - 1) == "s") {
    return s.slice(0, -1);
  } else {
    return s;
  }
}

// auto-generate an id from name of item, just remove spaces & replace with dashes
// ex.  "ice cream" => "ice-cream"
function generateId(s) {
  const newStr = s.replaceAll(" ", "-");
  return newStr;
}

export { Capitalize, Singularize, generateId };
