(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "start": "this.init()",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer"
 ],
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top",
 "minWidth": 20,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "definitions": [{
 "initialPosition": {
  "yaw": -92.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1FE5E873_3D97_D3D9_41C5_D7284103FA87",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -159.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F14376B_3D97_DDC9_41C6_8093FFD797F6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "L8",
 "hfovMin": "150%",
 "id": "panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_81B89F03_9038_B1B4_41DA_73793462FF2B",
  "this.overlay_2A2EE30A_3CEB_DCEE_41C8_4F111CBC1BA5",
  "this.panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_tcap0",
  "this.overlay_225D7363_3C95_635E_41A1_606E4ECD84DE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 113.39,
   "yaw": -3.92,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280"
  },
  {
   "backwardYaw": 29.98,
   "yaw": -147.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "K3",
 "hfovMin": "150%",
 "id": "panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80",
 "class": "Panorama",
 "overlays": [
  "this.overlay_83E333E0_9048_B074_41A4_26978617256C",
  "this.overlay_844A3345_904F_91BC_41B4_037230D1B690",
  "this.overlay_21F9592B_2FEF_9837_41C0_E75F079DBB08",
  "this.panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -36.7,
   "yaw": 95.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E8E47E_8DF4_F388_41E1_89D006C12552"
  },
  {
   "backwardYaw": -82.93,
   "yaw": -85.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 5.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F85D843_3D97_D339_41C8_BCFCCAAAED01",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -178.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E3138C3_3D97_D339_41C9_FCA8FDB0CA70",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "playList": "this.album_243A15D2_35B9_4036_41C1_4C162D229716_AlbumPlayList",
 "thumbnailUrl": "media/album_243A15D2_35B9_4036_41C1_4C162D229716_t.png",
 "id": "album_243A15D2_35B9_4036_41C1_4C162D229716",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_7410"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 121.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1EA4398B_3D97_D548_41B5_B9EEEDC9D7A5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "playList": "this.album_229F8F5F_2FFB_980F_41BB_C54A49DC04F2_AlbumPlayList",
 "thumbnailUrl": "media/album_229F8F5F_2FFB_980F_41BB_C54A49DC04F2_t.png",
 "id": "album_229F8F5F_2FFB_980F_41BB_C54A49DC04F2",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_7389"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GS__6152",
 "hfovMin": "150%",
 "id": "panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2AACAC5C_3CFB_2569_4191_28DBAC93B288",
  "this.panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -166.4,
   "yaw": 5.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_304858B4_3C95_2D39_4191_C59258F377A1"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_t.jpg",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/album_243A15D2_35B9_4036_41C1_4C162D229716_0_t.jpg",
 "id": "album_243A15D2_35B9_4036_41C1_4C162D229716_0",
 "class": "Photo",
 "width": 3024,
 "duration": 5000,
 "image": {
  "levels": [
   {
    "url": "media/album_243A15D2_35B9_4036_41C1_4C162D229716_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "IMG_7410",
 "height": 4032
},
{
 "initialPosition": {
  "yaw": -87.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1FB9C7F3_3D97_DCD9_41AC_D5C43C2B13B8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 2.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E73D923_3D97_D578_4160_053EC3A87194",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GS__6064",
 "hfovMin": "150%",
 "id": "panorama_335FD40B_3CB7_24EF_41B4_421573260B2B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2F6F4417_3CB5_24E6_41C6_90A0C6AAED82",
  "this.overlay_28942B57_3CBB_6367_4184_F9EFB26FE5B2",
  "this.panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -135.82,
   "yaw": 101.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE"
  },
  {
   "backwardYaw": -63.25,
   "yaw": -128.05,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -96.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F212763_3D97_DDF9_41B3_4FFC6D931C2E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GS__6071",
 "hfovMin": "150%",
 "id": "panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2B0DF282_3C9E_DDD9_41C6_7EF0A92390CA",
  "this.overlay_244E02E8_3C95_3D29_41CC_920FFE3E99F6",
  "this.panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -139.9,
   "yaw": 138.28,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184"
  },
  {
   "backwardYaw": 1.61,
   "yaw": 48.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2BE62A48_3C9D_2D69_41CD_879781622715"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "L7",
 "hfovMin": "150%",
 "id": "panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988",
 "class": "Panorama",
 "overlays": [
  "this.overlay_8068E5A3_903B_B0F4_41D8_082F0BE773C2",
  "this.overlay_80E96C14_9038_B7DC_41DB_22831CCE23E4",
  "this.overlay_8120532C_9039_91CC_41CE_79BDA0944E38",
  "this.panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -83.34,
   "yaw": -110.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44"
  },
  {
   "backwardYaw": -3.98,
   "yaw": 146.16,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120"
  },
  {
   "backwardYaw": -147.57,
   "yaw": 29.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -160.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F4307E3_3D97_DCF9_41AF_EC238701B3C6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 92.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1A7F9533_3D97_DD59_41BF_D8D9C5D6D8D9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -78.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E1318F3_3D97_D4D8_41CA_5E2F3E248905",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 64.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F6DC7AB_3D97_DD49_41A3_E1BC2DE013B6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 51.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1CE3D6EB_3D97_DCC9_41B4_3EA7EF220605",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "L1",
 "hfovMin": "150%",
 "id": "panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2D67282F_3CB7_ED26_41C0_AF0ECD3BB470",
  "this.overlay_2E1D55A8_3CB5_272A_41C6_01D999F4B9CD",
  "this.panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 101.78,
   "yaw": -135.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_335FD40B_3CB7_24EF_41B4_421573260B2B"
  },
  {
   "backwardYaw": 145.43,
   "yaw": 130.5,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_304858B4_3C95_2D39_4191_C59258F377A1"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -174.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1A96A5B3_3D97_DD59_41AB_974BF5671A8F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -175.15,
  "class": "PanoramaCameraPosition",
  "pitch": 4.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -88.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1FDA6883_3D97_D339_41C7_F85E57E7B6F1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lobby baru",
 "hfovMin": "120%",
 "id": "panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184",
 "class": "Panorama",
 "overlays": [
  "this.overlay_292EEF39_3CEB_E32B_41A9_E2D441F8B9FB",
  "this.overlay_292EFF39_3CEB_E32B_41C5_FDBF7DA46738",
  "this.overlay_292E0F39_3CEB_E32B_41CB_B43E309D50D5",
  "this.overlay_292E2F39_3CEB_E32B_41C6_5A4399913D21",
  "this.overlay_245B2C58_3C97_256A_41B0_67337E505477",
  "this.panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -47.6,
   "yaw": -5.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_304858B4_3C95_2D39_4191_C59258F377A1"
  },
  {
   "backwardYaw": -47.6,
   "yaw": -5.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_304858B4_3C95_2D39_4191_C59258F377A1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86194DFF_8DF4_EC88_41BD_86393041826E"
  },
  {
   "backwardYaw": -128.05,
   "yaw": -63.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_335FD40B_3CB7_24EF_41B4_421573260B2B"
  },
  {
   "backwardYaw": -128.05,
   "yaw": -63.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_335FD40B_3CB7_24EF_41B4_421573260B2B"
  },
  {
   "backwardYaw": 138.28,
   "yaw": -139.9,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6"
  },
  {
   "backwardYaw": 138.28,
   "yaw": -139.9,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6"
  },
  {
   "backwardYaw": 88.98,
   "yaw": 95.28,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 25.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1A62E553_3D97_DDD9_41C8_96F98EB2A424",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 86.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F77779B_3D97_DD49_41C1_6BA353EED758",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "L9",
 "hfovMin": "150%",
 "id": "panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44",
 "class": "Panorama",
 "overlays": [
  "this.overlay_8197239A_9047_F0D4_41D8_7032CCAC9684",
  "this.overlay_81A20CA3_9048_F0F4_41C5_1675B964C7FB",
  "this.overlay_3FF91EEC_3039_7832_41BA_694BDF5BFDC7",
  "this.panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -110.34,
   "yaw": -83.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988"
  },
  {
   "backwardYaw": 168.34,
   "yaw": -172.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E8C682_8DF4_9F7B_41D2_150335D14871"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GH6",
 "hfovMin": "150%",
 "id": "panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376",
 "class": "Panorama",
 "overlays": [
  "this.overlay_8AB2A692_9048_90D4_41D7_B3C29EA9660C",
  "this.panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -12.57,
   "yaw": -154.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -178.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F289753_3D97_DDD9_41C0_A9C511B1E471",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 176.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1FA57813_3D97_D359_41CC_0495285F0C02",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "L6",
 "hfovMin": "150%",
 "id": "panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9F61E64E_9039_704C_41D6_382B13F103AA",
  "this.overlay_8A757BBB_9039_90D4_41D5_12211B621FC9",
  "this.overlay_8C8A3338_9059_71D4_41AD_05CF533314A2",
  "this.overlay_3FFB9DD1_3068_B813_41AC_9676D8BC4FC4",
  "this.panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -90.82,
   "yaw": 176.84,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E598F3_8DF3_9498_41C9_369BC735714E"
  },
  {
   "backwardYaw": 146.16,
   "yaw": -3.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988"
  },
  {
   "backwardYaw": 111.39,
   "yaw": 20.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GH3",
 "hfovMin": "150%",
 "id": "panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2",
 "class": "Panorama",
 "overlays": [
  "this.overlay_87AFF622_9048_93F4_41BD_60D9A5D3BBD6",
  "this.overlay_8842D34D_904F_B04C_41E1_657B0A260A37",
  "this.panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -86.61,
   "yaw": -1.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E200CA_8DF4_9488_41CB_8AE22568B672"
  },
  {
   "backwardYaw": -177.02,
   "yaw": -174.16,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86194DFF_8DF4_EC88_41BD_86393041826E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_t.jpg",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/album_203C4016_3038_8811_41A5_CB14C1A5B965_0_t.jpg",
 "id": "album_203C4016_3038_8811_41A5_CB14C1A5B965_0",
 "class": "Photo",
 "width": 4032,
 "duration": 5000,
 "image": {
  "levels": [
   {
    "url": "media/album_203C4016_3038_8811_41A5_CB14C1A5B965_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "IMG_7387",
 "height": 3024
},
{
 "initialPosition": {
  "yaw": 51.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1CE826DB_3D97_DCC9_41B0_57F9F26CE562",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GH7",
 "hfovMin": "150%",
 "id": "panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_89050E43_9047_93B4_41D9_1900AEAAED00",
  "this.overlay_8DA46A86_9048_90BC_41BF_2EEC5287E205",
  "this.panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 83.98,
   "yaw": 19.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E200CA_8DF4_9488_41CB_8AE22568B672"
  },
  {
   "backwardYaw": 20.66,
   "yaw": 111.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "K1",
 "hfovMin": "150%",
 "id": "panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70",
 "class": "Panorama",
 "overlays": [
  "this.overlay_84E500B1_9048_90D4_41E0_319698A3FCA9",
  "this.overlay_20E22ED5_2FDB_F813_41B9_BFA844CCB35B",
  "this.panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 92.98,
   "yaw": -58.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 66.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1FD15893_3D97_D359_419D_23EFA901ABB3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -21.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1A70B543_3D97_DD39_41A1_2601A6A888B7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 169.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1A0A351B_3D97_DD49_41CA_CA3DC852B2FE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -90.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E4C295B_3D97_D5C8_4193_C679E270B7E1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 174.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1A8945C3_3D97_DD39_41C3_B5EBDAB5CF28",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer"
},
{
 "initialPosition": {
  "yaw": 178.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F5967CB_3D97_DCC9_41BF_F8E111D906A1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GS__6070",
 "hfovMin": "150%",
 "id": "panorama_2BE62A48_3C9D_2D69_41CD_879781622715",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2B63EE42_3C9D_6559_41B3_7D5F6EF9B828",
  "this.panorama_2BE62A48_3C9D_2D69_41CD_879781622715_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 48.86,
   "yaw": 1.61,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 143.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E2788D3_3D97_D4D9_41BD_C0A59FD46C94",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86194DFF_8DF4_EC88_41BD_86393041826E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "K4",
 "hfovMin": "150%",
 "id": "panorama_86E8C682_8DF4_9F7B_41D2_150335D14871",
 "class": "Panorama",
 "overlays": [
  "this.overlay_8279EDE9_9049_9075_41D6_61EDB693D191",
  "this.overlay_83C93B0A_9048_B1B4_41DE_A6C5DDBC0DEC",
  "this.panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -172.93,
   "yaw": 168.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44"
  },
  {
   "backwardYaw": 55.34,
   "yaw": -10.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E8E47E_8DF4_F388_41E1_89D006C12552"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 176.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F358743_3D97_DD39_41B1_45E9F4527632",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "L10",
 "hfovMin": "150%",
 "id": "panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9E08C950_9039_7054_41CE_49F10DC34803",
  "this.panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -6.14,
   "yaw": -115.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E598F3_8DF3_9498_41C9_369BC735714E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GH1",
 "hfovMin": "150%",
 "id": "panorama_86194DFF_8DF4_EC88_41BD_86393041826E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_87C6D5BB_9047_90D4_41C2_DA3B0294D971",
  "this.overlay_86E1BC60_904B_9074_41CE_E3BBC13CCDB4",
  "this.overlay_87066C7B_9048_9054_41C0_1F83AA8DC29D",
  "this.panorama_86194DFF_8DF4_EC88_41BD_86393041826E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 69.25,
   "yaw": -87.84,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B"
  },
  {
   "backwardYaw": -174.16,
   "yaw": -177.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2"
  },
  {
   "backwardYaw": 69.66,
   "yaw": 91.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "playList": "this.album_2739DB54_35A9_4032_41B9_7E892C332DDA_AlbumPlayList",
 "thumbnailUrl": "media/album_2739DB54_35A9_4032_41B9_7E892C332DDA_t.png",
 "id": "album_2739DB54_35A9_4032_41B9_7E892C332DDA",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_7407"
},
{
 "initialPosition": {
  "yaw": 32.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F985823_3D97_D379_41C0_56CDB5AA1164",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 132.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1CF5D6B3_3D97_DF59_416D_F2F69D39691E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "L4",
 "hfovMin": "150%",
 "id": "panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9E01F3D7_8E17_7498_41C4_EBDE5E926C4F",
  "this.overlay_9FBA90B7_903F_B0DC_41DC_563F67216630",
  "this.panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 89.3,
   "yaw": -93.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E598F3_8DF3_9498_41C9_369BC735714E"
  },
  {
   "backwardYaw": 89.3,
   "yaw": -93.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E598F3_8DF3_9498_41C9_369BC735714E"
  },
  {
   "backwardYaw": -91.13,
   "yaw": 87.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 167.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E662933_3D97_D558_41C1_4A911706850B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 93.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E7D6913_3D97_D558_41AE_7F6BDA0EA5A3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -92.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1FEEF863_3D97_D3F9_41B9_CAF9E0567BE6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/album_229F8F5F_2FFB_980F_41BB_C54A49DC04F2_0_t.jpg",
 "id": "album_229F8F5F_2FFB_980F_41BB_C54A49DC04F2_0",
 "class": "Photo",
 "width": 4032,
 "duration": 5000,
 "image": {
  "levels": [
   {
    "url": "media/album_229F8F5F_2FFB_980F_41BB_C54A49DC04F2_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "IMG_7389",
 "height": 3024
},
{
 "initialPosition": {
  "yaw": -110.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1FF86853_3D97_D3D9_41A9_ABBC5357B1C9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -3.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F60E7BB_3D97_DD49_4182_FC76FD479066",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 7.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F0BC77B_3D97_DDC9_41C1_5F0AA4984CEE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 13.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1EB2697B_3D97_D5C8_41B3_2E439E381392",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2BE62A48_3C9D_2D69_41CD_879781622715_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 94.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E99A99B_3D97_D548_41B7_3C51C4150A2F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -34.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E066903_3D97_D538_41B3_66DC3888FCBF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -41.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1CD53703_3D97_DD39_41B9_BBD1611A342B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 132.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1CEF06CB_3D97_DCC9_41A9_EACB5A46E800",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 88.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E40696B_3D97_D5C8_41C0_DE8ED16D2529",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 89.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1A557563_3D97_DDF9_419A_B9ED2BEB39B4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -41.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1CDD46FB_3D97_DCC9_419D_3019A0F86E8F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -68.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1AB7558B_3D97_DD49_41CB_E76F32040AEC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 97.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E1AB8E3_3D97_D4F9_41A5_F2A76769ADB4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -84.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1FC448A3_3D97_D379_41B0_A98E15F47522",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "L5",
 "hfovMin": "150%",
 "id": "panorama_86E598F3_8DF3_9498_41C9_369BC735714E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9E17D02C_8E17_938F_41CD_47530856AE9A",
  "this.overlay_9E1D58D1_8E15_9498_41DF_433521311915",
  "this.overlay_9FF9D842_9038_BFB7_41E1_F1A9E1AAD9C3",
  "this.panorama_86E598F3_8DF3_9498_41C9_369BC735714E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -93.98,
   "yaw": 89.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C"
  },
  {
   "backwardYaw": -115.36,
   "yaw": -6.14,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215"
  },
  {
   "backwardYaw": 176.84,
   "yaw": -90.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_304858B4_3C95_2D39_4191_C59258F377A1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -150.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F3F5733_3D97_DD59_41A6_25A68C6839C1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 44.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1A2FC4EB_3D97_DCC9_41A4_F507627FAC69",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GS__6151",
 "hfovMin": "150%",
 "id": "panorama_304858B4_3C95_2D39_4191_C59258F377A1",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3322F53B_3CAB_272E_41C7_4E79274D9A83",
  "this.overlay_2A5035FE_3CFB_2726_41CA_BD546565DCC0",
  "this.overlay_2A5C3A57_3CF5_2D67_41CB_57B3B42A62D6",
  "this.panorama_304858B4_3C95_2D39_4191_C59258F377A1_tcap0",
  "this.overlay_20730C44_3C9B_E559_41BC_5528453D020E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 130.5,
   "yaw": 145.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE"
  },
  {
   "backwardYaw": 5.3,
   "yaw": -166.4,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193"
  },
  {
   "backwardYaw": -5.43,
   "yaw": -47.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -49.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1AA6F5A3_3D97_DD79_41BB_56E967CA16CE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/album_20735968_2FDB_7831_41C5_DD2423727757_0_t.jpg",
 "id": "album_20735968_2FDB_7831_41C5_DD2423727757_0",
 "class": "Photo",
 "width": 4032,
 "duration": 5000,
 "image": {
  "levels": [
   {
    "url": "media/album_20735968_2FDB_7831_41C5_DD2423727757_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "IMG_7392",
 "height": 3024
},
{
 "initialPosition": {
  "yaw": -131.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E8A69AB_3D97_D548_41B4_8CDA2D5EA586",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 69.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1BC434CB_3D97_DCC9_41A1_837CFED83336",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "K5",
 "hfovMin": "150%",
 "id": "panorama_86E8E47E_8DF4_F388_41E1_89D006C12552",
 "class": "Panorama",
 "overlays": [
  "this.overlay_82A8D802_9048_FFB4_41DF_A9F0E8601DEA",
  "this.overlay_830D296A_9049_9074_41D5_C7BED52FA057",
  "this.overlay_248A262B_35B9_C017_41BE_16EF7892A582",
  "this.overlay_24B47D7A_35A9_40F6_4183_2A4C03CEE240",
  "this.panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 95.43,
   "yaw": -36.7,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80"
  },
  {
   "backwardYaw": -10.11,
   "yaw": 55.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E8C682_8DF4_9F7B_41D2_150335D14871"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GH4",
 "hfovMin": "150%",
 "id": "panorama_86E200CA_8DF4_9488_41CB_8AE22568B672",
 "class": "Panorama",
 "overlays": [
  "this.overlay_88CCB223_9049_73F4_41DD_76FF16F53B00",
  "this.overlay_8A59C8C0_9049_90B4_41E0_38361060A702",
  "this.overlay_88A87E07_9048_93BC_41CD_F2999362971C",
  "this.panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.11,
   "yaw": -86.61,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2"
  },
  {
   "backwardYaw": 168.66,
   "yaw": 158.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C"
  },
  {
   "backwardYaw": 19.34,
   "yaw": 83.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 96.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1FAC2803_3D97_D339_41CB_28ADF21030AF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -110.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F8C8833_3D97_D359_41C7_7F15BF95BB6D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_335FD40B_3CB7_24EF_41B4_421573260B2B",
   "camera": "this.panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5",
   "camera": "this.panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C",
   "camera": "this.panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86E598F3_8DF3_9498_41C9_369BC735714E",
   "camera": "this.panorama_86E598F3_8DF3_9498_41C9_369BC735714E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215",
   "camera": "this.panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120",
   "camera": "this.panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988",
   "camera": "this.panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C",
   "camera": "this.panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44",
   "camera": "this.panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86194DFF_8DF4_EC88_41BD_86393041826E",
   "camera": "this.panorama_86194DFF_8DF4_EC88_41BD_86393041826E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B",
   "camera": "this.panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2",
   "camera": "this.panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86E200CA_8DF4_9488_41CB_8AE22568B672",
   "camera": "this.panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C",
   "camera": "this.panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376",
   "camera": "this.panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7",
   "camera": "this.panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70",
   "camera": "this.panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F",
   "camera": "this.panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80",
   "camera": "this.panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86E8C682_8DF4_9F7B_41D2_150335D14871",
   "camera": "this.panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_86E8E47E_8DF4_F388_41E1_89D006C12552",
   "camera": "this.panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE",
   "camera": "this.panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.album_229F8F5F_2FFB_980F_41BB_C54A49DC04F2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.album_20735968_2FDB_7831_41C5_DD2423727757",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.album_203C4016_3038_8811_41A5_CB14C1A5B965",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.album_243A15D2_35B9_4036_41C1_4C162D229716",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.album_2739DB54_35A9_4032_41B9_7E892C332DDA",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.panorama_304858B4_3C95_2D39_4191_C59258F377A1",
   "camera": "this.panorama_304858B4_3C95_2D39_4191_C59258F377A1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193",
   "camera": "this.panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674",
   "camera": "this.panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184",
   "camera": "this.panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280",
   "camera": "this.panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6",
   "camera": "this.panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2BE62A48_3C9D_2D69_41CD_879781622715",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_2BE62A48_3C9D_2D69_41CD_879781622715_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "playList": "this.album_20735968_2FDB_7831_41C5_DD2423727757_AlbumPlayList",
 "thumbnailUrl": "media/album_20735968_2FDB_7831_41C5_DD2423727757_t.png",
 "id": "album_20735968_2FDB_7831_41C5_DD2423727757",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_7392"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -124.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F00478B_3D97_DD49_41BA_E663C33B2EFD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GS__6060",
 "hfovMin": "150%",
 "id": "panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674",
 "class": "Panorama",
 "overlays": [
  "this.overlay_281BFF8B_3CFB_23EF_4184_DB4AA51E3DBC",
  "this.panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.64,
   "yaw": -113.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -90.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E5A194B_3D97_D5C8_41C1_41E32017FE18",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -33.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1A448573_3D97_DDD9_41CE_946B044684D0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "playList": "this.album_203C4016_3038_8811_41A5_CB14C1A5B965_AlbumPlayList",
 "thumbnailUrl": "media/album_203C4016_3038_8811_41A5_CB14C1A5B965_t.png",
 "id": "album_203C4016_3038_8811_41A5_CB14C1A5B965",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_7387"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GH5",
 "hfovMin": "150%",
 "id": "panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_89699DD0_904B_9054_41D1_2C07A8029ABB",
  "this.overlay_8973EAC3_9049_F0B4_41DD_5002CB3B2301",
  "this.panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 158.43,
   "yaw": 168.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E200CA_8DF4_9488_41CB_8AE22568B672"
  },
  {
   "backwardYaw": -154.11,
   "yaw": -12.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 173.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1CF856A3_3D97_DF79_41C6_0E8672A9D3B2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 40.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1E3AC8B3_3D97_D359_41A0_B4FBD3F17D53",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -11.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1A3B84DB_3D97_DCC9_41CE_9021A712AF19",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "L2",
 "hfovMin": "150%",
 "id": "panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5",
 "class": "Panorama",
 "overlays": [
  "this.overlay_801E153C_8E0C_9D8F_41DA_73C954D67645",
  "this.overlay_87B168D1_9049_9055_41D5_D163A501C316",
  "this.overlay_2F14FC43_3CF5_255F_41A8_23C6076AB0B7",
  "this.overlay_2B9F0D69_3CFD_E72A_41B3_C535893F3FCE",
  "this.panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 87.75,
   "yaw": -91.13,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C"
  },
  {
   "backwardYaw": 87.75,
   "yaw": -91.13,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C"
  },
  {
   "backwardYaw": 91.75,
   "yaw": 69.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86194DFF_8DF4_EC88_41BD_86393041826E"
  },
  {
   "backwardYaw": -113.93,
   "yaw": 1.64,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674"
  },
  {
   "backwardYaw": 95.28,
   "yaw": 88.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_t.jpg",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/album_2739DB54_35A9_4032_41B9_7E892C332DDA_0_t.jpg",
 "id": "album_2739DB54_35A9_4032_41B9_7E892C332DDA_0",
 "class": "Photo",
 "width": 3024,
 "duration": 5000,
 "image": {
  "levels": [
   {
    "url": "media/album_2739DB54_35A9_4032_41B9_7E892C332DDA_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "IMG_7407",
 "height": 4032
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GS__6193",
 "hfovMin": "150%",
 "id": "panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280",
 "class": "Panorama",
 "overlays": [
  "this.overlay_25DC4F1F_3C9A_E4E7_41C1_A5B05301F9F3",
  "this.panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -3.92,
   "yaw": 113.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -84.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1A17250B_3D97_DD49_41C4_5252FAF328CC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 116.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1A2204FB_3D97_DCC9_41C8_A82A4A448FFB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -66.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1CC74723_3D97_DD79_41C6_9AB2AE203FF1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -91.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1CCD3713_3D97_DD59_41C8_2EE0F6E8B421",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -11.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_1F4C07D3_3D97_DCD9_41B4_B5BCB35AF24F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_86E598F3_8DF3_9498_41C9_369BC735714E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "K2",
 "hfovMin": "150%",
 "id": "panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_83B96F72_9048_9054_41D9_3C03A8C1C8E5",
  "this.overlay_84CA5BBC_9049_B0D3_41E1_DC1011227E60",
  "this.overlay_3F773FF6_2FE8_9811_41BD_96960CD91679",
  "this.panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -58.8,
   "yaw": 92.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70"
  },
  {
   "backwardYaw": -85.8,
   "yaw": -82.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GH2",
 "hfovMin": "150%",
 "id": "panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_87DC9B66_9049_B07C_41BF_61B0370A6D05",
  "this.panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -87.84,
   "yaw": 69.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86194DFF_8DF4_EC88_41BD_86393041826E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingBottom": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -147.57,
   "hfov": 12.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.11
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988, this.camera_1F3F5733_3D97_DD59_41A6_25A68C6839C1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D758661_3D7D_255B_41B5_F513F13120E8",
   "pitch": -14.11,
   "yaw": -147.57,
   "hfov": 12.12,
   "distance": 100
  }
 ],
 "id": "overlay_81B89F03_9038_B1B4_41DA_73793462FF2B",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.92,
   "hfov": 19.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.49
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280, this.camera_1CC74723_3D97_DD79_41C6_9AB2AE203FF1); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -3.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_1_HS_1_0.png",
      "width": 309,
      "class": "ImageResourceLevel",
      "height": 295
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.49,
   "hfov": 19.04
  }
 ],
 "id": "overlay_2A2EE30A_3CEB_DCEE_41C8_4F111CBC1BA5",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 176.08,
   "hfov": 15.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.83
  }
 ],
 "areas": [
  {
   "click": "this.openLink(window.location.href+'VTXI4/', '_top')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D74D662_3D7D_2559_41CA_AE4B22B406FC",
   "pitch": -27.83,
   "yaw": 176.08,
   "hfov": 15.9,
   "distance": 100
  }
 ],
 "id": "overlay_225D7363_3C95_635E_41A1_606E4ECD84DE",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 95.43,
   "hfov": 12.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.91
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E8E47E_8DF4_F388_41E1_89D006C12552, this.camera_1E2788D3_3D97_D4D9_41BD_C0A59FD46C94); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8C6675_3D7D_253B_41C9_3DEAE6AC26DE",
   "pitch": -14.91,
   "yaw": 95.43,
   "hfov": 12.08,
   "distance": 100
  }
 ],
 "id": "overlay_83E333E0_9048_B074_41A4_26978617256C",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -85.8,
   "hfov": 12.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.46
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F, this.camera_1E1AB8E3_3D97_D4F9_41A5_F2A76769ADB4); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8C3676_3D7D_2539_41C0_7EF63704F389",
   "pitch": -12.46,
   "yaw": -85.8,
   "hfov": 12.21,
   "distance": 100
  }
 ],
 "id": "overlay_844A3345_904F_91BC_41B4_037230D1B690",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 163.87,
   "hfov": 17.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.41
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 163.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_1_HS_2_0.png",
      "width": 295,
      "class": "ImageResourceLevel",
      "height": 301
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.41,
   "hfov": 17.53
  }
 ],
 "id": "overlay_21F9592B_2FEF_9837_41C0_E75F079DBB08",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.album_243A15D2_35B9_4036_41C1_4C162D229716_0",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.41",
     "class": "PhotoCameraPosition",
     "y": "0.57",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_243A15D2_35B9_4036_41C1_4C162D229716_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_229F8F5F_2FFB_980F_41BB_C54A49DC04F2_0",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.74",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_229F8F5F_2FFB_980F_41BB_C54A49DC04F2_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 5.3,
   "hfov": 17.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.96
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_304858B4_3C95_2D39_4191_C59258F377A1, this.camera_1EB2697B_3D97_D5C8_41B3_2E439E381392); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 5.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_1_HS_0_0.png",
      "width": 280,
      "class": "ImageResourceLevel",
      "height": 280
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96,
   "hfov": 17.45
  }
 ],
 "id": "overlay_2AACAC5C_3CFB_2569_4191_28DBAC93B288",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 101.78,
   "hfov": 20.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.65
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE, this.camera_1A2FC4EB_3D97_DCC9_41A4_F507627FAC69); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D839682_3D7D_25D9_41C2_DBCF2261B388",
   "pitch": -18.65,
   "yaw": 101.78,
   "hfov": 20.53,
   "distance": 50
  }
 ],
 "id": "overlay_2F6F4417_3CB5_24E6_41C6_90A0C6AAED82",
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -128.05,
   "hfov": 26.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.93
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184, this.camera_1A2204FB_3D97_DCC9_41C8_A82A4A448FFB); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D821682_3D7D_25D9_41C7_C04D9316F968",
   "pitch": -34.93,
   "yaw": -128.05,
   "hfov": 26.18,
   "distance": 50
  }
 ],
 "id": "overlay_28942B57_3CBB_6367_4184_F9EFB26FE5B2",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 48.86,
   "hfov": 18.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2BE62A48_3C9D_2D69_41CD_879781622715, this.camera_1E3138C3_3D97_D339_41C9_FCA8FDB0CA70); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 48.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_1_HS_0_0.png",
      "width": 302,
      "class": "ImageResourceLevel",
      "height": 302
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.87,
   "hfov": 18.27
  }
 ],
 "id": "overlay_2B0DF282_3C9E_DDD9_41C6_7EF0A92390CA",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 138.28,
   "hfov": 15.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.93
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184, this.camera_1E3AC8B3_3D97_D359_41A0_B4FBD3F17D53); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D87368B_3D7D_25EF_41C1_C21003D548EA",
   "pitch": -25.93,
   "yaw": 138.28,
   "hfov": 15.34,
   "distance": 100
  }
 ],
 "id": "overlay_244E02E8_3C95_3D29_41CC_920FFE3E99F6",
 "data": {
  "label": "Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 146.16,
   "hfov": 11.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.57
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120, this.camera_1FA57813_3D97_D359_41CC_0495285F0C02); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D72865F_3D7D_2567_41BF_68DC3309E8FB",
   "pitch": -16.57,
   "yaw": 146.16,
   "hfov": 11.98,
   "distance": 100
  }
 ],
 "id": "overlay_8068E5A3_903B_B0F4_41D8_082F0BE773C2",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 29.98,
   "hfov": 12.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C, this.camera_1F985823_3D97_D379_41C0_56CDB5AA1164); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D754660_3D7D_2559_41AA_BB6BE3DC3B02",
   "pitch": -12.87,
   "yaw": 29.98,
   "hfov": 12.19,
   "distance": 100
  }
 ],
 "id": "overlay_80E96C14_9038_B7DC_41DB_22831CCE23E4",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -110.34,
   "hfov": 12.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.14
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44, this.camera_1FAC2803_3D97_D339_41CB_28ADF21030AF); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D75F660_3D7D_2559_41CB_0A69FC8C2B9F",
   "pitch": -16.14,
   "yaw": -110.34,
   "hfov": 12.01,
   "distance": 100
  }
 ],
 "id": "overlay_8120532C_9039_91CC_41CE_79BDA0944E38",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 130.5,
   "hfov": 17.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.64
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_304858B4_3C95_2D39_4191_C59258F377A1, this.camera_1E066903_3D97_D538_41B3_66DC3888FCBF); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D81067D_3D7D_252B_41C1_C75296CF6A99",
   "pitch": -28.64,
   "yaw": 130.5,
   "hfov": 17.95,
   "distance": 100
  }
 ],
 "id": "overlay_2D67282F_3CB7_ED26_41C0_AF0ECD3BB470",
 "data": {
  "label": "Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -135.82,
   "hfov": 19.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.05
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_335FD40B_3CB7_24EF_41B4_421573260B2B, this.camera_1E1318F3_3D97_D4D8_41CA_5E2F3E248905); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D81B67E_3D7D_2529_41CD_93D8564FCD3B",
   "pitch": -20.05,
   "yaw": -135.82,
   "hfov": 19.22,
   "distance": 100
  }
 ],
 "id": "overlay_2E1D55A8_3CB5_272A_41C6_01D999F4B9CD",
 "data": {
  "label": "Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -5.43,
   "hfov": 13.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.55
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_304858B4_3C95_2D39_4191_C59258F377A1, this.camera_1CEF06CB_3D97_DCC9_41A9_EACB5A46E800); this.mainPlayList.set('selectedIndex', 27); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D85C684_3D7D_25D9_41B0_16FF20DFE27B",
   "pitch": -24.55,
   "yaw": -5.43,
   "hfov": 13.4,
   "distance": 100
  }
 ],
 "id": "overlay_292EEF39_3CEB_E32B_41A9_E2D441F8B9FB",
 "data": {
  "label": "Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 95.28,
   "hfov": 14.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5, this.camera_1CCD3713_3D97_DD59_41C8_2EE0F6E8B421); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D842686_3D7D_25D9_41AD_4C27EB0F32D6",
   "pitch": -27.82,
   "yaw": 95.28,
   "hfov": 14.11,
   "distance": 100
  }
 ],
 "id": "overlay_292EFF39_3CEB_E32B_41C5_FDBF7DA46738",
 "data": {
  "label": "Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -63.25,
   "hfov": 15.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.41
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_335FD40B_3CB7_24EF_41B4_421573260B2B, this.camera_1CE3D6EB_3D97_DCC9_41B4_3EA7EF220605); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D84F686_3D7D_25D9_41B3_3EF6203D065D",
   "pitch": -17.41,
   "yaw": -63.25,
   "hfov": 15.56,
   "distance": 100
  }
 ],
 "id": "overlay_292E0F39_3CEB_E32B_41CB_B43E309D50D5",
 "data": {
  "label": "Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 134.05,
   "hfov": 13.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.94
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D877687_3D7D_25E7_417A_417F7A95E23C",
   "pitch": -37.94,
   "yaw": 134.05,
   "hfov": 13.31,
   "distance": 50
  }
 ],
 "id": "overlay_292E2F39_3CEB_E32B_41C6_5A4399913D21",
 "data": {
  "label": "Arrow 02 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -139.9,
   "hfov": 15.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.37
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6, this.camera_1CD53703_3D97_DD39_41B9_BBD1611A342B); this.mainPlayList.set('selectedIndex', 32); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D871687_3D7D_25E7_41B5_0ACFD4F02FEC",
   "pitch": -38.37,
   "yaw": -139.9,
   "hfov": 15.9,
   "distance": 50
  }
 ],
 "id": "overlay_245B2C58_3C97_256A_41B0_67337E505477",
 "data": {
  "label": "Arrow 02 Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -172.93,
   "hfov": 12.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.73
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E8C682_8DF4_9F7B_41D2_150335D14871, this.camera_1A3B84DB_3D97_DCC9_41CE_9021A712AF19); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D749663_3D7D_255F_41CB_3335FBD53558",
   "pitch": -15.73,
   "yaw": -172.93,
   "hfov": 12.03,
   "distance": 100
  }
 ],
 "id": "overlay_8197239A_9047_F0D4_41D8_7032CCAC9684",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -83.34,
   "hfov": 12.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.46
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988, this.camera_1BC434CB_3D97_DCC9_41A1_837CFED83336); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D770663_3D7D_255F_41B3_545B780AFDE5",
   "pitch": -12.46,
   "yaw": -83.34,
   "hfov": 12.21,
   "distance": 100
  }
 ],
 "id": "overlay_81A20CA3_9048_F0F4_41C5_1675B964C7FB",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 172.02,
   "hfov": 9.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.1
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 172.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_1_HS_2_0.png",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.1,
   "hfov": 9.37
  }
 ],
 "id": "overlay_3FF91EEC_3039_7832_41BA_694BDF5BFDC7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -154.11,
   "hfov": 12.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.32
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C, this.camera_1E662933_3D97_D558_41C1_4A911706850B); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8A166F_3D7D_2527_41CD_555C7B017E57",
   "pitch": -15.32,
   "yaw": -154.11,
   "hfov": 12.06,
   "distance": 100
  }
 ],
 "id": "overlay_8AB2A692_9048_90D4_41D7_B3C29EA9660C",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.98,
   "hfov": 12.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.46
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988, this.camera_1A448573_3D97_DDD9_41CE_946B044684D0); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D73C65E_3D7D_2569_41C0_60DFFBD0AC91",
   "pitch": -12.46,
   "yaw": -3.98,
   "hfov": 12.21,
   "distance": 100
  }
 ],
 "id": "overlay_9F61E64E_9039_704C_41D6_382B13F103AA",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 20.66,
   "hfov": 14.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7, this.camera_1AB7558B_3D97_DD49_41CB_E76F32040AEC); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D73965E_3D7D_2569_41B7_2221B1F92C4A",
   "pitch": -21.87,
   "yaw": 20.66,
   "hfov": 14.05,
   "distance": 50
  }
 ],
 "id": "overlay_8A757BBB_9039_90D4_41D5_12211B621FC9",
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 176.84,
   "hfov": 12.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.91
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E598F3_8DF3_9498_41C9_369BC735714E, this.camera_1A557563_3D97_DDF9_419A_B9ED2BEB39B4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D72265F_3D7D_2567_41AF_F89F25712BD8",
   "pitch": -14.91,
   "yaw": 176.84,
   "hfov": 12.08,
   "distance": 100
  }
 ],
 "id": "overlay_8C8A3338_9059_71D4_41AD_05CF533314A2",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 119.49,
   "hfov": 13.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 14.93
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 119.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_1_HS_5_0.png",
      "width": 223,
      "class": "ImageResourceLevel",
      "height": 229
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.93,
   "hfov": 13.5
  }
 ],
 "id": "overlay_3FFB9DD1_3068_B813_41AC_9676D8BC4FC4",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -174.16,
   "hfov": 11.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.6
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86194DFF_8DF4_EC88_41BD_86393041826E, this.camera_1E73D923_3D97_D578_4160_053EC3A87194); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D89D669_3D7D_252B_41CB_CD5C0DFDB0C6",
   "pitch": -18.6,
   "yaw": -174.16,
   "hfov": 11.85,
   "distance": 100
  }
 ],
 "id": "overlay_87AFF622_9048_93F4_41BD_60D9A5D3BBD6",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -1.11,
   "hfov": 12.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.64
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E200CA_8DF4_9488_41CB_8AE22568B672, this.camera_1E7D6913_3D97_D558_41AE_7F6BDA0EA5A3); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D886669_3D7D_252B_41C1_A3BF2E9EDB38",
   "pitch": -11.64,
   "yaw": -1.11,
   "hfov": 12.24,
   "distance": 100
  }
 ],
 "id": "overlay_8842D34D_904F_B04C_41E1_657B0A260A37",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 19.34,
   "hfov": 11.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.41
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E200CA_8DF4_9488_41CB_8AE22568B672, this.camera_1F212763_3D97_DDF9_41B3_4FFC6D931C2E); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8B3670_3D7D_2539_41C5_E56EFA5FBB96",
   "pitch": -19.41,
   "yaw": 19.34,
   "hfov": 11.79,
   "distance": 50
  }
 ],
 "id": "overlay_89050E43_9047_93B4_41D9_1900AEAAED00",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 111.39,
   "hfov": 12.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.1
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120, this.camera_1F14376B_3D97_DDC9_41C6_8093FFD797F6); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8BC671_3D7D_253B_41CC_AA6345AF1298",
   "pitch": -14.1,
   "yaw": 111.39,
   "hfov": 12.12,
   "distance": 50
  }
 ],
 "id": "overlay_8DA46A86_9048_90BC_41BF_2EEC5287E205",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -58.8,
   "hfov": 12.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.91
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F, this.camera_1FB9C7F3_3D97_DCD9_41AC_D5C43C2B13B8); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8A4672_3D7D_2539_41C9_3C63EDD9331B",
   "pitch": -14.91,
   "yaw": -58.8,
   "hfov": 12.08,
   "distance": 100
  }
 ],
 "id": "overlay_84E500B1_9048_90D4_41E0_319698A3FCA9",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_1_HS_1_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 113.06,
   "hfov": 80.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.61
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_1_HS_1_0.png",
      "width": 1326,
      "class": "ImageResourceLevel",
      "height": 586
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.61,
   "yaw": 113.06,
   "hfov": 80.94,
   "distance": 50
  }
 ],
 "id": "overlay_20E22ED5_2FDB_F813_41B9_BFA844CCB35B",
 "data": {
  "label": "Wilayah SMP Kristen Petra 5"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.61,
   "hfov": 18.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6, this.camera_1E8A69AB_3D97_D548_41B4_8CDA2D5EA586); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 1.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2BE62A48_3C9D_2D69_41CD_879781622715_1_HS_0_0.png",
      "width": 309,
      "class": "ImageResourceLevel",
      "height": 331
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.87,
   "hfov": 18.71
  }
 ],
 "id": "overlay_2B63EE42_3C9D_6559_41B3_7D5F6EF9B828",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_2BE62A48_3C9D_2D69_41CD_879781622715_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 168.34,
   "hfov": 19.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.05
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44, this.camera_1F0BC77B_3D97_DDC9_41C1_5F0AA4984CEE); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8F7677_3D7D_2527_41CB_A49BD6CD5D9F",
   "pitch": -17.05,
   "yaw": 168.34,
   "hfov": 19.95,
   "distance": 100
  }
 ],
 "id": "overlay_8279EDE9_9049_9075_41D6_61EDB693D191",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -10.11,
   "hfov": 12.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.69
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E8E47E_8DF4_F388_41E1_89D006C12552, this.camera_1F00478B_3D97_DD49_41BA_E663C33B2EFD); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8FE678_3D7D_2529_41BF_A9DBCF4E3655",
   "pitch": -13.69,
   "yaw": -10.11,
   "hfov": 12.15,
   "distance": 100
  }
 ],
 "id": "overlay_83C93B0A_9048_B1B4_41DE_A6C5DDBC0DEC",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_1_HS_0_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -115.36,
   "hfov": 12.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.91
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E598F3_8DF3_9498_41C9_369BC735714E, this.camera_1CF856A3_3D97_DF79_41C6_0E8672A9D3B2); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -115.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_1_HS_0_0.png",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.91,
   "hfov": 12.23
  }
 ],
 "id": "overlay_9E08C950_9039_7054_41CE_49F10DC34803",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 91.75,
   "hfov": 12.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.35
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5, this.camera_1FF86853_3D97_D3D9_41A9_ABBC5357B1C9); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D764664_3D7D_2559_41B8_5D3D9976E24A",
   "pitch": -8.35,
   "yaw": 91.75,
   "hfov": 12.37,
   "distance": 50
  }
 ],
 "id": "overlay_87C6D5BB_9047_90D4_41C2_DA3B0294D971",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -87.84,
   "hfov": 12.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.14
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B, this.camera_1F8C8833_3D97_D359_41C7_7F15BF95BB6D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D760665_3D7D_255A_4181_E88663FA9B71",
   "pitch": -16.14,
   "yaw": -87.84,
   "hfov": 12.01,
   "distance": 100
  }
 ],
 "id": "overlay_86E1BC60_904B_9074_41CE_E3BBC13CCDB4",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.02,
   "hfov": 10.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.64
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2, this.camera_1F85D843_3D97_D339_41C8_BCFCCAAAED01); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D76A666_3D7D_2559_41BC_36B7177F9E34",
   "pitch": -28.64,
   "yaw": -177.02,
   "hfov": 10.97,
   "distance": 100
  }
 ],
 "id": "overlay_87066C7B_9048_9054_41C0_1F83AA8DC29D",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86194DFF_8DF4_EC88_41BD_86393041826E_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.album_2739DB54_35A9_4032_41B9_7E892C332DDA_0",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.38",
     "class": "PhotoCameraPosition",
     "y": "0.51",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_2739DB54_35A9_4032_41B9_7E892C332DDA_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -93.98,
   "hfov": 12.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E598F3_8DF3_9498_41C9_369BC735714E, this.camera_1E4C295B_3D97_D5C8_4193_C679E270B7E1); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D71D65B_3D7D_256F_41CD_DFFC32419972",
   "pitch": -10.82,
   "yaw": -93.98,
   "hfov": 12.28,
   "distance": 100
  }
 ],
 "id": "overlay_9E01F3D7_8E17_7498_41C4_EBDE5E926C4F",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 87.75,
   "hfov": 19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.61
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5, this.camera_1E40696B_3D97_D5C8_41C0_DE8ED16D2529); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D70765C_3D7D_2569_41C1_9459526EA960",
   "pitch": -18.61,
   "yaw": 87.75,
   "hfov": 19,
   "distance": 100
  }
 ],
 "id": "overlay_9FBA90B7_903F_B0DC_41DC_563F67216630",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -90.82,
   "hfov": 16.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.32
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120, this.camera_1F60E7BB_3D97_DD49_4182_FC76FD479066); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D70365C_3D7D_2569_41AF_AAD2B6E620DA",
   "pitch": -15.32,
   "yaw": -90.82,
   "hfov": 16.57,
   "distance": 100
  }
 ],
 "id": "overlay_9E17D02C_8E17_938F_41CD_47530856AE9A",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -6.14,
   "hfov": 27.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.68
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_851AB666_8E0C_9FB8_41BD_5877F14F2215, this.camera_1F6DC7AB_3D97_DD49_41A3_E1BC2DE013B6); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -6.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_1_HS_1_0.png",
      "width": 445,
      "class": "ImageResourceLevel",
      "height": 405
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.68,
   "hfov": 27.76
  }
 ],
 "id": "overlay_9E1D58D1_8E15_9498_41DF_433521311915",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 89.3,
   "hfov": 12.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.11
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C, this.camera_1F77779B_3D97_DD49_41C1_6BA353EED758); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D70965D_3D7D_256B_41AC_EC8C8D9EA6BB",
   "pitch": -14.11,
   "yaw": 89.3,
   "hfov": 12.12,
   "distance": 100
  }
 ],
 "id": "overlay_9FF9D842_9038_BFB7_41E1_F1A9E1AAD9C3",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86E598F3_8DF3_9498_41C9_369BC735714E_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -47.6,
   "hfov": 16.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.78
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184, this.camera_1A8945C3_3D97_DD39_41C3_B5EBDAB5CF28); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D80067F_3D7D_2527_41BB_22831DB149EA",
   "pitch": -25.78,
   "yaw": -47.6,
   "hfov": 16.34,
   "distance": 100
  }
 ],
 "id": "overlay_3322F53B_3CAB_272E_41C7_4E79274D9A83",
 "data": {
  "label": "Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -166.4,
   "hfov": 17.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.1
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2FA30C8D_3CBD_25EA_41C7_82D0A4F64193, this.camera_1A96A5B3_3D97_DD59_41AB_974BF5671A8F); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -166.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_1_HS_1_0.png",
      "width": 287,
      "class": "ImageResourceLevel",
      "height": 309
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.1,
   "hfov": 17.75
  }
 ],
 "id": "overlay_2A5035FE_3CFB_2726_41CA_BD546565DCC0",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 21.66,
   "hfov": 16.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.01
  }
 ],
 "areas": [
  {
   "click": "this.openLink(window.location.href+'VTXI4/', '_top')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D835680_3D7D_25D9_41BF_EF8F1B5B3312",
   "pitch": -22.01,
   "yaw": 21.66,
   "hfov": 16.67,
   "distance": 100
  }
 ],
 "id": "overlay_2A5C3A57_3CF5_2D67_41CB_57B3B42A62D6",
 "data": {
  "label": "Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_304858B4_3C95_2D39_4191_C59258F377A1_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 145.43,
   "hfov": 17.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.92
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE, this.camera_1AA6F5A3_3D97_DD79_41BB_56E967CA16CE); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D83F681_3D7D_25DB_41A8_9FDE7B52CFE8",
   "pitch": -31.92,
   "yaw": 145.43,
   "hfov": 17.21,
   "distance": 50
  }
 ],
 "id": "overlay_20730C44_3C9B_E559_41BC_5528453D020E",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 55.34,
   "hfov": 11.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.37
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E8C682_8DF4_9F7B_41D2_150335D14871, this.camera_1A0A351B_3D97_DD49_41CA_CA3DC852B2FE); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8F9679_3D7D_252B_41CC_D5E133EEC79D",
   "pitch": -17.37,
   "yaw": 55.34,
   "hfov": 11.93,
   "distance": 100
  }
 ],
 "id": "overlay_82A8D802_9048_FFB4_41DF_A9F0E8601DEA",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -36.7,
   "hfov": 12.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.46
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80, this.camera_1A17250B_3D97_DD49_41C4_5252FAF328CC); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8E367A_3D7D_2529_41C0_A4AAD2760017",
   "pitch": -12.46,
   "yaw": -36.7,
   "hfov": 12.21,
   "distance": 100
  }
 ],
 "id": "overlay_830D296A_9049_9074_41D5_C7BED52FA057",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 94.53,
   "hfov": 10.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.93
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 94.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_1_HS_2_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 177
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.93,
   "hfov": 10.78
  }
 ],
 "id": "overlay_248A262B_35B9_C017_41BE_16EF7892A582",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_1_HS_3_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -50.71,
   "hfov": 6.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.4
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -50.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_1_HS_3_0.png",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.4,
   "hfov": 6.95
  }
 ],
 "id": "overlay_24B47D7A_35A9_40F6_4183_2A4C03CEE240",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 83.98,
   "hfov": 12.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.69
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7, this.camera_1F4307E3_3D97_DCF9_41AF_EC238701B3C6); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D88166A_3D7D_252E_41B5_AE8BEAE472B3",
   "pitch": -13.69,
   "yaw": 83.98,
   "hfov": 12.15,
   "distance": 100
  }
 ],
 "id": "overlay_88CCB223_9049_73F4_41DD_76FF16F53B00",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -86.61,
   "hfov": 12.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2, this.camera_1F5967CB_3D97_DCC9_41BF_F8E111D906A1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D88A66C_3D7D_2529_41BA_852638F7CF5A",
   "pitch": -12.87,
   "yaw": -86.61,
   "hfov": 12.19,
   "distance": 100
  }
 ],
 "id": "overlay_8A59C8C0_9049_90B4_41E0_38361060A702",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 158.43,
   "hfov": 10.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.1
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C, this.camera_1F4C07D3_3D97_DCD9_41B4_B5BCB35AF24F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8B466C_3D7D_2529_41A2_785EFC977805",
   "pitch": -32.1,
   "yaw": 158.43,
   "hfov": 10.59,
   "distance": 50
  }
 ],
 "id": "overlay_88A87E07_9048_93BC_41CD_F2999362971C",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.album_20735968_2FDB_7831_41C5_DD2423727757_0",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.67",
     "class": "PhotoCameraPosition",
     "y": "0.31",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_20735968_2FDB_7831_41C5_DD2423727757_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -113.93,
   "hfov": 18.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.66
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5, this.camera_1F289753_3D97_DDD9_41C0_A9C511B1E471); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -113.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_1_HS_0_0.png",
      "width": 294,
      "class": "ImageResourceLevel",
      "height": 307
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.66,
   "hfov": 18.03
  }
 ],
 "id": "overlay_281BFF8B_3CFB_23EF_4184_DB4AA51E3DBC",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.album_203C4016_3038_8811_41A5_CB14C1A5B965_0",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.39",
     "class": "PhotoCameraPosition",
     "y": "0.59",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_203C4016_3038_8811_41A5_CB14C1A5B965_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -12.57,
   "hfov": 11.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.91
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376, this.camera_1A62E553_3D97_DDD9_41C8_96F98EB2A424); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8BF66D_3D7D_252B_41C9_AE739BCE13FB",
   "pitch": -23.91,
   "yaw": -12.57,
   "hfov": 11.43,
   "distance": 100
  }
 ],
 "id": "overlay_89699DD0_904B_9054_41D1_2C07A8029ABB",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 168.66,
   "hfov": 9.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.46
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E200CA_8DF4_9488_41CB_8AE22568B672, this.camera_1A70B543_3D97_DD39_41A1_2601A6A888B7); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8B866E_3D7D_2529_41AF_87844B6F486A",
   "pitch": -39.46,
   "yaw": 168.66,
   "hfov": 9.65,
   "distance": 50
  }
 ],
 "id": "overlay_8973EAC3_9049_F0B4_41DD_5002CB3B2301",
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -91.13,
   "hfov": 11.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.37
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C, this.camera_1FE5E873_3D97_D3D9_41C5_D7284103FA87); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D7FC656_3D7D_2579_41C9_D5AEB8B0DC00",
   "pitch": -17.37,
   "yaw": -91.13,
   "hfov": 11.93,
   "distance": 100
  }
 ],
 "id": "overlay_801E153C_8E0C_9D8F_41DA_73C954D67645",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 69.66,
   "hfov": 11.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.64
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86194DFF_8DF4_EC88_41BD_86393041826E, this.camera_1FDA6883_3D97_D339_41C7_F85E57E7B6F1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D7E0657_3D7D_2567_41C8_7FE2624D4E0C",
   "pitch": -20.64,
   "yaw": 69.66,
   "hfov": 11.7,
   "distance": 50
  }
 ],
 "id": "overlay_87B168D1_9049_9055_41D5_D163A501C316",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_1_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 88.98,
   "hfov": 15.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.61
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184, this.camera_1FC448A3_3D97_D379_41B0_A98E15F47522); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D7EA658_3D7D_2569_41C0_F57078FDA7C1",
   "pitch": -18.61,
   "yaw": 88.98,
   "hfov": 15.12,
   "distance": 100
  }
 ],
 "id": "overlay_2F14FC43_3CF5_255F_41A8_23C6076AB0B7",
 "data": {
  "label": "Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.64,
   "hfov": 19.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.02
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2FB56C60_3C9F_6559_41AF_EF976B49C674, this.camera_1FD15893_3D97_D359_419D_23EFA901ABB3); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 1.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_1_HS_5_0.png",
      "width": 314,
      "class": "ImageResourceLevel",
      "height": 320
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.02,
   "hfov": 19.34
  }
 ],
 "id": "overlay_2B9F0D69_3CFD_E72A_41B3_C535893F3FCE",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 113.39,
   "hfov": 14.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.26
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C, this.camera_1F358743_3D97_DD39_41B1_45E9F4527632); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 113.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_1_HS_0_0.png",
      "width": 228,
      "class": "ImageResourceLevel",
      "height": 258
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.26,
   "hfov": 14.06
  }
 ],
 "id": "overlay_25DC4F1F_3C9A_E4E7_41C1_A5B05301F9F3",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_2BAB958F_3C95_67E7_41C6_ABA3958AD280_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -82.93,
   "hfov": 12.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.91
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80, this.camera_1E99A99B_3D97_D548_41B7_3C51C4150A2F); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8AA673_3D7D_253F_41C9_6C03C81B0F0E",
   "pitch": -14.91,
   "yaw": -82.93,
   "hfov": 12.08,
   "distance": 100
  }
 ],
 "id": "overlay_83B96F72_9048_9054_41D9_3C03A8C1C8E5",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 92.98,
   "hfov": 12.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.14
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70, this.camera_1EA4398B_3D97_D548_41B5_B9EEEDC9D7A5); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D8D5674_3D7D_2539_41B3_8043A0005A82",
   "pitch": -16.14,
   "yaw": 92.98,
   "hfov": 12.01,
   "distance": 100
  }
 ],
 "id": "overlay_84CA5BBC_9049_B0D3_41E1_DC1011227E60",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 5.76,
   "hfov": 17.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.5
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 5.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_1_HS_2_0.png",
      "width": 289,
      "class": "ImageResourceLevel",
      "height": 288
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.5,
   "hfov": 17.56
  }
 ],
 "id": "overlay_3F773FF6_2FE8_9811_41BD_96960CD91679",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 69.25,
   "hfov": 12.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_86194DFF_8DF4_EC88_41BD_86393041826E, this.camera_1A7F9533_3D97_DD59_41BF_D8D9C5D6D8D9); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D894667_3D7D_2527_41B8_7F456E01695E",
   "pitch": -12.87,
   "yaw": 69.25,
   "hfov": 12.19,
   "distance": 100
  }
 ],
 "id": "overlay_87DC9B66_9049_B07C_41BF_61B0370A6D05",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 69,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D758661_3D7D_255B_41B5_F513F13120E8",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_851A8E01_8E0C_AF79_41DE_1CEE8805170C_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D74D662_3D7D_2559_41CA_AE4B22B406FC",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D8C6675_3D7D_253B_41C9_3DEAE6AC26DE",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86D419E5_8DF4_B4B9_41C8_ECB521226A80_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D8C3676_3D7D_2539_41C0_7EF63704F389",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D839682_3D7D_25D9_41C2_DBCF2261B388",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_335FD40B_3CB7_24EF_41B4_421573260B2B_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D821682_3D7D_25D9_41C7_C04D9316F968",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2AA37F82_3C9D_23D9_41B2_828C85E170F6_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D87368B_3D7D_25EF_41C1_C21003D548EA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D72865F_3D7D_2567_41BF_68DC3309E8FB",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D754660_3D7D_2559_41AA_BB6BE3DC3B02",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_851A81E7_8E0C_94B9_41BE_EC25E3350988_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D75F660_3D7D_2559_41CB_0A69FC8C2B9F",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D81067D_3D7D_252B_41C1_C75296CF6A99",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_85B1440E_8E0D_7388_41B5_7ECDB537A6DE_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D81B67E_3D7D_2529_41CD_93D8564FCD3B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D85C684_3D7D_25D9_41B0_16FF20DFE27B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D842686_3D7D_25D9_41AD_4C27EB0F32D6",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D84F686_3D7D_25D9_41B3_3EF6203D065D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_1_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_1D877687_3D7D_25E7_417A_417F7A95E23C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_292E9F38_3CEB_E329_4194_AC87A3FE8184_1_HS_4_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_1D871687_3D7D_25E7_41B5_0ACFD4F02FEC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D749663_3D7D_255F_41CB_3335FBD53558",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_851AAA1B_8E0C_B789_41DC_5B31E81B4B44_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D770663_3D7D_255F_41B3_545B780AFDE5",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E2EB5D_8DF5_7589_41DD_DC69460D9376_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D8A166F_3D7D_2527_41CD_555C7B017E57",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D73C65E_3D7D_2569_41C0_60DFFBD0AC91",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D73965E_3D7D_2569_41B7_2221B1F92C4A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E585C1_8DF3_7CF9_41DF_7DDFD9BE4120_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D72265F_3D7D_2567_41AF_F89F25712BD8",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D89D669_3D7D_252B_41CB_CD5C0DFDB0C6",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E233C4_8DF4_B4FF_41D0_C3F098A611D2_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D886669_3D7D_252B_41C1_A3BF2E9EDB38",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D8B3670_3D7D_2539_41C5_E56EFA5FBB96",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_86C02838_8DF5_9388_41D3_813B1EAC41F7_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D8BC671_3D7D_253B_41CC_AA6345AF1298",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8649C0C3_8DF5_94F8_41DF_D8B36AB50B70_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D8A4672_3D7D_2539_41C9_3C63EDD9331B",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D8F7677_3D7D_2527_41CB_A49BD6CD5D9F",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E8C682_8DF4_9F7B_41D2_150335D14871_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D8FE678_3D7D_2529_41BF_A9DBCF4E3655",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D764664_3D7D_2559_41B8_5D3D9976E24A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D760665_3D7D_255A_4181_E88663FA9B71",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86194DFF_8DF4_EC88_41BD_86393041826E_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D76A666_3D7D_2559_41BC_36B7177F9E34",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D71D65B_3D7D_256F_41CD_DFFC32419972",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E58A15_8DF3_B799_41D7_27E9EA0F2D0C_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D70765C_3D7D_2569_41C1_9459526EA960",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D70365C_3D7D_2569_41AF_AAD2B6E620DA",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E598F3_8DF3_9498_41C9_369BC735714E_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D70965D_3D7D_256B_41AC_EC8C8D9EA6BB",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D80067F_3D7D_2527_41BB_22831DB149EA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D835680_3D7D_25D9_41BF_EF8F1B5B3312",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_304858B4_3C95_2D39_4191_C59258F377A1_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D83F681_3D7D_25DB_41A8_9FDE7B52CFE8",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D8F9679_3D7D_252B_41CC_D5E133EEC79D",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E8E47E_8DF4_F388_41E1_89D006C12552_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D8E367A_3D7D_2529_41C0_A4AAD2760017",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D88166A_3D7D_252E_41B5_AE8BEAE472B3",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D88A66C_3D7D_2529_41BA_852638F7CF5A",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_86E200CA_8DF4_9488_41CB_8AE22568B672_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D8B466C_3D7D_2529_41A2_785EFC977805",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D8BF66D_3D7D_252B_41C9_AE739BCE13FB",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_86C61E22_8DF5_6FBB_41DD_70220FECE34C_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D8B866E_3D7D_2529_41AF_87844B6F486A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D7FC656_3D7D_2579_41C9_D5AEB8B0DC00",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D7E0657_3D7D_2567_41C8_7FE2624D4E0C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_86E5018C_8DF3_948F_41DD_3B179C8965D5_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_1D7EA658_3D7D_2569_41C0_F57078FDA7C1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D8AA673_3D7D_253F_41C9_6C03C81B0F0E",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86E71DB1_8DF4_AC99_41DA_1B3079D1B87F_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D8D5674_3D7D_2539_41B3_8043A0005A82",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_86C684DD_8DF4_9C89_41C2_8A77ADE5490B_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_1D894667_3D7D_2527_41B8_7F456E01695E",
 "rowCount": 3,
 "class": "AnimatedImageResource"
}],
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player2774"
 },
 "scripts": {
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getKey": function(key){  return window[key]; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "registerKey": function(key, value){  window[key] = value; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
