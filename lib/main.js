var contextMenu = require("sdk/context-menu");

var menuItem = contextMenu.Item({
  label: "No data.",
  contentScriptFile: "./converter.js",
});

var menu = contextMenu.Menu({
	label: "Temperature Converter",
	items: [menuItem],
	context: contextMenu.SelectionContext()
});