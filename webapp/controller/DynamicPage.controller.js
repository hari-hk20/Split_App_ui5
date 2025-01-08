sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5.prac.interactiveui.controller.DynamicPage", {
        onInit() {
            const DataModel = new sap.ui.model.json.JSONModel("./model/data.json");
            this.getView().setModel(DataModel,"sampleData");
        },

        splitApp : function(){
            const res = this.byId("splitApp");
            if(!res){
                log.info("No SplitApp Object");
            }
            return res;
        },
        onListItemPress: function(oEvent){
            const detailId=oEvent.getParameter("listItem").getCustomData()[0].getValue();
            this.splitApp().toDetail(this.createId(detailId));
        },
        onPressMaster2 : function(oEvent){
            this.splitApp().toMaster(this.createId("mp2"));
        },
        onMasterPressBack : function(){
            this.splitApp().backMaster();
        },
        onDetailPressBack : function(){
            this.splitApp().backDetail();
        }

    });
});