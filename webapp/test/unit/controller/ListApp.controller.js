/*global QUnit*/

sap.ui.define([
	"logali/applist/controller/ListApp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListApp Controller");

	QUnit.test("I should test the ListApp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
