
// CONTROLLER DEBUG TESTS #2
// MyTNBSX1-02-scripts.js
// Basic jogwheel implementation. No components JS usage. 
//

var TheNextBeatSX1 = {};
// eslint-disable-next-line no-var
TheNextBeatSX1.jogWheelA = function (channel, control, value, status, group) {

    var newValue;
    if (value < 64) {
        newValue = value;
    } else {
        newValue = value - 128;
    }
 

    engine.setValue('[Channel'+1+']', 'jog', newValue); // Pitch bend
    
}
TheNextBeatSX1.jogWheelB = function (channel, control, value, status, group) {

    var newValue;
    if (value < 64) {
        newValue = value;
    } else {
        newValue = value - 128;
    }
 

    engine.setValue('[Channel'+2+']', 'jog', newValue); // Pitch bend
    
}
 