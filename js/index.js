function toggleBtnText (obj) {
  var parent = $(obj).parents("div");
  var title = parent.children('#dropdownMenu1');
  var li_lists = parent.children('ul').children('li');
  for (var k = 0; k < li_lists.length; k++) { //对tabLi数组进行循环
    li_lists[k].index = k;
    li_lists[k].onclick = function () { //判断哪一个li标签被点击
      title.text($(this).children('a').text())
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