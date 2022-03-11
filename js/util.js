function opcabinetdoor (_obj) {
  console.log(_obj);
  var doorstate = "close";
  var tempobj = null;
  if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
    doorstate = _obj.doorState;
    tempobj = _obj.parent;
  } else {
    console.log("add parent");
    var _objparent = _obj.parent;
    tempobj = new THREE.Object3D();
    tempobj.position.set(_obj.position.x, _obj.position.y, _obj.position.z + _obj.geometry.parameters.depth / 2);
    _obj.position.set(0, 0, -_obj.geometry.parameters.depth / 2);
    tempobj.add(_obj);
    _objparent.add(tempobj);
  }
  _obj.doorState = (doorstate == "close" ? "open" : "close");
  new createjs.Tween(tempobj.rotation).to({
    y: (doorstate == "close" ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
  }, 1000, createjs.Ease.linear);
}

function showEquipDetialInfo (_obj, func) {
  // $('#infoModal').css('display', 'block');
  $('#myModalLabel').text(getExecStrs(_obj.name))
  $('#equip-id').val(_obj.userData.equipID);
  $('#equip-state').val(_obj.userData.state);
  $('#equip-desc').val(_obj.userData.comment);
  $('#equip-type').val(_obj.userData.type);
  $('#equip-date').val(_obj.userData.created_at);
  $('#infoModal').modal('show');
}

function getExecStrs (str) {
  // console.log(str);
  var list = str.split('_');
  // console.log(list);
  return list[0]
}

function openRightDoor (_obj, func) {
  var doorstate = "close";
  var tempobj = null;
  if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
    doorstate = _obj.doorState;
    tempobj = _obj.parent;
  } else {
    console.log("add parent");
    var _objparent = _obj.parent;
    tempobj = new THREE.Object3D();
    console.log(_obj);
    tempobj.position.set(_obj.position.x + _obj.geometry.parameters.width / 2, _obj.position.y, _obj.position.z);
    console.log(tempobj);
    _obj.position.set(-_obj.geometry.parameters.width / 2, 0, 0);
    tempobj.add(_obj);
    _objparent.add(tempobj);
  }
  _obj.doorState = (doorstate == "close" ? "open" : "close");
  new createjs.Tween(tempobj.rotation).to({
    y: (doorstate == "close" ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
  }, 10000, createjs.Ease.elasticOut);
}

function openLeftDoor (_obj, func) {
  var doorstate = "close";
  var tempobj = null;
  if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
    doorstate = _obj.doorState;
    tempobj = _obj.parent;
  } else {
    console.log("add parent");
    var _objparent = _obj.parent;
    tempobj = new THREE.Object3D();
    console.log(_obj);
    tempobj.position.set(_obj.position.x - _obj.geometry.parameters.width / 2, _obj.position.y, _obj.position.z);
    console.log(tempobj);
    _obj.position.set(_obj.geometry.parameters.width / 2, 0, 0);
    tempobj.add(_obj);
    _objparent.add(tempobj);
  }
  _obj.doorState = (doorstate == "close" ? "open" : "close");
  new createjs.Tween(tempobj.rotation).to({
    y: (doorstate == "close" ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
  }, 10000, createjs.Ease.elasticOut);
}

function openWallRightDoor (_obj, func) {
  var doorstate = "close";
  var tempobj = null;
  if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
    doorstate = _obj.doorState;
    tempobj = _obj.parent;
  } else {
    console.log("add parent");
    var _objparent = _obj.parent;
    tempobj = new THREE.Object3D();
    console.log(_obj);
    tempobj.position.set(_obj.position.x, _obj.position.y, _obj.position.z + _obj.geometry.parameters.depth / 2);
    console.log(tempobj);
    _obj.position.set(0, 0, - _obj.geometry.parameters.depth / 2);
    tempobj.add(_obj);
    _objparent.add(tempobj);
  }
  _obj.doorState = (doorstate == "close" ? "open" : "close");
  new createjs.Tween(tempobj.rotation).to({
    y: (doorstate == "close" ? 0.5 * Math.PI : 0 * 2 * Math.PI)
  }, 10000, createjs.Ease.elasticOut);
}

function openfrontRightDoor (_obj, func) {
  var doorstate = "close";
  var tempobj = null;
  if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
    doorstate = _obj.doorState;
    tempobj = _obj.parent;
  } else {
    console.log("add parent");
    var _objparent = _obj.parent;
    tempobj = new THREE.Object3D();
    console.log(_obj);
    tempobj.position.set(_obj.position.x, _obj.position.y, _obj.position.z + _obj.geometry.parameters.depth / 2);
    console.log(tempobj);
    _obj.position.set(0, 0, - _obj.geometry.parameters.depth / 2);
    tempobj.add(_obj);
    _objparent.add(tempobj);
  }
  _obj.doorState = (doorstate == "close" ? "open" : "close");
  new createjs.Tween(tempobj.rotation).to({
    y: (doorstate == "close" ? 0.5 * Math.PI : 0 * 2 * Math.PI)
  }, 10000, createjs.Ease.elasticOut);
}