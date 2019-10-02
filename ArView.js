sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
    "use strict";
    return Control.extend("3DView.ArView", {
        metadata: {
            properties: {
                "src": "string",
                "iosSrc": "string",
                "alt": "string"
            }
        },

        renderer: function (oRm, oControl) {
            oRm.write("<div");
            oRm.writeControlData(oControl);
            oRm.write(">");
            oRm.write(`
                <model-viewer src="${oControl.getSrc()}"
                  ios-src="${oControl.getIosSrc()}"
                  alt="${oControl.getAlt()}"
                  camera-controls
                  interaction-prompt="auto"
                  auto-rotate
                  ar>
                </model-viewer>`);
            oRm.write("</div>");
        }
    });
});