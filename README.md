gspreadsheet-convert-fn
=======================

A custom **'convert'** function for Google Docs/Spreadsheets that simplifies unit conversions. Supports currencies, length, volume, etc.  

Use in a Google Spreadsheet like any other formula is entered into a cell.

```javascript
=convert(quantity, from_unit, to_unit)
```

![screenshot](/screenshot.jpg)

A few examples:

```javascript
=convert(2, "gallons", "liters")
=convert(2, "gal", "L")

=convert(50, "USD", "INR")

=convert(10, "ft", "yard")
```

Units can be specified in somewhat of a flexible format.  Most abbreviations, unit-prefixes, and cases seem to work.

This function works by querying www.google.com/ig/calculator and parsing the JSON response. The service was originally designed for iGoogle gadgets.  Read more [here](http://www.dynamicguru.com/php/currency-conversion-using-php-and-google-calculator-api/).

I haven't tested out all the possible units that the service accepts, so if you're looking for a specific unit, it would be easiest to just this script out.

Feel free to report bugs or make changes!

*This function is similar to the 'convert' function in Microsoft Excel included in the [Analaysis ToolPak](http://office.microsoft.com/en-us/excel-help/convert-HP005209022.aspx).*