/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logali/applist/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
