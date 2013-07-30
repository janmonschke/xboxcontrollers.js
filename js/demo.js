XBOXControllers.onUpdate = function(){
  var controllers = XBOXControllers.controllers;
  var infoContainer = document.getElementById('controller-info-container');

  infoContainer.innerHTML = '';

  for(var i = 0; i < controllers.length; i++){
    var currentController = controllers[i];
    if(!currentController)
      break;
    var controllerInfo = '<div class="controller-info seven columns">';
    controllerInfo += currentController.type;//currentController.id;

    controllerInfo += '<h2>Axes</h2>';
    var axes = currentController.axes;
    var allAxes = '<table>'
    for(var axeKey in axes){
      var axeInfo = '<tr>';
      axeInfo += '<td>' + axeKey + '</td>';
      axeInfo += '<td>' + axes[axeKey] + '</td>';
      axeInfo += '</tr>';
      allAxes += axeInfo;
    }
    allAxes += '</table>';
    controllerInfo += allAxes;

    controllerInfo += '<h2>Buttons</h2>';
    var buttons = currentController.buttons;
    var allButtons = '<table>'
    for(var buttonKey in buttons){
      var buttonInfo = '<tr>';
      buttonInfo += '<td>' + buttonKey + '</td>';
      buttonInfo += '<td>' + buttons[buttonKey] + '</td>';
      buttonInfo += '</tr>';
      allButtons += buttonInfo;
    }
    allButtons += '</table>';
    controllerInfo += allButtons;

    controllerInfo += '</div>';
    infoContainer.innerHTML += controllerInfo;
  }


};