sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.ibm.hvl.goods.issue.Z_MIGO.controller.Home", {
		
	onInit: function() {
		this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		this.getOwnerComponent().getModel();
	},
	
	onNextPressed: function() {
		sap.m.MessageToast.show("Next Please!!!!!");
		this.oRouter.navTo("OrderList");
		// this.oRouter.getTarget("OrderList").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
	},
	
	onAccountTypeSelect: function(oEvent) {
		var oSelectedIndex = oEvent.getSource().getSelectedIndex();
		var oSelectedAccount = oEvent.getSource().getAggregation("buttons")[oSelectedIndex].getText();
		this.getView().byId("idAccountTypeLabel").setText(oSelectedAccount);	
	},
	
	onValueHelpPressed: function(oEvent) {
		var that = this;
		var oSource = oEvent.getSource().getId();
		oSource = oSource.slice(oSource.lastIndexOf("-") + 1); 
		var oModel = this.getView().getModel();
		
		var sTitle;
		var sObjectTitle;
		var sObjectDesc;
		var sPath;
		
		if (oSource === "idPlantInput") {
			sTitle = "Plant";
			sPath = "PlantSet";
			sObjectTitle = "WERKS";
			sObjectDesc = "Description";
			if (this.oPlantDialog){
				this.oPlantDialog.open();
				return false;
			}
			
			
		} else if (oSource === "idStorLocInput") {
			sTitle = "Storage Location";
			sPath = "StorLocSet";
			sObjectTitle = "LGORT";
			sObjectDesc = "LGOBE";
			if (this.oStorLocDialog){
				this.oStorLocDialog.open();
				return false;
			}
			
		} else if (oSource === "idAccountInput"){
			sTitle = "Account";
			sPath = "AccountSet";
			sObjectTitle = "CostCenter";
			sObjectDesc = "CostCenter_text";
			if (this.oAccountDialog){
				this.oAccountDialog.open();
				return false;
			}
			
		}
		
		
		var oDialog = new sap.m.SelectDialog({
			title: "Select " + sTitle,
			id: oSource + "Dialog",
			multiSelect: false,
			items:	{
				path : "/" + sPath,
				template: new sap.m.StandardListItem({
					title: "{"+ sObjectTitle + "}",
					description: "{" + sObjectDesc + "}",
					active: true
				})
			},
			confirm: function() {

			}
		});
		
		if (oDialog.getId().indexOf("Plant") !== -1){
			this.oPlantDialog = oDialog;
		} else if (oDialog.getId().indexOf("StorLoc") !== -1){
			this.oStorLocDialog = oDialog;
		} else if (oDialog.getId().indexOf("Account") !== -1){
			this.oAccountDialog = oDialog;
		}
		
		
		oDialog.setModel(oModel);
		oDialog.open();
	}
	
	});
});