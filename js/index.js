/**
 * 初始化选项
 */
var loadRoom = {};

/**
 * three.js 渲染工具
 */
var msjstation = new msj3D();

/**
 * 渲染入口
 * @param {*} room 需要渲染的房间
 */
function mainStart (room) {
  var initOption = {
    antialias: true,
    showHelpGrid: false, // 辅助线
    clearCoolr: 0x225F93,  // 背景色彩
    divHeight: $(document).height(),
    divWidth: $(document).width()
  };
  switch (room) {
    case 'testRoom':
      loadRoom = testRoom();
      window.location.href = '../template/' + room;
      break;
    default:
      loadRoom = initRoomFun();
      break;
  }
  console.log(loadRoom);
  msjstation.initmsj3D('canvas-frame', initOption, loadRoom);
  msjstation.start();
}

function toggleBtnText (obj) {
  var parent = $(obj).parents("div");
  var title = parent.children('#dropdownMenu1');
  var li_lists = parent.children('ul').children('li');
  for (var k = 0; k < li_lists.length; k++) { //对tabLi数组进行循环
    li_lists[k].index = k;
    li_lists[k].onclick = function () { //判断哪一个li标签被点击
      title.text($(this).children('a').text())
      mainStart('testRoom');
      // console.log(this.children('a').text());
    }
  }
}

function closeInfoModal () {
  $("#infoModal").modal('hide');
  $('#equip-id').val('');
  $('#equip-title').val('');
  $('#equip-desc').val('');
  $('#equip-type').val('');
  $('#equip-type').val('');
  openControlView();
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

function openControlView () {
  $('#myModal').modal('show');
}

function closeControlView () {
  $('#myModal').modal('hide');
}


