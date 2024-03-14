sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
       

        return Controller.extend("logali.applist.controller.ListApp", {
            onInit: function () {
                

            },

            onShowSelectedRow: function() {
                var standardList = this.getView().byId("standardList");
                var selectedItems = standardList.getSelectedItems();

                var i18nModel = this.getView().getModel("i18n").getResourceBundle();

                if (selectedItems.length === 0) {
                    sap.m.MessageToast.show(i18nModel.getText("noSelection"));
                } else {

                    var textMessage = i18nModel.getText("selection");

                    for( var item in selectedItems) {
                        var context = selectedItems[item].getBindingContext();
                        var oContext = context.getObject();
                        textMessage = textMessage + " - " + oContext.Material;
                    }

                    sap.m.MessageToast.show(textMessage);

                }
            }
            
        });
    });
