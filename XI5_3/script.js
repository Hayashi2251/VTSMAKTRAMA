(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.MapViewer",
  "this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2"
 ],
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist,this.mainPlayList])",
 "propagateClick": false,
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "visible",
 "defaultVRPointer": "laser",
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "paddingRight": 0,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_295F30F3_3834_FC50_41CB_17D88765105D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.56,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_294EB107_3834_FDB0_41C9_EC7E74632B7C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -98.46,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ruang musik",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_8730EFF6_8D3B_8475_41CB_6ABB9E666F6C",
  "this.panorama_8730DFF7_8D3B_8473_41D6_FCCA9610957C"
 ],
 "id": "panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -131.2,
   "class": "AdjacentPanorama",
   "yaw": 174.97,
   "panorama": "this.panorama_84118D6D_886A_C390_41CA_0A714215EF21",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28E8208D_3834_FCB0_41B9_4B07959846DB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 121.52,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_848FA502_886A_C390_41D9_41B7834D153D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_84118D6D_886A_C390_41CA_0A714215EF21_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_2985E177_3834_FC50_41C8_8FAEAA5C887B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -142.18,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_287A0FB0_3837_04D0_41B7_DEC0A268ED2A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.51,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_3_t.jpg",
 "id": "album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_3",
 "width": 1920,
 "label": "4",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 1080
},
{
 "thumbnailUrl": "media/photo_260E87FE_37BE_709F_41B1_830FE097A113_t.jpg",
 "id": "photo_260E87FE_37BE_709F_41B1_830FE097A113",
 "width": 1920,
 "label": "1",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_260E87FE_37BE_709F_41B1_830FE097A113.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 1080
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28B59022_3834_FBF0_41C3_815BC5D141D3",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.06,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Panggung",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_9B68C246_886A_C190_41D0_EFD70CF53B23",
  "this.overlay_9B21441D_8869_41B3_41DD_8493A0A1DA2B",
  "this.panorama_843EF551_886A_C3B0_418C_FDE70E188230_tcap0"
 ],
 "id": "panorama_843EF551_886A_C3B0_418C_FDE70E188230",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 13.49,
   "class": "AdjacentPanorama",
   "yaw": 168.37,
   "panorama": "this.panorama_84C375F5_8869_4273_41CE_7D44DFA9D158",
   "distance": 1
  },
  {
   "backwardYaw": -94.86,
   "class": "AdjacentPanorama",
   "yaw": 37.82,
   "panorama": "this.panorama_841AE5BC_886A_C2F0_41D9_D43596837146",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_8497A575_8869_4270_41A8_144765D1F826_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_841F8D76_8869_4271_41C4_13BCF6677A85_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_293D40CB_3834_FCB0_41C1_3975F063A984",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.22,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_2893AFF4_3837_0451_41C2_3E6195D19140",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.12,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Lapangan",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_9AA89B83_8869_4690_41D6_A97EAFEF0A0D",
  "this.overlay_9DF4D09E_886B_C2B0_41DB_476FDC3E5652",
  "this.panorama_841AE5BC_886A_C2F0_41D9_D43596837146_tcap0"
 ],
 "id": "panorama_841AE5BC_886A_C2F0_41D9_D43596837146",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.05,
   "class": "AdjacentPanorama",
   "yaw": 83.22,
   "panorama": "this.panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A",
   "distance": 1
  },
  {
   "backwardYaw": 37.82,
   "class": "AdjacentPanorama",
   "yaw": -94.86,
   "panorama": "this.panorama_843EF551_886A_C3B0_418C_FDE70E188230",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_2970812F_3834_FDF0_419A_EC2578DCCC6C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.34,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/photo_261F3D22_37B2_51A7_41B9_2ACA044002C8_t.jpg",
 "id": "photo_261F3D22_37B2_51A7_41B9_2ACA044002C8",
 "width": 1920,
 "label": "Blank Company Profile Business Presentation in Red Maroon White Geometric Style",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_261F3D22_37B2_51A7_41B9_2ACA044002C8.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 1080
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_290DD0B7_3834_FCD0_41B9_D8E215FC46BD",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.25,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "balkon kiri 1",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_91096BD3_889E_C6B7_41A8_CE2EF73A5F15",
  "this.overlay_92784174_889F_4270_41B0_DB300D29148D",
  "this.panorama_848FA502_886A_C390_41D9_41B7834D153D_tcap0"
 ],
 "id": "panorama_848FA502_886A_C390_41D9_41B7834D153D",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 105.08,
   "class": "AdjacentPanorama",
   "yaw": 8.44,
   "panorama": "this.panorama_84D4B54B_886A_C390_41C2_F15BF89288EF",
   "distance": 1
  },
  {
   "backwardYaw": -13.38,
   "class": "AdjacentPanorama",
   "yaw": 97.94,
   "panorama": "this.panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_285D8F5B_3837_0450_41CB_2F8E70301571",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.62,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28579F70_3837_0450_41B7_769AB5B03AB2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 141.77,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_29627146_3834_FDB0_41C2_C9F7F8B415EC",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -11.63,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_292CC0DE_3834_FC50_41AC_796127A1F4D1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 48.8,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_2940B11B_3834_FDD0_41BB_B380A3B184D0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.49,
  "pitch": 0
 }
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "depan aula",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_82D03A65_8D28_535C_41DD_027FC42779BB",
  "this.overlay_9D0A14A3_8D28_37D4_41D4_A06FA40962A8",
  "this.overlay_9C27B0C2_8D28_4F54_41BE_8C3CCFC2DB2D",
  "this.panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_tcap0",
  "this.overlay_270072EC_3752_50BD_419B_D9E9EAE2EB13",
  "this.overlay_262C88CF_37B3_D0FD_4183_F47558EEB506",
  "this.overlay_2808C1AA_3814_FCF0_41C3_85951438E92D"
 ],
 "id": "panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -38.23,
   "class": "AdjacentPanorama",
   "yaw": 99.08,
   "panorama": "this.panorama_841F8D76_8869_4271_41C4_13BCF6677A85",
   "distance": 1
  },
  {
   "backwardYaw": 83.22,
   "class": "AdjacentPanorama",
   "yaw": 177.05,
   "panorama": "this.panorama_841AE5BC_886A_C2F0_41D9_D43596837146",
   "distance": 1
  },
  {
   "backwardYaw": -24.98,
   "class": "AdjacentPanorama",
   "yaw": -116.38,
   "panorama": "this.panorama_84118D6D_886A_C390_41CA_0A714215EF21",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Lorong Kelas",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_9D276FB0_8899_5EF0_41DF_B86B71155D26",
  "this.overlay_91A214A3_889B_4290_41C5_02F07B8C7093",
  "this.panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_tcap0",
  "this.overlay_800D51E7_8DA2_D803_41DB_B012248A924C"
 ],
 "id": "panorama_84AB5E4A_886B_4190_41BB_88811DEC6559",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -89.78,
   "class": "AdjacentPanorama",
   "yaw": 82.78,
   "panorama": "this.panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418",
   "distance": 1
  },
  {
   "backwardYaw": -98.94,
   "class": "AdjacentPanorama",
   "yaw": -90.98,
   "panorama": "this.panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_t.png",
 "playList": "this.album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_AlbumPlayList",
 "label": "Photo Album 1",
 "id": "album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0",
 "class": "PhotoAlbum"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_841AE5BC_886A_C2F0_41D9_D43596837146_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/photo_25DB38E2_37AD_D0A7_41BB_7591709B690F_t.jpg",
 "id": "photo_25DB38E2_37AD_D0A7_41BB_7591709B690F",
 "width": 1920,
 "label": "3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_25DB38E2_37AD_D0A7_41BB_7591709B690F.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 1080
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "balkon kanan 3",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_9D2DBA6F_8869_C190_41DA_42BFF954223C",
  "this.overlay_9CEA98D5_8869_42B0_41D2_8470CE1C86DD",
  "this.panorama_841F8D76_8869_4271_41C4_13BCF6677A85_tcap0"
 ],
 "id": "panorama_841F8D76_8869_4271_41C4_13BCF6677A85",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 99.08,
   "class": "AdjacentPanorama",
   "yaw": -38.23,
   "panorama": "this.panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A",
   "distance": 1
  },
  {
   "backwardYaw": -58.48,
   "class": "AdjacentPanorama",
   "yaw": 146.88,
   "panorama": "this.panorama_8497A575_8869_4270_41A8_144765D1F826",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_camera",
   "media": "this.panorama_84AB5E4A_886B_4190_41BB_88811DEC6559",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_camera",
   "media": "this.panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_camera",
   "media": "this.panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_camera",
   "media": "this.panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_841AE5BC_886A_C2F0_41D9_D43596837146_camera",
   "media": "this.panorama_841AE5BC_886A_C2F0_41D9_D43596837146",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_843EF551_886A_C3B0_418C_FDE70E188230_camera",
   "media": "this.panorama_843EF551_886A_C3B0_418C_FDE70E188230",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_84118D6D_886A_C390_41CA_0A714215EF21_camera",
   "media": "this.panorama_84118D6D_886A_C390_41CA_0A714215EF21",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_camera",
   "media": "this.panorama_84D4B54B_886A_C390_41C2_F15BF89288EF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_848FA502_886A_C390_41D9_41B7834D153D_camera",
   "media": "this.panorama_848FA502_886A_C390_41D9_41B7834D153D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8497A575_8869_4270_41A8_144765D1F826_camera",
   "media": "this.panorama_8497A575_8869_4270_41A8_144765D1F826",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_841F8D76_8869_4271_41C4_13BCF6677A85_camera",
   "media": "this.panorama_841F8D76_8869_4271_41C4_13BCF6677A85",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_camera",
   "media": "this.panorama_84C375F5_8869_4273_41CE_7D44DFA9D158",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_camera",
   "media": "this.panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ]
},
{
 "thumbnailUrl": "media/album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_1_t.jpg",
 "id": "album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_1",
 "width": 1920,
 "label": "2",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 1080
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28F63079_3834_FC50_41BE_0A628FBEB1C3",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.92,
  "pitch": 0
 }
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28C6C064_3834_FC70_41B3_4F06A5A775FD",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.03,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_2_t.jpg",
 "id": "album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_2",
 "width": 1920,
 "label": "3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 1080
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_286E7FC5_3837_04B0_41C7_50A857C53F70",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.14,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_2883A00A_3834_FBB0_41B1_4EBC1D5A50E7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.22,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_289CCFDC_3837_0450_41CB_A5A230086C0D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.42,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Depan ruang musik",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_98FCEF70_8869_3E70_41A4_0E4A544230EE",
  "this.overlay_98C86F64_8879_5F91_41BE_9FCC892D8542",
  "this.overlay_99527063_887B_C197_41D9_A08C5FD44E42",
  "this.panorama_84118D6D_886A_C390_41CA_0A714215EF21_tcap0"
 ],
 "id": "panorama_84118D6D_886A_C390_41CA_0A714215EF21",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -66.65,
   "class": "AdjacentPanorama",
   "yaw": 81.54,
   "panorama": "this.panorama_84D4B54B_886A_C390_41C2_F15BF89288EF",
   "distance": 1
  },
  {
   "backwardYaw": -116.38,
   "class": "AdjacentPanorama",
   "yaw": -24.98,
   "panorama": "this.panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A",
   "distance": 1
  },
  {
   "backwardYaw": 174.97,
   "class": "AdjacentPanorama",
   "yaw": -131.2,
   "panorama": "this.panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "borderRadius": 5,
 "titlePaddingLeft": 5,
 "id": "window_38841FB6_3756_D0AF_41A0_8BF75FC901A0",
 "shadow": true,
 "shadowBlurRadius": 6,
 "width": 1000,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "contentOpaque": false,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "borderSize": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingRight": 0,
 "minHeight": 20,
 "bodyBorderSize": 0,
 "height": 600,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "titleTextDecoration": "none",
 "modal": true,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "backgroundColor": [],
 "bodyPaddingBottom": 5,
 "gap": 15,
 "scrollBarOpacity": 0.5,
 "closeButtonIconHeight": 12,
 "closeButtonBackgroundColor": [],
 "title": "",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingTop": 5,
 "bodyBackgroundOpacity": 1,
 "paddingTop": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "titleFontSize": "1.29vmin",
 "paddingLeft": 0,
 "headerBorderColor": "#000000",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "layout": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontWeight": "normal",
 "children": [
  "this.htmlText_3886DFB6_3756_D0AF_41BF_CF61ADA1310D",
  "this.image_uid280A7F05_3837_05B0_41B1_17EFDFAB2CD9_1"
 ],
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingRight": 5,
 "headerPaddingRight": 10,
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBorderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "class": "Window",
 "headerVerticalAlign": "middle",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontStyle": "normal",
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window6370"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowOpacity": 0.5
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Lorong kelas 2",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_9EB78FD7_889B_7EB0_41DA_80C78483ED20",
  "this.panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_tcap0",
  "this.overlay_396FFF56_37F3_0450_41A8_A349130701B8",
  "this.overlay_38B8D097_37F5_7CD0_41C7_010AB8BD0ADF"
 ],
 "id": "panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -90.98,
   "class": "AdjacentPanorama",
   "yaw": -98.94,
   "panorama": "this.panorama_84AB5E4A_886B_4190_41BB_88811DEC6559",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "balkon kanan 2",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_9FE08B9E_8897_46B0_41DC_D488AF20792C",
  "this.overlay_9D6C86C0_8897_4E90_41C2_CBB46A5D37B7",
  "this.panorama_8497A575_8869_4270_41A8_144765D1F826_tcap0"
 ],
 "id": "panorama_8497A575_8869_4270_41A8_144765D1F826",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 94.58,
   "class": "AdjacentPanorama",
   "yaw": 131.51,
   "panorama": "this.panorama_84C375F5_8869_4273_41CE_7D44DFA9D158",
   "distance": 1
  },
  {
   "backwardYaw": 146.88,
   "class": "AdjacentPanorama",
   "yaw": -58.48,
   "panorama": "this.panorama_841F8D76_8869_4271_41C4_13BCF6677A85",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_29921160_3834_FC70_41B8_56903639FE14",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.95,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_0_t.jpg",
 "id": "album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_0",
 "width": 1920,
 "label": "1",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 1080
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_2832CF2F_3837_05F0_41BA_9EF6C03FE47D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.02,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "balkon kiri 2",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_90FDEC31_8899_41F0_41DF_44D9E62B4EBF",
  "this.overlay_9149EFFD_8899_3E70_41DF_7C313B07D0B6",
  "this.panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_tcap0"
 ],
 "id": "panorama_84D4B54B_886A_C390_41C2_F15BF89288EF",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 8.44,
   "class": "AdjacentPanorama",
   "yaw": 105.08,
   "panorama": "this.panorama_848FA502_886A_C390_41D9_41B7834D153D",
   "distance": 1
  },
  {
   "backwardYaw": 81.54,
   "class": "AdjacentPanorama",
   "yaw": -66.65,
   "panorama": "this.panorama_84118D6D_886A_C390_41CA_0A714215EF21",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "borderRadius": 5,
 "titlePaddingLeft": 5,
 "id": "window_24FB1C38_37B2_F7A3_41C3_7928B748630F",
 "shadow": true,
 "shadowBlurRadius": 6,
 "width": 1000,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "contentOpaque": false,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "borderSize": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingRight": 0,
 "minHeight": 20,
 "height": 600,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "titleTextDecoration": "none",
 "modal": true,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "backgroundColor": [],
 "bodyPaddingBottom": 5,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "closeButtonIconHeight": 12,
 "closeButtonBackgroundColor": [],
 "title": "",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingTop": 5,
 "paddingTop": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "titleFontSize": "1.29vmin",
 "paddingLeft": 0,
 "headerBorderColor": "#000000",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "layout": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontWeight": "normal",
 "children": [
  "this.htmlText_24F93C38_37B2_F7A3_41B7_374E17CFFE2D",
  "this.image_uid280A2F06_3837_05B0_41B9_CC4E72EAD0F7_1"
 ],
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingRight": 5,
 "headerPaddingRight": 10,
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "class": "Window",
 "headerVerticalAlign": "middle",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontStyle": "normal",
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window10257"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowOpacity": 0.5
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28D7004D_3834_FBB0_4154_E1DB63B133EF",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 63.62,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28A51038_3834_FBD0_4182_F19CF8C9BC51",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 113.35,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_2825AF46_3837_05B0_41C8_A8AB6D71D90A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -74.92,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Pertigaan",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_9D42FF6B_886B_3F90_41D2_EFF5FC44365F",
  "this.overlay_9E580CEC_886B_C290_41C8_1813B5A0B9AD",
  "this.overlay_9E28735E_886A_C7B0_41DD_3D4E323B2A0F",
  "this.panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_tcap0"
 ],
 "id": "panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 97.94,
   "class": "AdjacentPanorama",
   "yaw": -13.38,
   "panorama": "this.panorama_848FA502_886A_C390_41D9_41B7834D153D",
   "distance": 1
  },
  {
   "backwardYaw": 2.75,
   "class": "AdjacentPanorama",
   "yaw": 171.66,
   "panorama": "this.panorama_84C375F5_8869_4273_41CE_7D44DFA9D158",
   "distance": 1
  },
  {
   "backwardYaw": 82.78,
   "class": "AdjacentPanorama",
   "yaw": -89.78,
   "panorama": "this.panorama_84AB5E4A_886B_4190_41BB_88811DEC6559",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "borderRadius": 5,
 "titlePaddingLeft": 5,
 "id": "window_38E18592_376E_D167_41C0_00E8CB0F7735",
 "shadow": true,
 "shadowBlurRadius": 6,
 "width": 1000,
 "paddingBottom": 0,
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "contentOpaque": false,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "closeButtonBorderSize": 0,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "borderSize": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "closeButtonIconWidth": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingRight": 0,
 "minHeight": 20,
 "bodyBorderSize": 0,
 "height": 800,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "titleTextDecoration": "none",
 "modal": true,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "backgroundColor": [],
 "bodyPaddingBottom": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonBackgroundOpacity": 1,
 "gap": 15,
 "scrollBarOpacity": 0.5,
 "closeButtonIconHeight": 12,
 "closeButtonBackgroundColor": [],
 "title": "",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingTop": 5,
 "bodyBackgroundOpacity": 1,
 "closeButtonPaddingLeft": 0,
 "paddingTop": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "titleFontSize": "1.29vmin",
 "paddingLeft": 0,
 "headerBorderColor": "#000000",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "veilOpacity": 0.4,
 "closeButtonBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "layout": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleFontWeight": "normal",
 "children": [
  "this.htmlText_38E1C593_376E_D165_41CA_096D467E6A1B",
  "this.image_uid280DEEFA_3837_0450_41AF_E20FABD05274_1",
  "this.image_uid280DEEFA_3837_0450_41AF_E20FABD05274_2"
 ],
 "headerPaddingLeft": 10,
 "shadowColor": "#000000",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingRight": 5,
 "headerPaddingRight": 10,
 "titlePaddingBottom": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBorderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "class": "Window",
 "headerVerticalAlign": "middle",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontStyle": "normal",
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window3693"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingTop": 10,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowOpacity": 0.5
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_284F0F85_3837_04B0_4186_BE97C5BCCBAE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.78,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "balkon kanan",
 "hfovMin": "150%",
 "hfov": 360,
 "overlays": [
  "this.overlay_9D48C50E_886E_C391_41CC_6FF0A44E1B6C",
  "this.overlay_9F509015_8869_41B3_41D8_C816E1D9572A",
  "this.overlay_9BC6F683_8869_4E97_41B9_3443CAB81462",
  "this.panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_tcap0"
 ],
 "id": "panorama_84C375F5_8869_4273_41CE_7D44DFA9D158",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 131.51,
   "class": "AdjacentPanorama",
   "yaw": 94.58,
   "panorama": "this.panorama_8497A575_8869_4270_41A8_144765D1F826",
   "distance": 1
  },
  {
   "backwardYaw": 171.66,
   "class": "AdjacentPanorama",
   "yaw": 2.75,
   "panorama": "this.panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418",
   "distance": 1
  },
  {
   "backwardYaw": 168.37,
   "class": "AdjacentPanorama",
   "yaw": 13.49,
   "panorama": "this.panorama_843EF551_886A_C3B0_418C_FDE70E188230",
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "class": "PlayList",
 "id": "ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist",
 "items": [
  {
   "camera": "this.panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_camera",
   "media": "this.panorama_84AB5E4A_886B_4190_41BB_88811DEC6559",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_camera",
   "media": "this.panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_camera",
   "media": "this.panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_camera",
   "media": "this.panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_841AE5BC_886A_C2F0_41D9_D43596837146_camera",
   "media": "this.panorama_841AE5BC_886A_C2F0_41D9_D43596837146",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_843EF551_886A_C3B0_418C_FDE70E188230_camera",
   "media": "this.panorama_843EF551_886A_C3B0_418C_FDE70E188230",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_84118D6D_886A_C390_41CA_0A714215EF21_camera",
   "media": "this.panorama_84118D6D_886A_C390_41CA_0A714215EF21",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_camera",
   "media": "this.panorama_84D4B54B_886A_C390_41C2_F15BF89288EF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_848FA502_886A_C390_41D9_41B7834D153D_camera",
   "media": "this.panorama_848FA502_886A_C390_41D9_41B7834D153D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_8497A575_8869_4270_41A8_144765D1F826_camera",
   "media": "this.panorama_8497A575_8869_4270_41A8_144765D1F826",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_841F8D76_8869_4271_41C4_13BCF6677A85_camera",
   "media": "this.panorama_841F8D76_8869_4271_41C4_13BCF6677A85",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_camera",
   "media": "this.panorama_84C375F5_8869_4273_41CE_7D44DFA9D158",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_camera",
   "media": "this.panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist, 13, 0)",
   "media": "this.album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ]
},
{
 "thumbnailUrl": "media/photo_25A851FD_37F3_B09C_41C1_76B82A794EBF_t.jpg",
 "id": "photo_25A851FD_37F3_B09C_41C1_76B82A794EBF",
 "width": 1920,
 "label": "Blank Company Profile Business Presentation in Red Maroon White Geometric Style (1)",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_25A851FD_37F3_B09C_41C1_76B82A794EBF.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "duration": 5000,
 "height": 1080
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_843EF551_886A_C3B0_418C_FDE70E188230_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_291BB0A1_3834_FCF0_41C2_28569B4C4A17",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.06,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28400F9A_3837_04D0_41CB_1EC481F3C6A9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.02,
  "pitch": 0
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#000000",
 "borderSize": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "class": "ViewerArea",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "shadow": false,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MapViewer",
 "left": "0%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "40%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#000000",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "30%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": "0%",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "class": "ViewerArea",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "MapViewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "shadow": false,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "borderRadius": 5,
 "id": "ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2",
 "left": "0%",
 "selectedItemLabelFontWeight": "bold",
 "width": 130.3,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#FFFFFF",
 "shadow": false,
 "playList": "this.ThumbnailList_9CE742F2_8DE1_D81C_41A1_2B6E3587BCF2_playlist",
 "itemLabelGap": 9,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "itemPaddingBottom": 3,
 "itemThumbnailShadowColor": "#000000",
 "paddingRight": 20,
 "selectedItemLabelFontColor": "#FFCC00",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#FFFFFF",
 "itemThumbnailHeight": 75,
 "minWidth": 20,
 "itemLabelFontStyle": "normal",
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "gap": 10,
 "height": "48.633%",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailWidth": 75,
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Arial",
 "paddingTop": 10,
 "itemThumbnailShadowVerticalLength": 3,
 "paddingLeft": 20,
 "itemHorizontalAlign": "center",
 "backgroundOpacity": 0.24,
 "itemThumbnailShadowOpacity": 0.54,
 "itemThumbnailShadow": true,
 "itemLabelPosition": "bottom",
 "layout": "vertical",
 "itemPaddingLeft": 3,
 "itemThumbnailShadowSpread": 1,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 50,
 "propagateClick": false,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "bottom": "21.32%",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "rollOverItemLabelFontWeight": "normal",
 "class": "ThumbnailList",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 8,
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemVerticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84118D6D_886A_C390_41CA_0A714215EF21, this.camera_292CC0DE_3834_FC50_41AC_796127A1F4D1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": 174.97,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_1_HS_0_0.png",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 37
     }
    ]
   },
   "pitch": -7.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.33
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.97,
   "hfov": 6.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.17
  }
 ],
 "id": "overlay_8730EFF6_8D3B_8475_41CB_6ABB9E666F6C",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8730DFF7_8D3B_8473_41D6_FCCA9610957C",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_841AE5BC_886A_C2F0_41D9_D43596837146, this.camera_286E7FC5_3837_04B0_41C7_50A857C53F70); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_815653B3_8D28_713B_41DE_F439380720FE",
   "yaw": 37.82,
   "pitch": -22.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.46
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.82,
   "hfov": 17.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.31
  }
 ],
 "id": "overlay_9B68C246_886A_C190_41D0_EFD70CF53B23",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84C375F5_8869_4273_41CE_7D44DFA9D158, this.camera_287A0FB0_3837_04D0_41B7_DEC0A268ED2A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_815603B4_8D28_713C_41D2_8155CD8774D6",
   "yaw": 168.37,
   "pitch": -20.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.15
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.37,
   "hfov": 12.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.52
  }
 ],
 "id": "overlay_9B21441D_8869_41B3_41DD_8493A0A1DA2B",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_8579295F_886B_C3B0_41D7_CF36492AB9BA_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_843EF551_886A_C3B0_418C_FDE70E188230_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A, this.camera_29921160_3834_FC70_41B8_56903639FE14); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": 83.22,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_1_HS_0_0.png",
      "width": 164,
      "class": "ImageResourceLevel",
      "height": 164
     }
    ]
   },
   "pitch": -2.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.22,
   "hfov": 10.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.25
  }
 ],
 "id": "overlay_9AA89B83_8869_4690_41D6_A97EAFEF0A0D",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_843EF551_886A_C3B0_418C_FDE70E188230, this.camera_2985E177_3834_FC50_41C8_8FAEAA5C887B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_8151E3B3_8D28_7134_41D8_F8D516C6200A",
   "yaw": -94.86,
   "pitch": -15.01,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.23
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.86,
   "hfov": 18.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.01
  }
 ],
 "id": "overlay_9DF4D09E_886B_C2B0_41DB_476FDC3E5652",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_8579295F_886B_C3B0_41D7_CF36492AB9BA_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_841AE5BC_886A_C2F0_41D9_D43596837146_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84D4B54B_886A_C390_41C2_F15BF89288EF, this.camera_2825AF46_3837_05B0_41C8_A8AB6D71D90A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_8154C3B6_8D28_713C_41E0_E765595432DC",
   "yaw": 8.44,
   "pitch": -35.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.39
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.44,
   "hfov": 15.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.4
  }
 ],
 "id": "overlay_91096BD3_889E_C6B7_41A8_CE2EF73A5F15",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418, this.camera_285D8F5B_3837_0450_41CB_2F8E70301571); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_8154A3B6_8D28_713C_41C2_BFB8BF9A60EC",
   "yaw": 97.94,
   "pitch": -37.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.9
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.94,
   "hfov": 14.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.87
  }
 ],
 "id": "overlay_92784174_889F_4270_41B0_DB300D29148D",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_8579295F_886B_C3B0_41D7_CF36492AB9BA_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_848FA502_886A_C390_41D9_41B7834D153D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_841F8D76_8869_4271_41C4_13BCF6677A85, this.camera_28579F70_3837_0450_41B7_769AB5B03AB2); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_9E45C9A3_8D38_71D4_41D0_422430F27A55",
   "yaw": 99.08,
   "pitch": -13.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.35
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.08,
   "hfov": 16.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.2
  }
 ],
 "id": "overlay_82D03A65_8D28_535C_41DD_027FC42779BB",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84118D6D_886A_C390_41CA_0A714215EF21, this.camera_28400F9A_3837_04D0_41CB_1EC481F3C6A9); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_9E45B9A3_8D38_71D4_41C3_BBB4D6DC634F",
   "yaw": -116.38,
   "pitch": -13.05,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.02
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.38,
   "hfov": 19.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.05
  }
 ],
 "id": "overlay_9D0A14A3_8D28_37D4_41D4_A06FA40962A8",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_841AE5BC_886A_C2F0_41D9_D43596837146, this.camera_284F0F85_3837_04B0_4186_BE97C5BCCBAE); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": 177.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_1_HS_2_0.png",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ]
   },
   "pitch": -10.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.81
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.05,
   "hfov": 5.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.1
  }
 ],
 "id": "overlay_9C27B0C2_8D28_4F54_41BE_8C3CCFC2DB2D",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_8579295F_886B_C3B0_41D7_CF36492AB9BA_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_38841FB6_3756_D0AF_41A0_8BF75FC901A0, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 170.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0_HS_3_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": -3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.3
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.08,
   "hfov": 5.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -3
  }
 ],
 "id": "overlay_270072EC_3752_50BD_419B_D9E9EAE2EB13",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_24FB1C38_37B2_F7A3_41C3_7928B748630F, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 88.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0_HS_4_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ]
   },
   "pitch": -2.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.44
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.75,
   "hfov": 5.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0_HS_4_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.34
  }
 ],
 "id": "overlay_262C88CF_37B3_D0FD_4183_F47558EEB506",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://smaktramavt.vercel.app/VTXI4', '_top')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": 86.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0_HS_5_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": -13.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.21
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.51,
   "hfov": 9.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.05
  }
 ],
 "id": "overlay_2808C1AA_3814_FCF0_41C3_85951438E92D",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418, this.camera_2883A00A_3834_FBB0_41B1_4EBC1D5A50E7); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_815363AF_8D28_712C_41D2_0DF3C2C1DF72",
   "yaw": 82.78,
   "pitch": -23.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.32
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.78,
   "hfov": 17.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.46
  }
 ],
 "id": "overlay_9D276FB0_8899_5EF0_41DF_B86B71155D26",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0, this.camera_28B59022_3834_FBF0_41C3_815BC5D141D3); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_8153C3B0_8D28_7134_41B2_2E5B3C9FAE93",
   "yaw": -90.98,
   "pitch": -24.42,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.98,
   "hfov": 9.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.42
  }
 ],
 "id": "overlay_91A214A3_889B_4290_41C5_02F07B8C7093",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_8579295F_886B_C3B0_41D7_CF36492AB9BA_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_38E18592_376E_D167_41C0_00E8CB0F7735, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 168.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0_HS_2_0.png",
      "width": 217,
      "class": "ImageResourceLevel",
      "height": 217
     }
    ]
   },
   "pitch": -14.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.79,
   "hfov": 13.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.25
  }
 ],
 "id": "overlay_800D51E7_8DA2_D803_41DB_B012248A924C",
 "data": {
  "label": "Image"
 }
},
{
 "class": "PhotoPlayList",
 "id": "album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_AlbumPlayList",
 "items": [
  {
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "x": "0.54",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.38"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   },
   "media": "this.album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.52"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   },
   "media": "this.album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.54"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   },
   "media": "this.album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_2",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "x": "0.55",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.26"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   },
   "media": "this.album_2651A098_37B7_AF63_4175_5AB9CFF4E6B0_3",
   "class": "PhotoPlayListItem"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8497A575_8869_4270_41A8_144765D1F826, this.camera_28E8208D_3834_FCB0_41B9_4B07959846DB); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_8154E3B8_8D28_7134_41A9_509122614018",
   "yaw": 146.88,
   "pitch": -27.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.68
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.88,
   "hfov": 16.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.92
  }
 ],
 "id": "overlay_9D2DBA6F_8869_C190_41DA_42BFF954223C",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A, this.camera_28F63079_3834_FC50_41BE_0A628FBEB1C3); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_8154A3B8_8D28_7134_41D6_F634535EA545",
   "yaw": -38.23,
   "pitch": -26.61,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.23,
   "hfov": 16.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.61
  }
 ],
 "id": "overlay_9CEA98D5_8869_42B0_41D2_8470CE1C86DD",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_8579295F_886B_C3B0_41D7_CF36492AB9BA_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_841F8D76_8869_4271_41C4_13BCF6677A85_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_87307FF6_8D3B_8475_41C3_6128F8306E5E, this.camera_28C6C064_3834_FC70_41B3_4F06A5A775FD); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": -131.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_1_HS_0_0.png",
      "width": 164,
      "class": "ImageResourceLevel",
      "height": 164
     }
    ]
   },
   "pitch": -8.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.18
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.2,
   "hfov": 10.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.7
  }
 ],
 "id": "overlay_98FCEF70_8869_3E70_41A4_0E4A544230EE",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A, this.camera_28D7004D_3834_FBB0_4154_E1DB63B133EF); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_815743B5_8D28_713C_41E0_C9608342EAA5",
   "yaw": -24.98,
   "pitch": -27.44,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.75
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.98,
   "hfov": 16.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.44
  }
 ],
 "id": "overlay_98C86F64_8879_5F91_41BE_9FCC892D8542",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84D4B54B_886A_C390_41C2_F15BF89288EF, this.camera_28A51038_3834_FBD0_4182_F19CF8C9BC51); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_815703B5_8D28_713C_41E0_1B6D32917A80",
   "yaw": 81.54,
   "pitch": -34.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.52
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.54,
   "hfov": 15.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.71
  }
 ],
 "id": "overlay_99527063_887B_C197_41D9_A08C5FD44E42",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_8579295F_886B_C3B0_41D7_CF36492AB9BA_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_84118D6D_886A_C390_41CA_0A714215EF21_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "borderRadius": 0,
 "id": "htmlText_3886DFB6_3756_D0AF_41BF_CF61ADA1310D",
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "10%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText6371"
 },
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "id": "image_uid280A7F05_3837_05B0_41B1_17EFDFAB2CD9_1",
 "width": "100%",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "url": "media/photo_25A851FD_37F3_B09C_41C1_76B82A794EBF.jpg",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 0,
 "class": "Image",
 "height": "89%",
 "paddingTop": 0,
 "data": {
  "name": "Image10565"
 },
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84AB5E4A_886B_4190_41BB_88811DEC6559, this.camera_2832CF2F_3837_05F0_41BA_9EF6C03FE47D); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_815043B1_8D28_7134_4195_DF5E7426723C",
   "yaw": -98.94,
   "pitch": -33.55,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.58
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.94,
   "hfov": 8.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.55
  }
 ],
 "id": "overlay_9EB78FD7_889B_7EB0_41DA_80C78483ED20",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_8579295F_886B_C3B0_41D7_CF36492AB9BA_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://smaktramavt.vercel.app/XI5_3/XI6_4/', '_top')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_2AD80A04_380D_0FB0_41B8_C2B779D90625",
   "yaw": 161.84,
   "pitch": -14.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.1
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.84,
   "hfov": 9.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.27
  }
 ],
 "id": "overlay_396FFF56_37F3_0450_41A8_A349130701B8",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://smaktramavt.vercel.app/VTXI4', '_top')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": 174.9,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0_HS_2_0.png",
      "width": 162,
      "class": "ImageResourceLevel",
      "height": 231
     }
    ]
   },
   "pitch": -26.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.06
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.9,
   "hfov": 9.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -26.78
  }
 ],
 "id": "overlay_38B8D097_37F5_7CD0_41C7_010AB8BD0ADF",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_841F8D76_8869_4271_41C4_13BCF6677A85, this.camera_2893AFF4_3837_0451_41C2_3E6195D19140); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_8157B3B7_8D28_713C_41C4_2CCC3813D5EA",
   "yaw": -58.48,
   "pitch": -19.75,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.76
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.48,
   "hfov": 17.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.75
  }
 ],
 "id": "overlay_9FE08B9E_8897_46B0_41DC_D488AF20792C",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84C375F5_8869_4273_41CE_7D44DFA9D158, this.camera_289CCFDC_3837_0450_41CB_A5A230086C0D); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_815413B8_8D28_7134_41A6_E047177A9609",
   "yaw": 131.51,
   "pitch": -21.33,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.58
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.51,
   "hfov": 17.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.33
  }
 ],
 "id": "overlay_9D6C86C0_8897_4E90_41C2_CBB46A5D37B7",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_8579295F_886B_C3B0_41D7_CF36492AB9BA_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8497A575_8869_4270_41A8_144765D1F826_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84118D6D_886A_C390_41CA_0A714215EF21, this.camera_294EB107_3834_FDB0_41C9_EC7E74632B7C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_815793B5_8D28_713C_4198_1450D4016EB5",
   "yaw": -66.65,
   "pitch": -25.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.06
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.65,
   "hfov": 17.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.31
  }
 ],
 "id": "overlay_90FDEC31_8899_41F0_41DF_44D9E62B4EBF",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_848FA502_886A_C390_41D9_41B7834D153D, this.camera_295F30F3_3834_FC50_41CB_17D88765105D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_815453B6_8D28_713C_41D2_A1E5F394F72D",
   "yaw": 105.08,
   "pitch": -29.98,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.35
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.08,
   "hfov": 16.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.98
  }
 ],
 "id": "overlay_9149EFFD_8899_3E70_41DF_7C313B07D0B6",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_8579295F_886B_C3B0_41D7_CF36492AB9BA_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "borderRadius": 0,
 "id": "htmlText_24F93C38_37B2_F7A3_41B7_374E17CFFE2D",
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "10%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText10258"
 },
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "id": "image_uid280A2F06_3837_05B0_41B9_CC4E72EAD0F7_1",
 "width": "100%",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "url": "media/photo_25DB38E2_37AD_D0A7_41BB_7591709B690F.jpg",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 0,
 "class": "Image",
 "height": "89%",
 "paddingTop": 0,
 "data": {
  "name": "Image10566"
 },
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84C375F5_8869_4273_41CE_7D44DFA9D158, this.camera_290DD0B7_3834_FCD0_41B9_D8E215FC46BD); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_815033B1_8D28_7134_41CA_6C01EAB4AB3E",
   "yaw": 171.66,
   "pitch": -35.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.39
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.66,
   "hfov": 10.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.1
  }
 ],
 "id": "overlay_9D42FF6B_886B_3F90_41D2_EFF5FC44365F",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_848FA502_886A_C390_41D9_41B7834D153D, this.camera_291BB0A1_3834_FCF0_41C2_28569B4C4A17); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_8150E3B2_8D28_7134_41D5_43A7B8CFDE48",
   "yaw": -13.38,
   "pitch": -27.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.73
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.38,
   "hfov": 16.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.57
  }
 ],
 "id": "overlay_9E580CEC_886B_C290_41C8_1813B5A0B9AD",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84AB5E4A_886B_4190_41BB_88811DEC6559, this.camera_293D40CB_3834_FCB0_41C1_3975F063A984); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_815153B2_8D28_7134_41DE_B313CD7E0B65",
   "yaw": -89.78,
   "pitch": -31.01,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.18
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.78,
   "hfov": 16.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.01
  }
 ],
 "id": "overlay_9E28735E_886A_C7B0_41DD_3D4E323B2A0F",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_8579295F_886B_C3B0_41D7_CF36492AB9BA_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "borderRadius": 0,
 "id": "htmlText_38E1C593_376E_D165_41CA_096D467E6A1B",
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "10%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText3694"
 },
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "id": "image_uid280DEEFA_3837_0450_41AF_E20FABD05274_1",
 "width": "100%",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "url": "media/photo_260E87FE_37BE_709F_41B1_830FE097A113.jpg",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 0,
 "class": "Image",
 "height": "44%",
 "paddingTop": 0,
 "data": {
  "name": "Image10563"
 },
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "id": "image_uid280DEEFA_3837_0450_41AF_E20FABD05274_2",
 "width": "100%",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "url": "media/photo_261F3D22_37B2_51A7_41B9_2ACA044002C8.jpg",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 0,
 "class": "Image",
 "height": "44%",
 "paddingTop": 0,
 "data": {
  "name": "Image10564"
 },
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418, this.camera_2970812F_3834_FDF0_419A_EC2578DCCC6C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_815533B9_8D28_7134_41D9_8573372ADC66",
   "yaw": 2.75,
   "pitch": -42.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.83
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.75,
   "hfov": 13.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.88
  }
 ],
 "id": "overlay_9D48C50E_886E_C391_41CC_6FF0A44E1B6C",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8497A575_8869_4270_41A8_144765D1F826, this.camera_2940B11B_3834_FDD0_41BB_B380A3B184D0); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_8155E3B9_8D28_7134_41D8_B1BF9E49C929",
   "yaw": 94.58,
   "pitch": -40.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.33
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.58,
   "hfov": 14.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.62
  }
 ],
 "id": "overlay_9F509015_8869_41B3_41D8_C816E1D9572A",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_843EF551_886A_C3B0_418C_FDE70E188230, this.camera_29627146_3834_FDB0_41C2_C9F7F8B415EC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": 13.49,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_1_HS_2_0.png",
      "width": 164,
      "class": "ImageResourceLevel",
      "height": 164
     }
    ]
   },
   "pitch": -0.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.49,
   "hfov": 10.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.74
  }
 ],
 "id": "overlay_9BC6F683_8869_4E97_41B9_3443CAB81462",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_8579295F_886B_C3B0_41D7_CF36492AB9BA_tcap0.png",
    "width": 345,
    "class": "ImageResourceLevel",
    "height": 345
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_815653B3_8D28_713B_41DE_F439380720FE",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_815603B4_8D28_713C_41D2_8155CD8774D6",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_843EF551_886A_C3B0_418C_FDE70E188230_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_8151E3B3_8D28_7134_41D8_F8D516C6200A",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_841AE5BC_886A_C2F0_41D9_D43596837146_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_8154C3B6_8D28_713C_41E0_E765595432DC",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_8154A3B6_8D28_713C_41C2_BFB8BF9A60EC",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_848FA502_886A_C390_41D9_41B7834D153D_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_9E45C9A3_8D38_71D4_41D0_422430F27A55",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_9E45B9A3_8D38_71D4_41C3_BBB4D6DC634F",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_80DCD280_8D28_33D4_41DC_C9300CD1C94A_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_815363AF_8D28_712C_41D2_0DF3C2C1DF72",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_8153C3B0_8D28_7134_41B2_2E5B3C9FAE93",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84AB5E4A_886B_4190_41BB_88811DEC6559_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_8154E3B8_8D28_7134_41A9_509122614018",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_8154A3B8_8D28_7134_41D6_F634535EA545",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_841F8D76_8869_4271_41C4_13BCF6677A85_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_815743B5_8D28_713C_41E0_C9608342EAA5",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_815703B5_8D28_713C_41E0_1B6D32917A80",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84118D6D_886A_C390_41CA_0A714215EF21_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_815043B1_8D28_7134_4195_DF5E7426723C",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_2AD80A04_380D_0FB0_41B8_C2B779D90625",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84959E5C_886B_41B0_41D0_3233F1BB17A0_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_8157B3B7_8D28_713C_41C4_2CCC3813D5EA",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_815413B8_8D28_7134_41A6_E047177A9609",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8497A575_8869_4270_41A8_144765D1F826_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_815793B5_8D28_713C_4198_1450D4016EB5",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_815453B6_8D28_713C_41D2_A1E5F394F72D",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84D4B54B_886A_C390_41C2_F15BF89288EF_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_815033B1_8D28_7134_41CA_6C01EAB4AB3E",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_8150E3B2_8D28_7134_41D5_43A7B8CFDE48",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_815153B2_8D28_7134_41DE_B313CD7E0B65",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84EC7E1D_886B_41B0_41D9_9606A4C84418_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_815533B9_8D28_7134_41D9_8573372ADC66",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "frameCount": 9,
 "id": "AnimatedImageResource_8155E3B9_8D28_7134_41D8_B1BF9E49C929",
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84C375F5_8869_4273_41CE_7D44DFA9D158_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
}],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scripts": {
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getKey": function(key){  return window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Player760"
 },
 "height": "100%",
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "shadow": false,
 "downloadEnabled": false
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
