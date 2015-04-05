sap.ui
		.controller(
				"flightweb.AddFlight",
				{
					handleNavButtonPress : function(evt) {
						app.back();
					},
					onInit : function(oEvent) {
						this
								.getView()
								.addDelegate(
										{
											onBeforeShow : function(evt) {
												if (this.direction != "back") {
													if (evt.data.oModel != null) {
														evt.to.setModel(evt.data.oModel);
														evt.to.setBindingContext(evt.data);
													} else {
														var oModel = new sap.ui.model.odata.ODataModel("FlightOData.svc/");
														evt.to.setModel(oModel);
														evt.to.byId("departure").setValue("");
														evt.to.byId("destination").setValue("");
														evt.to.byId("id").setValue("");
													}
												}
											}
										});
					},

					handleCancelPress : function() {
						app.back();
					},

					handleDeletePress : function() {
						var oModel = this.getView().getModel();
						var flightid = this.getView().byId("id").getValue();
						oModel.remove("/Flights(" + flightid + "L)");
						oModel.refresh();
						app.back();

					},

					handleSavePress : function(evt) {
						var oModel = this.getView().getModel();

						var vProperties = {};
						vProperties.Id = this.getView().byId("id").getValue();
						vProperties.Departure = this.getView()
								.byId("departure").getValue();
						vProperties.Destination = this.getView().byId(
								"destination").getValue();
						if (vProperties.Id == "") {
							vProperties.Id = 0;
							oModel.createEntry("Flights", vProperties);

						} else {
							var oEntry = {};
							var mParameters = {};
							mParameters.context = this.getView()
									.getBindingContext();
							mParameters.success = this._fnSuccess;
							mParameters.error = this._fnError;
							oEntry.Departure = vProperties.Departure;
							oEntry.Destination = vProperties.Destination;
							oModel.update("", oEntry, mParameters);
						}
						oModel.submitChanges(this._fnSuccess, this._fnError);
						oModel.refresh();

					},
					_fnSuccess : function() {
						jQuery.sap.require("sap.m.MessageToast");
						sap.m.MessageToast.show("Success");
						app.back();

					},
					_fnError : function() {
						jQuery.sap.require("sap.m.MessageToast");
						sap.m.MessageToast.show("Error");

					}

				});