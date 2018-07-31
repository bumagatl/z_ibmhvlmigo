sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.ibm.hvl.goods.issue.Z_MIGO.controller.Home", {
		
	onInit: function() {
		this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	},
	
	onNextPresed: function() {
		sap.m.MessageToast.show("Next Please!!!!!");
		this.oRouter.navTo("OrderList");
		// this.oRouter.getTarget("OrderList").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
	},
	
	onAccountTypeSelect: function(oEvent) {
		var oSelectedIndex = oEvent.getSource().getSelectedIndex();
		var oSelectedAccount = oEvent.getSource().getAggregation("buttons")[oSelectedIndex].getText();
		this.getView().byId("idAccountTypeLabel").setText(oSelectedAccount);	
	}
	
	});
});