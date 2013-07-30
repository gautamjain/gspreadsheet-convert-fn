// Convert quantity to another unit
//   fromQty: numeric value
//   fromUnits: units of fromQty (e.g. USD, gallons, meters)
//   toUnits: units of result (e.g. INR, ml, yards)
function convert(fromQty, fromUnits, toUnits) {
  // If cell is blank, return nothing
  if (fromQty == "") return;

  // Fetch conversion
  var q = 'http://www.google.com/ig/calculator?hl=en&q='+ fromQty + fromUnits + '=?' + toUnits;
  var response = UrlFetchApp.fetch(q).getContentText();
  
  // Parse the result
  var error = response.match(/error: "[^\"]+"/);
  if (error != null) { return error[0] }

  var rhs = response.match(/rhs: "([^\"]+)"/);
  if (rhs != null) { return formatResponse_(rhs[1]) }

  return "Unknown error: " + response;
}

// Remove thousand separator (space) and recode *10^NN
function formatResponse_(txt)
{
  txt = txt.replace(/\240/g, "");
  
  // Parse power
  var power = txt.match(/\\x26#215; 10\\x3csup\\x3e([0-9-]+)\\x3c\/sup\\x3e/);
  if (power != null) {power = power[1];} else {power = 0;}
  
  // Parse base and remove units
  txt = txt.replace(/\\x26#215; 10\\x3csup\\x3e([0-9-]+)\\x3c\/sup\\x3e/, "");
  var base = txt.replace(/[ a-zA-Z]+/, "");
  
  return base * Math.pow(10, power);
}
