var msjstation;

function threeStart () {
  var initOption = {
    antialias: true,
    showHelpGrid: false, // 辅助线
    clearCoolr: 0x225F93,  // 背景色彩
    divHeight: $(document).height(),
    divWidth: $(document).width()
  };
  msjstation = new msj3D();
  var Aobjects = {
    objects: [
      //地板
      {
        show: true,
        uuid: "",
        name: 'floor',
        objType: 'floor',
        length: 3000,
        width: 1600,
        height: 10,
        rotation: [{ direction: 'x', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle] 
        x: 0,
        y: 0,
        z: 0,
        style: {
          skinColor: 0x8ac9e2,
          skin: {
            skin_up: {
              skinColor: 0x98750f,
              imgurl: "images/floor.jpg",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128
            },
            skin_down: {
              skinColor: 0x8ac9e2,
            },
            skin_fore: {
              skinColor: 0x8ac9e2,
            }
          }
        }
      },
      // 墙体
      {
        show: true,
        uuid: "",
        name: 'wall',
        objType: 'wall',
        thick: 20,
        length: 100,
        height: 240,
        wallData: [
          {
            // back wall
            uuid: "",
            name: 'wall_back',
            thick: 20,
            height: 240,
            skin: {
              skin_up: {
                skinColor: 0xdddddd,
              },
              skin_down: {
                skinColor: 0xdddddd,
              },
              skin_fore: {
                skinColor: 0xb0cee0,
              },
              skin_behind: {
                skinColor: 0xb0cee0,
              },
              skin_left: {
                skinColor: 0xb0cee0,
              },
              skin_right: {
                skinColor: 0xdeeeee,
              }
            },
            startDot: {
              x: -450,
              y: 120,
              z: 505
            },
            endDot: {
              x: 450,
              y: 120,
              z: 505
            },
            rotation: [{ direction: 'x', degree: 0 }],
            childrens: [
              {
                op: '-',
                show: true,
                uuid: "",
                name: 'doorhole',
                objType: 'doorhole',
                thick: 20,
                height: 220,
                startDot: {
                  x: 410,
                  y: 110,
                  z: 505
                },
                endDot: {
                  x: 310,
                  y: 110,
                  z: 505
                },
                skin: {
                  skin_up: {
                    skinColor: 0xffdddd,
                  },
                  skin_down: {
                    skinColor: 0xdddddd,
                  },
                  skin_fore: {
                    skinColor: 0xffdddd,
                  },
                  skin_behind: {
                    skinColor: 0xffdddd,
                  },
                  skin_left: {
                    skinColor: 0xffdddd,
                  },
                  skin_right: {
                    skinColor: 0xffdddd,
                  }
                },
              },
              {
                show: true,
                uuid: "",
                name: 'doorCaseRight',
                objType: 'cube',
                thick: 24,
                height: 220,
                startDot: {
                  x: 410,
                  y: 110,
                  z: 505
                },
                endDot: {
                  x: 405,
                  y: 110,
                  z: 505
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorCaseLeft',
                uuid: "",
                objType: 'cube',
                thick: 24,
                height: 220,
                startDot: {
                  x: 310,
                  y: 110,
                  z: 505
                },
                endDot: {
                  x: 305,
                  y: 110,
                  z: 505
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorCaseTop',
                uuid: "",
                objType: 'cube',
                thick: 24,
                height: 5,
                startDot: {
                  x: 305,
                  y: 220,
                  z: 505
                },
                endDot: {
                  x: 410,
                  y: 220,
                  z: 505
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorCaseBottom',
                uuid: "",
                objType: 'cube',
                thick: 24,
                height: 5,
                startDot: {
                  x: 305,
                  y: 5,
                  z: 505
                },
                endDot: {
                  x: 410,
                  y: 5,
                  z: 505
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorRight',
                uuid: "",
                objType: 'cube',
                thick: 4,
                height: 210,
                startDot: {
                  x: 311,
                  y: 112,
                  z: 505
                },
                endDot: {
                  x: 415,
                  y: 112,
                  z: 505
                },
                skin: {
                  opacity: 0.1,
                  skin_up: {
                    skinColor: 0x51443e,
                  },
                  skin_down: {
                    skinColor: 0x51443e,
                  },
                  skin_fore: {
                    skinColor: 0x51443e,
                  },
                  skin_behind: {
                    skinColor: 0x51443e,
                  },
                  skin_left: {
                    skinColor: 0x51443e,
                    imgurl: "images/door_left.png",
                  },
                  skin_right: {
                    skinColor: 0x51443e,
                    imgurl: "images/door_right.png",
                  }
                },
              },
            ]
          }, {
            // left wall
            uuid: "",
            name: 'wall_left',
            thick: 20,
            height: 240,
            skin: {
              skin_up: {
                skinColor: 0xdddddd,
              },
              skin_down: {
                skinColor: 0xdddddd,
              },
              skin_fore: {
                skinColor: 0xb0cee0,
              },
              skin_behind: {
                skinColor: 0xb0cee0,
              },
              skin_left: {
                skinColor: 0xb0cee0,
              },
              skin_right: {
                skinColor: 0xdeeeee,
              }
            },
            startDot: {
              x: 460,
              y: 120,
              z: 515
            },
            endDot: {
              x: 460,
              y: 120,
              z: -295
            },
          }, {
            // right wall
            uuid: "",
            name: 'wall_right',
            thick: 20,
            height: 240,
            skin: {
              skin_up: {
                skinColor: 0xdddddd,
              },
              skin_down: {
                skinColor: 0xdddddd,
              },
              skin_fore: {
                skinColor: 0xb0cee0,
              },
              skin_behind: {
                skinColor: 0xb0cee0,
              },
              skin_left: {
                skinColor: 0xb0cee0,
              },
              skin_right: {
                skinColor: 0xdeeeee,
              }
            },
            startDot: {
              x: -460,
              y: 120,
              z: 515
            },
            endDot: {
              x: -460,
              y: 120,
              z: -515
            },
            rotation: [{ direction: 'x', degree: 0 }],
            childrens: [
              {
                op: '-',
                show: true,
                uuid: "",
                name: 'doorhole_1',
                objType: 'doorhole',
                thick: 20,
                height: 220,
                startDot: {
                  x: -460,
                  y: 110,
                  z: 365
                },
                endDot: {
                  x: -460,
                  y: 110,
                  z: 465
                },
                skin: {
                  skin_up: {
                    skinColor: 0xffdddd,
                  },
                  skin_down: {
                    skinColor: 0xdddddd,
                  },
                  skin_fore: {
                    skinColor: 0xffdddd,
                  },
                  skin_behind: {
                    skinColor: 0xffdddd,
                  },
                  skin_left: {
                    skinColor: 0xffdddd,
                  },
                  skin_right: {
                    skinColor: 0xffdddd,
                  }
                },
              },
              {
                show: true,
                uuid: "",
                name: 'doorCaseRight_1',
                objType: 'cube',
                thick: 24,
                height: 220,
                startDot: {
                  x: -460,
                  y: 110,
                  z: 460
                },
                endDot: {
                  x: -460,
                  y: 110,
                  z: 465
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorCaseLeft_1',
                uuid: "",
                objType: 'cube',
                thick: 24,
                height: 220,
                startDot: {
                  x: -460,
                  y: 110,
                  z: 360
                },
                endDot: {
                  x: -460,
                  y: 110,
                  z: 365
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorCaseTop_1',
                uuid: "",
                objType: 'cube',
                thick: 24,
                height: 5,
                startDot: {
                  x: -460,
                  y: 220,
                  z: 360
                },
                endDot: {
                  x: -460,
                  y: 220,
                  z: 465
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorCaseBottom_1',
                uuid: "",
                objType: 'cube',
                thick: 24,
                height: 5,
                startDot: {
                  x: -460,
                  y: 5,
                  z: 360
                },
                endDot: {
                  x: -460,
                  y: 5,
                  z: 460
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                op: '-',
                show: true,
                uuid: "",
                name: 'doorhole_2',
                objType: 'doorhole',
                thick: 20,
                height: 220,
                startDot: {
                  x: -460,
                  y: 110,
                  z: -295
                },
                endDot: {
                  x: -460,
                  y: 110,
                  z: -80
                },
                skin: {
                  skin_up: {
                    skinColor: 0xffdddd,
                  },
                  skin_down: {
                    skinColor: 0xdddddd,
                  },
                  skin_fore: {
                    skinColor: 0xffdddd,
                  },
                  skin_behind: {
                    skinColor: 0xffdddd,
                  },
                  skin_left: {
                    skinColor: 0xffdddd,
                  },
                  skin_right: {
                    skinColor: 0xffdddd,
                  }
                },
              },
              {
                show: true,
                uuid: "",
                name: 'doorCaseRight_2',
                objType: 'cube',
                thick: 24,
                height: 220,
                startDot: {
                  x: -460,
                  y: 110,
                  z: -85
                },
                endDot: {
                  x: -460,
                  y: 110,
                  z: -80
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorCaseLeft_2',
                uuid: "",
                objType: 'cube',
                thick: 24,
                height: 220,
                startDot: {
                  x: -460,
                  y: 110,
                  z: -295
                },
                endDot: {
                  x: -460,
                  y: 110,
                  z: -300
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorCaseTop_2',
                uuid: "",
                objType: 'cube',
                thick: 24,
                height: 5,
                startDot: {
                  x: -460,
                  y: 220,
                  z: -300
                },
                endDot: {
                  x: -460,
                  y: 220,
                  z: -80
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorCaseBottom_2',
                uuid: "",
                objType: 'cube',
                thick: 24,
                height: 5,
                startDot: {
                  x: -460,
                  y: 5,
                  z: -300
                },
                endDot: {
                  x: -460,
                  y: 5,
                  z: -80
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorRight_1',
                uuid: "",
                objType: 'cube',
                thick: 4,
                height: 210,
                startDot: {
                  x: -460,
                  y: 112,
                  z: 358
                },
                endDot: {
                  x: -460,
                  y: 112,
                  z: 470
                },
                skin: {
                  opacity: 0.1,
                  skin_up: {
                    skinColor: 0x51443e,
                  },
                  skin_down: {
                    skinColor: 0x51443e,
                  },
                  skin_fore: {
                    skinColor: 0x51443e,
                    imgurl: "images/door_left.png",
                  },
                  skin_behind: {
                    skinColor: 0x51443e,
                    imgurl: "images/door_right.png",
                  },
                  skin_left: {
                    skinColor: 0x51443e,
                  },
                  skin_right: {
                    skinColor: 0x51443e,
                  }
                },
              },
              {
                show: true,
                name: 'doorRight_2',
                uuid: "",
                objType: 'cube',
                thick: 4,
                height: 210,
                startDot: {
                  x: -460,
                  y: 112,
                  z: -294
                },
                endDot: {
                  x: -460,
                  y: 112,
                  z: -190
                },
                skin: {
                  opacity: 0.1,
                  skin_up: {
                    skinColor: 0x51443e,
                  },
                  skin_down: {
                    skinColor: 0x51443e,
                  },
                  skin_fore: {
                    skinColor: 0x51443e,
                    imgurl: "images/door_right.png",
                  },
                  skin_behind: {
                    skinColor: 0x51443e,
                    imgurl: "images/door_left.png",
                  },
                  skin_left: {
                    skinColor: 0x51443e,
                  },
                  skin_right: {
                    skinColor: 0x51443e,
                  }
                },
              },
              {
                show: true,
                name: 'doorLeft_1',
                uuid: "",
                objType: 'cube',
                thick: 4,
                height: 210,
                startDot: {
                  x: -460,
                  y: 112,
                  z: -190
                },
                endDot: {
                  x: -460,
                  y: 112,
                  z: -86
                },
                skin: {
                  opacity: 0.1,
                  skin_up: {
                    skinColor: 0x51443e,
                  },
                  skin_down: {
                    skinColor: 0x51443e,
                  },
                  skin_fore: {
                    skinColor: 0x51443e,
                    imgurl: "images/door_left.png",
                  },
                  skin_behind: {
                    skinColor: 0x51443e,
                    imgurl: "images/door_right.png",
                  },
                  skin_left: {
                    skinColor: 0x51443e,
                  },
                  skin_right: {
                    skinColor: 0x51443e,
                  }
                },
              },
            ]
          }, {
            // front wall left
            uuid: "",
            name: 'wall_front_l',
            thick: 20,
            height: 240,
            skin: {
              skin_up: {
                skinColor: 0xdddddd,
              },
              skin_down: {
                skinColor: 0xdddddd,
              },
              skin_fore: {
                skinColor: 0xb0cee0,
              },
              skin_behind: {
                skinColor: 0xb0cee0,
              },
              skin_left: {
                skinColor: 0xb0cee0,
              },
              skin_right: {
                skinColor: 0xdeeeee,
              }
            },
            startDot: {
              x: -90,
              y: 120,
              z: -305
            },
            endDot: {
              x: 470,
              y: 120,
              z: -305
            },
            rotation: [{ direction: 'x', degree: 0 }],
            childrens: [
              {
                op: '-',
                show: true,
                uuid: "",
                name: 'doorhole',
                objType: 'doorhole',
                thick: 20,
                height: 220,
                startDot: {
                  x: 50,
                  y: 110,
                  z: -305
                },
                endDot: {
                  x: 150,
                  y: 110,
                  z: -305
                },
                skin: {
                  skin_up: {
                    skinColor: 0xffdddd,
                  },
                  skin_down: {
                    skinColor: 0xdddddd,
                  },
                  skin_fore: {
                    skinColor: 0xffdddd,
                  },
                  skin_behind: {
                    skinColor: 0xffdddd,
                  },
                  skin_left: {
                    skinColor: 0xffdddd,
                  },
                  skin_right: {
                    skinColor: 0xffdddd,
                  }
                },
              },
              {
                show: true,
                uuid: "",
                name: 'doorCaseRight',
                objType: 'cube',
                thick: 24,
                height: 220,
                startDot: {
                  x: 50,
                  y: 110,
                  z: -305
                },
                endDot: {
                  x: 45,
                  y: 110,
                  z: -305
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorCaseLeft',
                uuid: "",
                objType: 'cube',
                thick: 24,
                height: 220,
                startDot: {
                  x: 155,
                  y: 110,
                  z: -305
                },
                endDot: {
                  x: 150,
                  y: 110,
                  z: -305
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorCaseTop',
                uuid: "",
                objType: 'cube',
                thick: 24,
                height: 5,
                startDot: {
                  x: 45,
                  y: 220,
                  z: -305
                },
                endDot: {
                  x: 155,
                  y: 220,
                  z: -305
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorCaseBottom',
                uuid: "",
                objType: 'cube',
                thick: 24,
                height: 5,
                startDot: {
                  x: 45,
                  y: 5,
                  z: -305
                },
                endDot: {
                  x: 155,
                  y: 5,
                  z: -305
                },
                skin: {
                  skin_up: {
                    skinColor: 0xc0dee0,
                  },
                  skin_down: {
                    skinColor: 0xc0dee0,
                  },
                  skin_fore: {
                    skinColor: 0xc0dee0,
                  },
                  skin_behind: {
                    skinColor: 0xc0dee0,
                  },
                  skin_left: {
                    skinColor: 0xd0eef0,
                  },
                  skin_right: {
                    skinColor: 0xd0eef0,
                  }
                },
              },
              {
                show: true,
                name: 'doorRight_f',
                uuid: "",
                objType: 'cube',
                thick: 4,
                height: 210,
                startDot: {
                  x: 51,
                  y: 112,
                  z: -305
                },
                endDot: {
                  x: 155,
                  y: 112,
                  z: -305
                },
                skin: {
                  opacity: 0.1,
                  skin_up: {
                    skinColor: 0x51443e,
                  },
                  skin_down: {
                    skinColor: 0x51443e,
                  },
                  skin_fore: {
                    skinColor: 0x51443e,
                  },
                  skin_behind: {
                    skinColor: 0x51443e,
                  },
                  skin_left: {
                    skinColor: 0x51443e,
                    imgurl: "images/door_right.png",
                  },
                  skin_right: {
                    skinColor: 0x51443e,
                    imgurl: "images/door_left.png",
                  }
                },
              },
            ]
          }, {
            // front wall
            uuid: "",
            name: 'wall_front_mid',
            thick: 20,
            height: 240,
            skin: {
              skin_up: {
                skinColor: 0xdddddd,
              },
              skin_down: {
                skinColor: 0xdddddd,
              },
              skin_fore: {
                skinColor: 0xb0cee0,
              },
              skin_behind: {
                skinColor: 0xb0cee0,
              },
              skin_left: {
                skinColor: 0xb0cee0,
              },
              skin_right: {
                skinColor: 0xdeeeee,
              }
            },
            startDot: {
              x: -80,
              y: 120,
              z: -305
            },
            endDot: {
              x: -80,
              y: 120,
              z: -515
            },
          }, {
            // front wall r
            uuid: "",
            name: 'wall_front_r',
            thick: 20,
            height: 240,
            skin: {
              skin_up: {
                skinColor: 0xdddddd,
              },
              skin_down: {
                skinColor: 0xdddddd,
              },
              skin_fore: {
                skinColor: 0xb0cee0,
              },
              skin_behind: {
                skinColor: 0xb0cee0,
              },
              skin_left: {
                skinColor: 0xb0cee0,
              },
              skin_right: {
                skinColor: 0xdeeeee,
              }
            },
            startDot: {
              x: -70,
              y: 120,
              z: -525
            },
            endDot: {
              x: -470,
              y: 120,
              z: -525
            },
          }
        ],
        style: {
          skinColor: 0x8ac9e2
        }
      },
      // 桌子
      {
        show: true,
        uuid: "",
        name: 'desk',
        objType: 'cube',
        length: 250,
        thick: 2,
        height: 5,
        width: 100,
        x: -265,
        y: 110,
        z: -470,
        style: {
          skin: {
            skin_up: {
              skinColor: 0xffdddd,
              imgurl: 'images/desk.jpg'
            },
            skin_down: {
              skinColor: 0xdddddd,
              imgurl: 'images/desk.jpg'
            },
            skin_fore: {
              skinColor: 0xffdddd,
              imgurl: 'images/desk.jpg'
            },
            skin_behind: {
              skinColor: 0xffdddd,
              imgurl: 'images/desk.jpg'
            },
            skin_left: {
              skinColor: 0xffdddd,
              imgurl: 'images/desk.jpg'
            },
            skin_right: {
              skinColor: 0xffdddd,
              imgurl: 'images/desk.jpg'
            }
          },
        }
      },
      // 空调
      {
        show: true,
        uuid: "",
        name: 'aircondition_1',
        objType: 'cube',
        length: 60,
        width: 80,
        height: 220,
        // rotation: [{ direction: 'y', degree: 0.3 * Math.PI }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle] 
        x: -420,
        y: 110,
        z: 250,
        style: {
          skinColor: 0xfefefe,
          skin: {
            skin_fore: {
              imgurl: "images/aircondition.jpg",
            },
          }
        }
      },
      // 空调
      {
        show: true,
        uuid: "",
        name: 'aircondition_1',
        objType: 'cube',
        length: 60,
        width: 80,
        height: 220,
        // rotation: [{ direction: 'y', degree: 0.3 * Math.PI }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle] 
        x: -420,
        y: 110,
        z: 30,
        style: {
          skinColor: 0xfefefe,
          skin: {
            skin_fore: {
              imgurl: "images/aircondition.jpg",
            },
          }
        }
      },
      //机柜1-1 --原型
      {
        show: true,
        name: 'cabinet_监控主机兼操作员站数据服务器柜',
        shellname: '监控主机兼操作员站数据服务器柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 90, width: 60, height: 200, thick: 2 },
        position: { x: -125, y: 105, z: -330 },
        userData: {
          equipID: '38741274982',
          state: '运行中',
          created_at: "2021年10月21日",
          comment: '测试',
          type: '1',
          msg: 'hello world'
        },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet1_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_1.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜1-2 --原型
      {
        show: true,
        name: 'cabinet1_2',
        shellname: '综合应用服务器柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 90, width: 60, height: 200, thick: 2 },
        position: { x: -125, y: 105, z: -270 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet1_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_2.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜1-3 --原型
      {
        show: true,
        name: 'cabinet1_3',
        shellname: '数据通信网关机柜Ⅰ_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: -140, y: 105, z: -210 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet1_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_3.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜1-4 --原型
      {
        show: true,
        name: 'cabinet1_4',
        shellname: '数据通信网关机柜Ⅱ_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: -140, y: 105, z: -150 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet1_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_4.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜1-5 --原型
      {
        show: true,
        name: 'cabinet1_5',
        shellname: '调度数据网及二次安防设备柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: -140, y: 105, z: -90 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet1_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_5.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜1-6 --原型
      {
        show: true,
        name: 'cabinet1_6',
        shellname: '主压器电能表及电量采集柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: -140, y: 105, z: -30 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet1_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_6.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜1-7 --原型
      {
        show: true,
        name: 'cabinet1_7',
        shellname: '110kV 母线保护柜 _equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: -140, y: 105, z: 30 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet1_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_7.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜1-8 --原型
      {
        show: true,
        name: 'cabinet1_8',
        shellname: '时间同步系统柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: -140, y: 105, z: 90 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet1_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_8.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜1-9 --原型
      {
        show: true,
        name: 'cabinet1_9',
        shellname: '低频低压减载柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: -140, y: 105, z: 150 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet1_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_9.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜1-10 --原型
      {
        show: true,
        name: 'cabinet1_9',
        shellname: '网络报文记录分析柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: -140, y: 105, z: 210 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet1_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_10.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜1-11 --原型
      {
        show: true,
        name: 'cabinet1_11',
        shellname: '故障波装置柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: -140, y: 105, z: 270 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet1_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_11.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜2-12 --原型
      {
        show: true,
        name: 'cabinet2_12',
        shellname: '备用1_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 40, y: 105, z: -330 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet2_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_0.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜2-13 --原型
      {
        show: true,
        name: 'cabinet2_13',
        shellname: '备用2_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 40, y: 105, z: -270 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet2_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_0.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜2-14 --原型
      {
        show: true,
        name: 'cabinet2_14',
        shellname: '备用3_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 40, y: 105, z: -210 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet2_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_0.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜2-15 --原型
      {
        show: true,
        name: 'cabinet2_15',
        shellname: '备用4_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 40, y: 105, z: -150 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet2_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_0.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜2-16 --原型
      {
        show: true,
        name: 'cabinet2_16',
        shellname: '备用5_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 40, y: 105, z: -90 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet2_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_0.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜2-17 --原型
      {
        show: true,
        name: 'cabinet2_17',
        shellname: '公用测控柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 40, y: 105, z: -30 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet2_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_17.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜2-18 --原型
      {
        show: true,
        name: 'cabinet2_18',
        shellname: '10kV 公用测控柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 40, y: 105, z: 30 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet2_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_18.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜2-19 --原型
      {
        show: true,
        name: 'cabinet2_19',
        shellname: '#1 主变保护柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 40, y: 105, z: 90 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet2_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_19.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜2-20 --原型
      {
        show: true,
        name: 'cabinet2_20',
        shellname: '#1 主变测控柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 40, y: 105, z: 150 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet2_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_20.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜2-21 --原型
      {
        show: true,
        name: 'cabinet2_21',
        shellname: '#2 主变保护柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 40, y: 105, z: 210 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet2_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_21.jpg",
            }
          }],
          children: {
            op: '+',
            show: true,
            uuid: "",
            name: 'titleboard',
            objType: 'titleboard',
            thick: 3,
            height: 10,
            skin: {
              skinColor: 0x333333,
              skin_behind: {
                message: '监控主机兼操作员站数据服务器柜',
                width: 60,
                height: 20
              }
            },
          }
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜2-22--原型
      {
        show: true,
        name: 'cabinet2_22',
        shellname: '#2 主变测控柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 40, y: 105, z: 270 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet2_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_22.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜3-23 --原型
      {
        show: true,
        name: 'cabinet3_23',
        shellname: '智能辅助系统控制柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 80, height: 200, thick: 2 },
        position: { x: 220, y: 105, z: -320 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet3_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_23.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜3-24 --原型
      {
        show: true,
        name: 'cabinet3_24',
        shellname: '智能辅助系统控制柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 80, height: 200, thick: 2 },
        position: { x: 220, y: 105, z: -240 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet3_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_23.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜3-25 --原型
      {
        show: true,
        name: 'cabinet3_25',
        shellname: '动力照明配电柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 80, height: 200, thick: 2 },
        position: { x: 220, y: 105, z: -160 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet3_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_25.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜3-26 --原型
      {
        show: true,
        name: 'cabinet3_26',
        shellname: '动力照明配电柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 80, height: 200, thick: 2 },
        position: { x: 220, y: 105, z: -80 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet3_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_25.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜3-27 --原型
      {
        show: true,
        name: 'cabinet3_27',
        shellname: '配网自动化柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 80, height: 200, thick: 2 },
        position: { x: 220, y: 105, z: 0 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet3_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_27.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜3-28 --原型
      {
        show: true,
        name: 'cabinet3_28',
        shellname: '配网自动化柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 80, height: 200, thick: 2 },
        position: { x: 220, y: 105, z: 80 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet3_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_27.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜3-29 --原型
      {
        show: true,
        name: 'cabinet3_29',
        shellname: '通信设备柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 220, y: 105, z: 150 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet3_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_29.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜3-30 --原型
      {
        show: true,
        name: 'cabinet3_30',
        shellname: '通信设备柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 220, y: 105, z: 210 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet3_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_29.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜3-31 --原型
      {
        show: true,
        name: 'cabinet3_31',
        shellname: '风机控制柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 220, y: 105, z: 270 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet3_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_31.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜4-32 --原型
      {
        show: true,
        name: 'cabinet4_32',
        shellname: '交流进线柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 80, height: 200, thick: 2 },
        position: { x: 400, y: 105, z: -320 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet4_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_32.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜4-33 --原型
      {
        show: true,
        name: 'cabinet4_33',
        shellname: '交流馈线柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 80, height: 200, thick: 2 },
        position: { x: 400, y: 105, z: -240 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet4_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_33.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜4-34 --原型
      {
        show: true,
        name: 'cabinet4_34',
        shellname: 'UPS 电源柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 80, height: 200, thick: 2 },
        position: { x: 400, y: 105, z: -160 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet4_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_34.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜4-35 --原型
      {
        show: true,
        name: 'cabinet4_35',
        shellname: 'UPS 电源柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 80, height: 200, thick: 2 },
        position: { x: 400, y: 105, z: -80 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet4_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_34.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜4-36 --原型
      {
        show: true,
        name: 'cabinet4_36',
        shellname: '蓄电池柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 80, height: 200, thick: 2 },
        position: { x: 400, y: 105, z: 0 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet4_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_36.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜4-37 --原型
      {
        show: true,
        name: 'cabinet4_37',
        shellname: '蓄电池柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 80, height: 200, thick: 2 },
        position: { x: 400, y: 105, z: 80 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet4_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_36.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜4-38 --原型
      {
        show: true,
        name: 'cabinet4_38',
        shellname: '直流充电柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 400, y: 105, z: 150 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet4_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_38.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜4-39 --原型
      {
        show: true,
        name: 'cabinet4_39',
        shellname: '直流馈线柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 400, y: 105, z: 210 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet4_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_39.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      //机柜4-40 --原型
      {
        show: true,
        name: 'cabinet4_40',
        shellname: '通信电源柜_equipName',
        uuid: '',
        rotation: [{ direction: 'y', degree: -0.5 * Math.PI }],//旋转     uuid:'',
        objType: 'emptyCabinet',
        transparent: true,
        size: { length: 60, width: 60, height: 200, thick: 2 },
        position: { x: 400, y: 105, z: 270 },
        doors: {
          doorType: 'lr',// ud上下门 lr左右门 单门可以缺省
          doorSize: [1],
          doorname: ['cabinet4_1_door_01'],
          skins: [{
            skinColor: 0x333333,
            skin_fore: {
              imgurl: "images/rack_door_back.jpg",
            },
            skin_behind: {
              imgurl: "images/rack_front_door_40.jpg",
            }
          }],
        },
        skin: {
          skinColor: 0xff0000,
          skin_up: {
            skin: {
              skinColor: 0xffffff,
              skin_up: { imgurl: "images/rack_door_back.jpg" },
              skin_down: { imgurl: "images/rack_door_back.jpg" },
              skin_fore: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_behind: {
                skinColor: 0xff0000,
                imgurl: "images/rack_door_back.jpg"
              },
              skin_left: { imgurl: "images/rack_door_back.jpg" },
              skin_right: { imgurl: "images/rack_door_back.jpg" },
            }
          },
          skin_down: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_left: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_right: {
            skin: {
              skinColor: 0x333333,
            }
          },
          skin_behind: {
            skin: {
              skinColor: 0x333333,
            }
          }
        }
      },
      // //主机1
      // {
      //   show: true,
      //   uuid: "",
      //   name: 'equipment_card_1',
      //   objType: 'cube',
      //   length: 60,
      //   width: 65,
      //   height: 10,
      //   x: -100,
      //   y: 105,
      //   z: -180,
      //   style: {
      //     skinColor: 0xff0000,
      //     skin: {
      //       skin_up: {
      //         skinColor: 0xff0000,
      //         imgurl: "images/rack_inside.jpg",
      //       },
      //       skin_down: {
      //         skinColor: 0xff0000,
      //         imgurl: "images/rack_inside.jpg",
      //       },
      //       skin_fore: {
      //         skinColor: 0xff0000,
      //         imgurl: "images/rack_inside.jpg",
      //       },
      //       skin_behind: {
      //         skinColor: 0xff0000,
      //         imgurl: "images/server2.jpg",
      //       },
      //       skin_left: {
      //         skinColor: 0xff0000,
      //         imgurl: "images/rack_inside.jpg",
      //       },
      //       skin_right: {
      //         skinColor: 0xff0000,
      //         imgurl: "images/rack_inside.jpg",
      //       }
      //     }
      //   }
      // },
    ],
    events: {
      dbclick: [
        {
          obj_name: "doorRight",
          obj_uuid: "",
          obj_event: function (_obj) {
            openRightDoor(_obj, function () { });
          }
        },
        {
          obj_name: "doorRight_1",
          obj_uuid: "",
          obj_event: function (_obj) {
            openWallRightDoor(_obj, function () { });
          }
        },
        {
          obj_name: "doorLeft_1",
          obj_uuid: "",
          obj_event: function (_obj) {
            openWallRightDoor(_obj, function () { });
          }
        },
        {
          obj_name: "doorRight_f",
          obj_uuid: "",
          obj_event: function (_obj) {
            openLeftDoor(_obj, function () { });
          }
        },

        {
          obj_name: "doorLeft",
          obj_uuid: "",
          obj_event: function (_obj) {
            var doorstate = "close";
            var tempobj = null;
            if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
              doorstate = _obj.doorState;
              tempobj = _obj.parent;
            } else {
              console.log("add parent");
              var _objparent = _obj.parent;
              tempobj = new THREE.Object3D();
              tempobj.position.set(_obj.position.x + _obj.geometry.parameters.width / 2, _obj.position.y, _obj.position.z);
              _obj.position.set(-_obj.geometry.parameters.width / 2, 0, 0);
              tempobj.add(_obj);
              _objparent.add(tempobj);
            }
            _obj.doorState = (doorstate == "close" ? "open" : "close");
            new createjs.Tween(tempobj.rotation).to({
              y: (doorstate == "close" ? -0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
            }, 10000, createjs.Ease.elasticOut);
          }
        },
        {
          obj_name: "cabinetdoor3_1",
          obj_uuid: "",
          obj_event: function (_obj) {
            opcabinetdoor(_obj);
          }
        },
        {
          findObject: function (_objname) {//查找某一类符合名称的对象
            if (_objname.indexOf("cabinet") >= 0 && _objname.indexOf("door") >= 0) {
              return true;
            } else {
              return false;
            }
          },
          obj_uuid: "",
          obj_event: function (_obj) {
            opcabinetdoor(_obj);
          }
        },
        {
          findObject: function (_objname) {//查找某一类符合名称的对象
            if (_objname.indexOf("equipName") >= 0) {
              return true;
            } else {
              return false;
            }
          },
          obj_uuid: "",
          obj_event: function (_obj) {
            showEquipDetialInfo(_obj);
          }
        },
        {
          findObject: function (_objname) {//查找某一类符合名称的对象
            if (_objname.indexOf("equipment") >= 0 && _objname.indexOf("card") >= 0) {
              return true;
            } else {
              return false;
            }
          },
          obj_uuid: "",
          obj_event: function (_obj) {
            var cardstate = "in";
            if (_obj.cardstate != null && typeof (_obj.cardstate) != 'undefined') {
              cardstate = _obj.cardstate;
            } else {
              _obj.cardstate = "out";
            }
            new createjs.Tween(_obj.position).to({
              x: (cardstate == "in" ? _obj.position.x - 50 : _obj.position.x + 50),
            }, 1000, createjs.Ease.linear).call(function () { _obj.cardstate = cardstate == "in" ? "out" : "in"; });
          }
        }
      ],
      mouseDown: {
      },
      mouseUp: {
      },
      mouseMove: {
      }
    },
    btns: [
      {
        btnid: "btn_reset",
        btnTitle: "场景复位",
        btnimg: "images/reset.png",
        event: function () {
          $('#canvas-frame').empty();
          msjstation = null; msj3DObj = null;
          msjstation = new msj3D();
          msjstation.initmsj3D('canvas-frame', initOption, Aobjects);
          msjstation.start();
          // var mainCamera = msj3DObj.commonFunc.findObject("mainCamera");//主摄像机
          // new createjs.Tween(mainCamera.position).to({
          //    x: 0, y: 1000, z: -1800,
          // }, 1000,createjs.Ease.linear);
          // mainCamera.lookAt({ x: 0, y: 0, z: 0 });
        }
      },
      {
        btnid: "btn_connection",
        btnTitle: "走线管理",
        btnimg: "images/connection.png",
        event: function () {
        }
      },
      {
        btnid: "btn_usage",
        btnTitle: "机柜利用率",
        btnimg: "images/usage.png",
        event: function () {
        }
      },
      {
        btnid: "btn_edit",
        btnTitle: "拖拽机柜",
        btnimg: "images/edit.png",
        event: function () {
        }
      },
      {
        btnid: "btn_alarm",
        btnTitle: "告警巡航",
        btnimg: "images/alarm.png",
        event: function () {
          var mainCamera = msj3DObj.commonFunc.findObject("mainCamera");//主摄像机
          var doorRight = msj3DObj.commonFunc.findObject("doorRight");
          mainCamera.lookAt(doorRight.position);
          new createjs.Tween(mainCamera.position).to({
            x: 50, y: 200, z: -700,
          }, 5000, createjs.Ease.linear)
          // .call(function () {
          //   openRightDoor(msj3DObj.commonFunc.findObject("doorRight_f"), function () {
          //     var cabinet3_1 = msj3DObj.commonFunc.findObject("cabinet3_1");
          //     mainCamera.lookAt(cabinet3_1.position);
          //     new createjs.Tween(mainCamera.position).to({
          //       x: -300, y: 150, z: -200,
          //     }, 5000, createjs.Ease.linear).call(function () {
          //       mainCamera.lookAt(cabinet3_1.position);
          //     });
          //   });
          // });


        }
      },
    ]
  }

  //复制机柜
  for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 6; j++) {
      if (i != 1 || j != 1) {
        Aobjects.objects.push({
          show: true,
          copyfrom: 'cabinet1_1',
          name: 'cabinet' + i + '_' + j,
          childrenname: ['cabinet' + i + '_' + j + '_shell', 'cabinet' + i + '_' + j + '_door_01'],
          uuid: '',
          objType: 'cloneObj',
          position: { x: -(i - 1) * 200, y: 0, z: (j - 1) * 100 },
          scale: { x: 1, y: 1, z: 1 }
        });
      }
    }
  }
  msjstation.initmsj3D('canvas-frame', initOption, Aobjects);
  msjstation.start();
}

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

closeModal = function () {
  $("#infoModal").modal('hide');
  $('#equip-id').val('');
  $('#equip-title').val('');
  $('#equip-desc').val('');
  $('#equip-type').val('');
  $('#equip-type').val('');
}
