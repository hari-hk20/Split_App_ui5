/*global QUnit*/

sap.ui.define([
	"ui5prac/interactive_ui/controller/DynamicPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DynamicPage Controller");

	QUnit.test("I should test the DynamicPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
