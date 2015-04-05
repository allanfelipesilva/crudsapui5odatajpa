sap.ui.controller("flightweb.index", {
	onInit : function(evt) {

		this.getView().addDelegate(
				{
					onBeforeShow : function(evt) {
						var oModel = new sap.ui.model.odata.ODataModel(
								"FlightOData.svc/");
						evt.to.setModel(oModel);
					}
				});
	},

	onAdd : function(evt) {
		app.to("addflight");
	},
	onDetailPress : function(event) {
		var bindingContext = event.getSource().getBindingContext();
		var flightid = bindingContext.getProperty("Id");
		var myObject = bindingContext.getObject();
		app.to("addflight", "slide", bindingContext);

	}
});