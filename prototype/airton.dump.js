// DATAS

var OFF = [2984, 1748, 428, 1116, 436, 1116, 432, 392, 432, 396, 428, 392, 432, 1120, 432, 392, 432, 408, 432, 1116, 432, 1116, 432, 396, 428, 1120, 432, 392, 432, 396, 428, 1116, 456, 1108, 456, 372, 432, 1116, 432, 1116, 432, 396, 452, 372, 452, 1092, 456, 372, 456, 388, 452, 1092, 456, 376, 448, 372, 452, 372, 456, 368, 456, 372, 452, 372, 452, 388, 452, 372, 456, 368, 456, 376, 448, 368, 456, 372, 456, 368, 456, 376, 448, 384, 456, 376, 448, 372, 452, 380, 448, 368, 456, 368, 456, 1092, 456, 372, 452, 388, 452, 1092, 456, 372, 456, 368, 456, 376, 448, 372, 452, 372, 456, 376, 448, 384, 456, 1092, 456, 1092, 456, 1092, 456, 380, 444, 372, 456, 372, 452, 376, 448, 396, 444, 1092, 460, 376, 448, 1092, 456, 1092, 456, 1092, 456, 1096, 452, 380, 448, 384, 456, 376, 448, 372, 452, 372, 452, 372, 456, 376, 448, 372, 452, 372, 452, 388, 452, 372, 452, 372, 452, 372, 456, 368, 456, 372, 452, 380, 444, 372, 452, 388, 456, 368, 456, 372, 452, 372, 452, 380, 444, 372, 452, 372, 452, 380, 444, 388, 452, 376, 452, 372, 452, 372, 452, 380, 444, 372, 452, 376, 452, 376, 448, 388, 452, 372, 452, 1096, 452, 372, 452, 1096, 452, 1096, 456, 1096, 452, 1096, 452, 380, 448];
var ON_HOT_24_C = [2944, 1784, 416, 1132, 392, 1160, 412, 412, 388, 436, 392, 500, 348, 1140, 408, 420, 404, 428, 412, 1136, 388, 1160, 388, 436, 392, 1156, 416, 408, 420, 408, 416, 1132, 416, 1148, 416, 408, 416, 1132, 416, 1116, 412, 432, 392, 432, 416, 1128, 396, 432, 420, 448, 388, 1136, 392, 432, 392, 432, 416, 408, 420, 432, 368, 432, 416, 408, 420, 420, 416, 408, 392, 432, 420, 404, 420, 416, 412, 416, 376, 464, 392, 404, 420, 432, 408, 432, 392, 408, 392, 1152, 424, 404, 420, 404, 420, 1136, 412, 408, 420, 420, 416, 1136, 416, 404, 420, 476, 348, 404, 420, 404, 424, 404, 420, 404, 420, 420, 420, 1128, 420, 1128, 396, 1160, 412, 408, 420, 404, 416, 436, 392, 412, 388, 456, 384, 1160, 416, 412, 412, 1124, 424, 1124, 428, 1124, 420, 1128, 424, 404, 416, 424, 416, 416, 412, 404, 420, 404, 396, 448, 376, 440, 384, 432, 420, 404, 420, 424, 412, 408, 392, 432, 392, 504, 324, 432, 416, 412, 416, 476, 324, 444, 380, 456, 408, 420, 404, 416, 384, 432, 416, 408, 392, 432, 396, 428, 396, 432, 416, 424, 416, 408, 416, 408, 420, 408, 388, 436, 416, 408, 420, 404, 416, 408, 392, 448, 420, 404, 416, 1132, 420, 1128, 420, 1128, 396, 1156, 392, 1156, 416, 1132, 392, 440, 416];
var ON_COLD22_C = [3040, 1748, 428, 1132, 388, 1160, 412, 404, 396, 440, 412, 408, 420, 1124, 420, 412, 416, 416, 420, 1128, 424, 1136, 412, 412, 412, 1124, 424, 404, 428, 404, 412, 1140, 412, 1140, 424, 404, 424, 1132, 416, 1124, 424, 412, 388, 436, 412, 1124, 428, 400, 396, 444, 400, 1148, 396, 436, 420, 396, 428, 408, 412, 416, 408, 416, 412, 404, 420, 420, 420, 400, 400, 428, 420, 412, 416, 400, 424, 400, 424, 404, 420, 404, 424, 416, 424, 400, 424, 404, 420, 1136, 412, 412, 416, 400, 420, 1132, 416, 416, 412, 416, 400, 1160, 388, 1160, 416, 400, 424, 412, 412, 400, 424, 400, 400, 428, 424, 420, 420, 1132, 416, 400, 424, 400, 428, 1120, 428, 400, 424, 408, 420, 396, 400, 440, 424, 400, 424, 404, 424, 400, 424, 1132, 416, 1124, 424, 1124, 400, 424, 400, 440, 424, 404, 396, 428, 424, 400, 400, 424, 424, 416, 408, 416, 412, 412, 412, 428, 412, 400, 428, 408, 388, 428, 424, 400, 424, 400, 400, 424, 400, 424, 424, 428, 412, 400, 424, 416, 384, 428, 400, 424, 424, 400, 428, 400, 396, 440, 408, 420, 420, 404, 424, 412, 412, 400, 400, 428, 424, 396, 424, 408, 420, 400, 424, 428, 412, 1124, 400, 440, 408, 1124, 424, 1136, 388, 1148, 424, 1140, 388, 1148, 396, 448, 384];
var ON_HOT_24_FAN_MAX_FLAP = [2940, 1784, 396, 1152, 396, 1156, 456, 368, 392, 432, 392, 436, 388, 1156, 396, 432, 392, 444, 468, 1080, 464, 1088, 464, 360, 392, 1156, 392, 436, 392, 432, 392, 1152, 396, 1168, 396, 432, 464, 1084, 464, 1084, 392, 432, 468, 356, 396, 1156, 392, 432, 464, 376, 392, 1156, 392, 436, 464, 356, 464, 364, 392, 432, 460, 364, 464, 360, 392, 448, 392, 432, 460, 368, 464, 356, 396, 432, 392, 432, 464, 360, 392, 432, 396, 444, 468, 356, 396, 432, 392, 1156, 392, 436, 388, 432, 392, 1156, 392, 436, 464, 380, 416, 1124, 396, 432, 460, 364, 464, 360, 392, 432, 396, 432, 392, 432, 392, 448, 464, 1080, 464, 1088, 464, 1084, 464, 360, 396, 432, 392, 432, 464, 360, 464, 376, 392, 1152, 396, 432, 392, 1156, 396, 1152, 396, 1152, 396, 1152, 396, 432, 392, 448, 392, 436, 464, 356, 464, 360, 396, 432, 464, 360, 392, 432, 392, 436, 464, 372, 392, 436, 420, 404, 460, 364, 464, 360, 464, 360, 420, 404, 420, 408, 464, 372, 424, 404, 464, 360, 472, 352, 420, 408, 468, 356, 464, 360, 472, 352, 420, 420, 420, 404, 472, 352, 420, 404, 420, 408, 468, 356, 472, 352, 420, 404, 472, 368, 420, 404, 420, 1128, 420, 1128, 472, 1076, 476, 1076, 472, 1076, 472, 1076, 472, 360, 468];
var ON_HOT_23_FAN_MAX_FLAP = [2940, 1784, 468, 1084, 464, 1084, 392, 436, 460, 360, 464, 368, 388, 1152, 396, 432, 464, 376, 420, 1128, 420, 1128, 464, 360, 464, 1084, 468, 360, 420, 404, 460, 1088, 460, 1104, 472, 352, 420, 1128, 476, 1076, 420, 404, 476, 348, 420, 1124, 424, 404, 420, 420, 476, 1072, 420, 408, 420, 404, 420, 404, 472, 352, 472, 352, 472, 360, 412, 424, 472, 348, 420, 408, 468, 356, 472, 352, 420, 408, 468, 356, 468, 356, 416, 424, 416, 408, 468, 356, 472, 1076, 472, 352, 420, 412, 412, 1128, 424, 404, 472, 368, 420, 1124, 424, 404, 420, 404, 420, 408, 468, 356, 416, 408, 420, 404, 472, 368, 416, 408, 468, 360, 468, 352, 420, 1128, 420, 408, 416, 408, 416, 408, 468, 372, 416, 1132, 368, 460, 416, 1128, 472, 1080, 416, 1132, 368, 1180, 440, 384, 368, 476, 440, 384, 364, 464, 360, 460, 440, 384, 368, 464, 360, 460, 436, 388, 364, 472, 368, 460, 364, 460, 440, 384, 368, 456, 368, 460, 440, 384, 364, 460, 368, 472, 368, 456, 368, 456, 368, 456, 436, 392, 364, 460, 364, 460, 368, 456, 432, 408, 368, 464, 360, 456, 440, 388, 364, 464, 360, 460, 436, 388, 368, 456, 368, 472, 368, 1180, 372, 1176, 368, 1180, 368, 1180, 368, 1180, 372, 1180, 368, 1180, 368, 464, 364];
var ON_HOT_22_FAN_MAX_FLAP = [2968, 1760, 472, 1076, 472, 1076, 472, 356, 416, 412, 412, 408, 468, 1080, 468, 360, 468, 368, 420, 1128, 472, 1048, 500, 360, 412, 1128, 424, 404, 468, 356, 416, 1132, 472, 1092, 472, 356, 468, 1080, 472, 1076, 468, 356, 416, 408, 468, 1080, 472, 356, 468, 368, 420, 1128, 472, 356, 416, 408, 468, 356, 472, 352, 420, 408, 464, 360, 468, 376, 412, 408, 468, 356, 416, 416, 412, 404, 468, 360, 468, 356, 436, 388, 416, 424, 468, 356, 416, 408, 416, 1132, 420, 408, 468, 356, 364, 1184, 468, 356, 416, 424, 416, 1128, 424, 404, 468, 360, 432, 392, 416, 408, 468, 356, 416, 412, 412, 424, 468, 1080, 468, 360, 464, 360, 468, 1080, 468, 356, 416, 408, 468, 356, 472, 368, 468, 1080, 420, 408, 468, 1080, 416, 1128, 420, 1128, 420, 1132, 416, 408, 468, 372, 420, 404, 420, 408, 468, 356, 416, 408, 416, 408, 416, 408, 468, 360, 468, 376, 412, 408, 468, 356, 368, 456, 416, 408, 440, 384, 368, 456, 420, 408, 468, 372, 368, 456, 368, 456, 416, 408, 468, 356, 368, 456, 420, 408, 440, 384, 368, 472, 464, 360, 368, 456, 368, 456, 368, 460, 436, 388, 436, 388, 368, 456, 368, 472, 440, 384, 368, 464, 428, 392, 436, 388, 368, 456, 368, 456, 440, 384, 368, 1188, 368];
var ON_HOT_21_FAN_MAX_FLAP = [2920, 1812, 364, 1184, 436, 1112, 436, 388, 436, 392, 364, 456, 368, 1180, 368, 460, 436, 404, 364, 1180, 368, 1184, 368, 456, 368, 1180, 368, 456, 368, 460, 436, 1108, 444, 1124, 368, 456, 368, 1180, 368, 1180, 368, 456, 368, 456, 368, 1180, 368, 460, 440, 400, 368, 1180, 368, 456, 440, 388, 364, 456, 368, 460, 364, 460, 368, 456, 368, 472, 368, 464, 428, 392, 364, 460, 364, 464, 432, 388, 368, 456, 368, 456, 368, 472, 368, 464, 360, 456, 368, 1180, 372, 456, 432, 392, 368, 1180, 368, 456, 368, 476, 364, 1180, 368, 460, 364, 460, 368, 456, 368, 456, 436, 392, 364, 460, 364, 476, 364, 460, 364, 1184, 368, 456, 368, 1180, 368, 456, 368, 460, 364, 460, 364, 476, 364, 1180, 368, 460, 368, 1180, 368, 1180, 368, 1180, 368, 1180, 368, 460, 364, 476, 364, 468, 360, 456, 368, 460, 364, 464, 360, 460, 364, 460, 368, 456, 368, 472, 368, 456, 368, 456, 368, 456, 368, 460, 364, 460, 368, 464, 360, 456, 368, 472, 368, 456, 368, 460, 364, 456, 368, 460, 364, 460, 368, 456, 368, 456, 368, 476, 364, 460, 364, 456, 372, 456, 368, 460, 364, 456, 368, 456, 368, 460, 364, 476, 364, 1180, 368, 460, 368, 456, 368, 456, 368, 456, 368, 460, 364, 460, 364, 1188, 368];
var ON_HOT_20_FAN_MAX_FLAP = [2916, 1808, 368, 1184, 364, 1184, 368, 456, 368, 460, 364, 460, 364, 1184, 364, 460, 364, 476, 364, 1184, 368, 1180, 368, 456, 368, 1180, 368, 460, 364, 460, 368, 1176, 368, 1200, 364, 464, 364, 1180, 368, 1180, 368, 456, 368, 460, 364, 1184, 364, 460, 368, 472, 368, 1180, 368, 456, 368, 460, 364, 460, 364, 460, 364, 460, 368, 456, 368, 472, 368, 456, 368, 460, 364, 460, 364, 460, 364, 460, 368, 456, 368, 456, 368, 476, 364, 456, 368, 460, 364, 1180, 368, 460, 368, 460, 364, 1184, 364, 460, 364, 476, 364, 1184, 364, 460, 364, 460, 368, 464, 360, 460, 364, 460, 364, 460, 364, 476, 364, 1184, 364, 1184, 364, 460, 368, 1180, 368, 460, 364, 460, 364, 460, 364, 476, 364, 1180, 368, 460, 368, 1180, 372, 1176, 368, 1180, 368, 1184, 364, 460, 364, 476, 364, 460, 368, 460, 364, 460, 364, 456, 368, 460, 364, 460, 364, 460, 368, 472, 368, 456, 368, 456, 368, 460, 364, 460, 364, 460, 364, 460, 368, 460, 364, 472, 368, 460, 364, 460, 364, 460, 364, 460, 364, 460, 368, 456, 368, 456, 368, 476, 364, 460, 364, 460, 364, 460, 364, 460, 368, 456, 368, 460, 364, 460, 364, 476, 364, 460, 364, 1184, 364, 460, 368, 456, 368, 456, 368, 460, 364, 460, 364, 1188, 368];
var ON_HOT_19_FAN_MAX_FLAP = [2916, 1812, 364, 1184, 364, 1184, 368, 456, 368, 460, 364, 460, 364, 1184, 364, 460, 368, 472, 364, 1184, 368, 1180, 368, 460, 364, 1184, 364, 460, 364, 460, 368, 1180, 364, 1200, 364, 460, 368, 1180, 368, 1180, 368, 460, 364, 460, 364, 1184, 364, 460, 368, 476, 364, 1180, 368, 460, 364, 460, 364, 460, 364, 460, 364, 460, 368, 456, 368, 476, 364, 456, 368, 460, 364, 460, 364, 460, 364, 460, 368, 456, 368, 460, 364, 472, 368, 460, 364, 460, 364, 1184, 364, 460, 368, 456, 368, 1180, 368, 460, 364, 476, 364, 1184, 364, 460, 368, 456, 368, 456, 368, 456, 368, 460, 364, 460, 364, 476, 364, 460, 364, 460, 368, 1180, 368, 1180, 368, 460, 364, 460, 364, 460, 364, 476, 364, 1184, 368, 456, 368, 1180, 368, 1180, 368, 1180, 368, 1180, 368, 460, 368, 472, 364, 460, 368, 456, 368, 460, 364, 460, 364, 460, 364, 460, 364, 460, 368, 472, 368, 460, 364, 456, 368, 460, 364, 460, 364, 460, 364, 460, 368, 456, 368, 472, 368, 456, 368, 460, 364, 460, 364, 460, 364, 460, 368, 460, 364, 456, 368, 476, 364, 460, 364, 460, 364, 460, 364, 460, 368, 460, 364, 456, 368, 460, 364, 476, 364, 1180, 368, 1180, 372, 456, 368, 460, 364, 460, 364, 460, 364, 460, 364, 1188, 368];
var ON_HOT_18_FAN_MAX_FLAP = [2976, 1752, 368, 1180, 368, 1184, 364, 456, 428, 400, 364, 460, 368, 1180, 368, 456, 368, 472, 424, 1124, 424, 1124, 428, 400, 424, 1124, 424, 400, 368, 456, 424, 1124, 424, 1140, 424, 400, 428, 1120, 428, 1120, 428, 400, 364, 460, 396, 1152, 396, 428, 396, 448, 392, 1152, 424, 404, 392, 432, 396, 428, 396, 432, 392, 432, 392, 428, 396, 448, 392, 432, 396, 428, 396, 428, 396, 428, 396, 428, 396, 428, 396, 432, 448, 388, 400, 428, 444, 384, 392, 1152, 396, 428, 396, 432, 392, 1152, 396, 432, 396, 444, 396, 1152, 392, 432, 396, 428, 448, 380, 392, 428, 396, 432, 448, 376, 396, 444, 396, 1152, 396, 428, 396, 1152, 396, 1152, 396, 432, 448, 376, 396, 428, 396, 444, 396, 1152, 452, 372, 452, 1096, 452, 1096, 452, 1096, 452, 1100, 448, 376, 396, 444, 448, 376, 452, 372, 396, 428, 400, 424, 448, 380, 448, 376, 396, 428, 448, 392, 452, 380, 388, 432, 448, 376, 448, 376, 396, 428, 448, 376, 452, 372, 452, 388, 448, 376, 452, 372, 452, 372, 400, 428, 448, 376, 452, 372, 448, 376, 452, 392, 396, 424, 452, 376, 448, 376, 448, 376, 448, 376, 448, 376, 452, 372, 400, 440, 452, 376, 448, 372, 452, 1096, 452, 376, 452, 372, 452, 372, 452, 372, 400, 1156, 452];
var ON_HOT_17_FAN_MAX_FLAP = [2916, 1812, 368, 1180, 368, 1180, 368, 460, 364, 460, 364, 460, 364, 1184, 368, 456, 368, 472, 368, 1180, 368, 1180, 368, 460, 364, 1180, 372, 464, 360, 460, 364, 1180, 368, 1196, 368, 464, 360, 1180, 368, 1180, 368, 460, 368, 456, 368, 1180, 368, 460, 364, 480, 360, 1180, 368, 460, 364, 460, 364, 460, 368, 456, 368, 460, 364, 460, 364, 472, 368, 460, 364, 460, 364, 460, 368, 460, 364, 456, 368, 460, 364, 460, 364, 476, 364, 460, 368, 456, 368, 1180, 368, 460, 364, 456, 368, 1180, 368, 460, 364, 476, 364, 1184, 368, 456, 368, 456, 368, 460, 364, 460, 364, 460, 364, 460, 368, 472, 368, 456, 368, 1180, 368, 1180, 368, 1180, 368, 460, 364, 460, 364, 460, 368, 472, 368, 1180, 368, 460, 364, 1180, 368, 1180, 368, 1184, 364, 1184, 368, 460, 364, 472, 368, 460, 364, 460, 364, 460, 364, 460, 364, 460, 368, 456, 368, 460, 364, 472, 368, 456, 368, 460, 364, 460, 364, 460, 368, 456, 368, 460, 364, 460, 364, 476, 364, 460, 364, 460, 364, 460, 368, 456, 368, 460, 364, 456, 368, 460, 364, 476, 364, 460, 364, 464, 364, 456, 368, 456, 368, 460, 364, 460, 364, 460, 364, 476, 364, 1184, 368, 460, 364, 1180, 368, 456, 368, 460, 364, 460, 364, 460, 368, 1184, 368];
var ON_HOT_16_FAN_MAX_FLAP =  [2916, 1812, 440, 1108, 436, 1116, 436, 388, 368, 456, 368, 456, 368, 1180, 368, 456, 440, 404, 364, 1180, 368, 1184, 368, 464, 424, 1112, 372, 456, 368, 456, 440, 1108, 440, 1124, 368, 456, 368, 1180, 368, 1180, 372, 456, 368, 456, 368, 1180, 432, 396, 364, 472, 368, 1180, 368, 460, 368, 456, 368, 456, 368, 456, 368, 460, 364, 456, 368, 480, 360, 460, 364, 460, 368, 464, 360, 460, 428, 396, 364, 468, 356, 460, 364, 476, 364, 460, 368, 460, 364, 1180, 436, 392, 364, 460, 364, 1184, 364, 468, 428, 404, 368, 1180, 368, 456, 368, 460, 364, 460, 364, 460, 364, 460, 368, 456, 440, 400, 368, 1180, 368, 1180, 368, 1180, 368, 1180, 368, 460, 364, 460, 368, 456, 368, 472, 368, 1180, 368, 456, 368, 1180, 368, 1184, 368, 1180, 368, 1180, 368, 464, 428, 408, 364, 456, 368, 460, 364, 460, 364, 460, 368, 456, 368, 456, 368, 464, 360, 476, 364, 460, 364, 460, 364, 468, 360, 456, 368, 456, 368, 456, 368, 460, 364, 472, 368, 460, 368, 456, 368, 456, 368, 456, 368, 460, 364, 460, 364, 460, 364, 476, 364, 460, 368, 456, 368, 456, 368, 460, 364, 464, 360, 460, 364, 460, 364, 476, 368, 456, 368, 1180, 368, 1180, 368, 460, 364, 460, 364, 460, 364, 460, 368, 1184, 368];
var ON_HOT_25_FAN_MAX_FLAP = [2916, 1812, 424, 1124, 424, 1124, 368, 460, 424, 400, 364, 460, 368, 1180, 368, 456, 424, 420, 364, 1180, 368, 1184, 364, 460, 364, 1184, 364, 460, 368, 456, 424, 1124, 424, 1140, 368, 460, 364, 1180, 368, 1184, 364, 460, 364, 464, 420, 1124, 424, 404, 364, 472, 424, 1124, 368, 460, 424, 400, 364, 460, 368, 456, 424, 404, 364, 460, 364, 472, 428, 400, 364, 460, 368, 456, 424, 404, 364, 460, 364, 460, 364, 460, 364, 476, 364, 460, 364, 460, 368, 1180, 368, 460, 364, 460, 364, 1180, 368, 460, 364, 476, 364, 1184, 368, 456, 368, 456, 368, 460, 364, 460, 364, 460, 364, 460, 368, 472, 364, 460, 368, 1180, 368, 1180, 368, 460, 364, 460, 364, 460, 364, 460, 368, 472, 368, 1180, 368, 456, 368, 1180, 368, 1180, 368, 1184, 364, 1184, 368, 456, 396, 448, 364, 456, 368, 460, 364, 460, 364, 460, 392, 432, 364, 460, 368, 456, 368, 472, 368, 460, 364, 460, 364, 460, 392, 432, 364, 460, 368, 456, 396, 432, 364, 472, 396, 432, 364, 460, 364, 460, 396, 428, 396, 428, 396, 432, 364, 460, 392, 448, 364, 460, 364, 460, 396, 428, 392, 432, 396, 428, 396, 432, 392, 432, 392, 448, 396, 1156, 392, 428, 396, 1152, 396, 1152, 396, 1152, 396, 1152, 396, 1156, 392, 436, 396];
var ON_HOT_26_FAN_MAX_FLAP = [2984, 1740, 400, 1152, 368, 1180, 432, 392, 396, 432, 432, 392, 364, 1184, 364, 460, 396, 444, 368, 1180, 436, 1112, 396, 432, 432, 1112, 440, 388, 364, 460, 396, 1152, 396, 1168, 396, 432, 428, 1116, 396, 1152, 396, 432, 432, 392, 396, 1152, 396, 428, 396, 444, 368, 1180, 368, 456, 396, 432, 392, 432, 392, 432, 436, 388, 396, 428, 396, 448, 392, 428, 396, 432, 432, 392, 396, 428, 396, 428, 448, 380, 432, 388, 396, 448, 392, 432, 436, 388, 396, 1152, 396, 428, 396, 432, 448, 1100, 432, 392, 396, 444, 392, 1152, 400, 428, 396, 428, 448, 376, 396, 428, 396, 432, 448, 376, 396, 444, 448, 1100, 448, 376, 396, 1152, 448, 380, 448, 372, 400, 432, 440, 380, 448, 392, 396, 1152, 396, 432, 448, 1096, 452, 1100, 392, 1152, 400, 1148, 400, 428, 448, 392, 400, 424, 448, 380, 448, 372, 400, 428, 396, 428, 448, 376, 396, 428, 396, 444, 396, 432, 448, 372, 400, 428, 444, 380, 448, 376, 396, 428, 448, 380, 448, 388, 396, 432, 448, 376, 448, 376, 396, 428, 396, 428, 448, 380, 448, 372, 400, 444, 448, 376, 396, 428, 444, 380, 448, 376, 396, 432, 392, 432, 392, 432, 448, 392, 396, 428, 396, 428, 452, 1096, 452, 1096, 452, 1100, 448, 1100, 448, 1100, 396, 432, 396];
var ON_HOT_27_FAN_MAX_FLAP = [2984, 1744, 396, 1152, 396, 1152, 396, 432, 364, 460, 436, 388, 368, 1180, 368, 460, 392, 448, 432, 1112, 368, 1184, 432, 392, 392, 1156, 396, 428, 396, 428, 396, 1152, 396, 1168, 396, 432, 432, 1116, 432, 1116, 364, 460, 396, 428, 396, 1152, 396, 428, 396, 448, 432, 1116, 436, 388, 396, 428, 436, 388, 368, 456, 396, 432, 392, 432, 364, 472, 396, 432, 392, 432, 436, 388, 432, 392, 396, 432, 392, 432, 448, 376, 396, 444, 436, 388, 396, 428, 396, 1152, 396, 428, 396, 432, 448, 1096, 452, 376, 448, 392, 448, 1100, 448, 376, 448, 384, 388, 432, 444, 380, 448, 376, 448, 376, 396, 444, 448, 376, 452, 376, 396, 1148, 400, 428, 448, 376, 396, 432, 392, 428, 448, 392, 452, 1096, 452, 372, 400, 1148, 452, 1096, 452, 1096, 400, 1148, 452, 376, 400, 440, 452, 372, 452, 372, 452, 372, 452, 376, 452, 372, 400, 424, 448, 380, 448, 392, 444, 380, 448, 372, 452, 376, 396, 428, 448, 376, 452, 372, 452, 372, 400, 440, 452, 372, 400, 424, 452, 376, 452, 372, 448, 376, 448, 376, 452, 372, 400, 440, 452, 376, 452, 372, 452, 372, 400, 424, 448, 380, 448, 372, 400, 428, 448, 392, 452, 1092, 456, 1096, 452, 372, 452, 1096, 452, 1096, 452, 1096, 456, 1092, 456, 376, 452];
var ON_HOT_28_FAN_MAX_FLAP = [2944, 1784, 436, 1112, 436, 1112, 440, 388, 392, 432, 432, 392, 432, 1112, 440, 388, 432, 412, 392, 1148, 400, 1152, 396, 428, 436, 1112, 452, 376, 364, 464, 392, 1148, 400, 1168, 432, 396, 392, 1152, 396, 1152, 396, 432, 436, 388, 448, 1100, 396, 428, 396, 444, 432, 1116, 396, 428, 436, 388, 396, 436, 392, 428, 448, 376, 396, 436, 388, 444, 452, 372, 396, 428, 448, 380, 448, 376, 448, 376, 396, 436, 388, 432, 436, 404, 396, 428, 448, 376, 448, 1100, 396, 428, 396, 428, 436, 1112, 396, 428, 448, 396, 448, 1100, 448, 380, 392, 428, 448, 376, 452, 380, 388, 432, 448, 376, 396, 444, 396, 1148, 400, 1152, 396, 436, 388, 432, 432, 392, 396, 428, 396, 428, 448, 392, 396, 1152, 396, 428, 396, 1152, 396, 1152, 400, 1148, 400, 1148, 400, 428, 448, 392, 396, 428, 396, 432, 392, 432, 392, 432, 448, 376, 396, 428, 448, 380, 448, 388, 396, 432, 448, 376, 396, 428, 396, 428, 448, 376, 396, 432, 392, 428, 396, 448, 448, 376, 396, 428, 396, 428, 448, 376, 396, 428, 396, 432, 448, 376, 396, 444, 448, 376, 452, 372, 396, 428, 396, 432, 392, 432, 448, 376, 396, 428, 396, 444, 448, 376, 396, 1152, 396, 432, 448, 1096, 448, 1100, 400, 1148, 400, 1152, 396, 432, 400];
var ON_HOT_29_FAN_MAX_FLAP = [2916, 1812, 424, 1124, 424, 1124, 424, 404, 364, 460, 364, 460, 424, 1124, 396, 432, 392, 448, 364, 1180, 368, 1180, 368, 460, 364, 1184, 392, 432, 424, 400, 368, 1180, 396, 1168, 396, 432, 364, 1184, 364, 1184, 364, 460, 396, 428, 396, 1152, 424, 404, 364, 472, 396, 1152, 368, 460, 392, 432, 396, 428, 396, 432, 392, 428, 396, 432, 392, 448, 392, 432, 392, 432, 396, 428, 396, 428, 396, 432, 392, 432, 392, 432, 396, 444, 392, 432, 392, 432, 396, 1152, 396, 432, 444, 380, 392, 1156, 392, 432, 396, 444, 396, 1152, 396, 428, 448, 380, 392, 432, 396, 428, 392, 432, 396, 428, 396, 444, 396, 428, 396, 1156, 392, 432, 392, 432, 396, 428, 448, 380, 392, 428, 396, 448, 444, 1100, 396, 432, 396, 1152, 396, 1152, 448, 1100, 448, 1100, 448, 380, 392, 448, 444, 380, 392, 432, 396, 428, 396, 428, 396, 428, 448, 380, 392, 432, 392, 448, 392, 432, 396, 428, 396, 428, 452, 372, 396, 432, 444, 380, 448, 376, 396, 444, 448, 376, 448, 380, 444, 376, 396, 432, 392, 432, 448, 376, 396, 428, 396, 444, 396, 428, 448, 380, 444, 380, 392, 432, 396, 428, 396, 428, 448, 376, 452, 388, 396, 1152, 396, 432, 448, 376, 396, 1152, 396, 1152, 396, 1152, 448, 1100, 448, 384, 448];
var ON_HOT_30_FAN_MAX_FLAP = [2984, 1784, 368, 1180, 368, 1180, 368, 460, 432, 392, 392, 432, 432, 1116, 368, 456, 436, 412, 360, 1180, 396, 1152, 368, 460, 392, 1152, 396, 432, 368, 456, 436, 1112, 436, 1128, 368, 456, 396, 1152, 396, 1152, 368, 460, 396, 428, 368, 1180, 368, 460, 432, 404, 396, 1152, 396, 432, 364, 460, 448, 376, 396, 428, 396, 428, 368, 460, 436, 408, 388, 432, 432, 392, 364, 464, 392, 428, 436, 388, 396, 428, 400, 428, 448, 392, 392, 432, 396, 428, 396, 1152, 396, 432, 432, 392, 364, 1180, 452, 376, 396, 444, 448, 1100, 448, 376, 452, 372, 396, 428, 400, 428, 436, 388, 448, 376, 396, 444, 436, 1112, 440, 384, 396, 432, 392, 432, 448, 376, 396, 428, 396, 428, 396, 444, 436, 1112, 436, 388, 400, 1148, 400, 1148, 400, 1152, 396, 1152, 448, 380, 392, 444, 396, 432, 448, 376, 396, 428, 396, 428, 448, 376, 396, 432, 444, 380, 448, 388, 400, 428, 396, 428, 396, 428, 452, 372, 396, 428, 396, 432, 448, 376, 396, 444, 448, 376, 448, 376, 396, 428, 448, 380, 448, 376, 396, 428, 396, 428, 444, 396, 452, 372, 396, 428, 448, 380, 448, 372, 400, 428, 448, 376, 396, 428, 396, 444, 452, 372, 452, 372, 400, 428, 396, 1148, 400, 1152, 396, 1152, 396, 1152, 396, 436, 396];
var ON_HOT_31_FAN_MAX_FLAP = [2916, 1808, 396, 1156, 392, 1156, 364, 460, 396, 428, 368, 460, 392, 1152, 396, 432, 392, 448, 364, 1184, 392, 1152, 400, 428, 436, 1112, 436, 392, 392, 432, 392, 1156, 392, 1172, 364, 460, 364, 1184, 396, 1152, 396, 432, 444, 380, 392, 1156, 392, 432, 396, 444, 368, 1180, 396, 432, 392, 432, 392, 432, 392, 432, 432, 392, 396, 428, 396, 444, 368, 456, 396, 432, 444, 380, 392, 432, 396, 428, 396, 428, 396, 432, 392, 444, 396, 432, 444, 380, 432, 1116, 448, 376, 396, 428, 448, 1100, 396, 432, 448, 388, 396, 1156, 448, 376, 396, 428, 396, 432, 448, 372, 396, 432, 392, 432, 392, 448, 392, 432, 448, 376, 396, 428, 396, 428, 396, 432, 392, 432, 448, 376, 396, 444, 448, 1100, 448, 376, 396, 1152, 396, 1152, 396, 1156, 392, 1156, 396, 428, 396, 444, 396, 432, 444, 380, 392, 432, 392, 432, 448, 376, 396, 428, 396, 428, 396, 444, 396, 432, 392, 432, 392, 432, 448, 376, 396, 428, 396, 432, 448, 372, 404, 440, 392, 432, 448, 376, 396, 428, 396, 428, 396, 432, 444, 376, 400, 428, 396, 444, 448, 376, 396, 428, 396, 428, 396, 428, 396, 432, 444, 380, 448, 376, 396, 444, 396, 1152, 396, 1152, 396, 1152, 396, 432, 448, 1100, 448, 1100, 396, 1152, 396, 432, 400];
var ON_FAN_31_FAN_MEDIUM_FLAP = [2916, 1808, 368, 1180, 368, 1184, 364, 460, 424, 404, 364, 456, 368, 1180, 368, 460, 424, 416, 364, 1184, 364, 1184, 364, 460, 368, 1180, 368, 460, 364, 460, 424, 1124, 424, 1140, 364, 460, 364, 1184, 368, 1180, 424, 404, 364, 460, 364, 1184, 424, 400, 368, 472, 368, 1180, 368, 456, 368, 460, 420, 404, 364, 460, 364, 460, 364, 460, 424, 416, 368, 456, 424, 404, 364, 460, 364, 460, 364, 460, 368, 456, 368, 456, 368, 472, 368, 460, 364, 460, 392, 1156, 364, 460, 424, 400, 368, 1180, 368, 460, 392, 448, 392, 432, 364, 460, 392, 432, 396, 1152, 396, 428, 396, 432, 392, 432, 396, 444, 392, 1156, 392, 1156, 396, 1152, 396, 428, 396, 432, 448, 376, 396, 428, 396, 444, 396, 1152, 396, 1152, 396, 428, 396, 1152, 396, 1152, 396, 1156, 448, 376, 396, 444, 448, 376, 396, 428, 396, 432, 444, 380, 396, 428, 396, 428, 396, 428, 396, 444, 452, 372, 396, 432, 444, 380, 448, 376, 396, 428, 448, 376, 396, 428, 396, 448, 448, 372, 396, 432, 396, 428, 396, 428, 448, 376, 452, 372, 396, 432, 444, 396, 396, 428, 444, 380, 448, 376, 396, 428, 396, 432, 448, 376, 392, 432, 396, 444, 444, 1104, 448, 1100, 396, 432, 448, 372, 396, 432, 392, 432, 448, 376, 396, 1156, 400];
var ON_COLD_22_FAN_AUTO_FLAP = [2976, 1752, 428, 1120, 428, 1120, 428, 400, 424, 400, 368, 456, 428, 1120, 428, 400, 364, 472, 424, 1128, 364, 1184, 364, 464, 364, 1180, 368, 456, 428, 400, 368, 1180, 364, 1200, 364, 460, 368, 1180, 368, 1180, 368, 460, 364, 460, 424, 1120, 428, 400, 364, 476, 424, 1124, 424, 400, 424, 404, 424, 400, 364, 464, 420, 400, 424, 404, 364, 472, 424, 404, 424, 400, 364, 460, 424, 400, 424, 400, 368, 456, 368, 456, 424, 420, 424, 400, 364, 460, 424, 1120, 428, 400, 368, 460, 364, 1180, 368, 460, 420, 420, 364, 1184, 424, 1124, 424, 400, 428, 400, 364, 456, 428, 400, 364, 460, 368, 472, 364, 1184, 368, 456, 424, 404, 364, 1180, 368, 460, 364, 460, 424, 400, 424, 416, 392, 432, 368, 460, 364, 460, 392, 1156, 364, 1184, 364, 1184, 368, 460, 364, 472, 424, 404, 364, 460, 364, 460, 364, 460, 368, 456, 368, 456, 368, 460, 364, 476, 364, 460, 364, 460, 364, 464, 364, 456, 368, 460, 364, 460, 364, 460, 392, 452, 360, 460, 364, 460, 368, 456, 368, 460, 364, 460, 364, 460, 364, 460, 368, 472, 368, 456, 396, 432, 364, 460, 364, 460, 364, 460, 364, 460, 368, 456, 368, 472, 368, 1180, 368, 460, 364, 1184, 364, 1184, 364, 1184, 368, 1180, 368, 1180, 368, 464, 368];
var ON_GOUTTE_NaN_FAN_AUTO_FLAP = [2916, 1812, 448, 1100, 396, 1152, 368, 460, 396, 432, 432, 388, 396, 1152, 396, 428, 396, 448, 432, 1116, 364, 1184, 364, 460, 432, 1116, 432, 392, 396, 428, 396, 1152, 400, 1164, 368, 460, 436, 1112, 436, 1112, 396, 428, 448, 376, 396, 1152, 396, 436, 392, 444, 448, 1096, 456, 372, 396, 428, 448, 380, 448, 376, 448, 376, 452, 376, 392, 444, 452, 372, 400, 424, 448, 376, 452, 372, 400, 428, 448, 376, 452, 372, 400, 440, 448, 376, 452, 372, 452, 1096, 456, 368, 404, 424, 448, 1100, 452, 372, 456, 384, 448, 380, 448, 1096, 452, 376, 448, 376, 452, 372, 400, 424, 452, 376, 452, 392, 444, 1096, 452, 1096, 452, 1096, 404, 424, 452, 372, 452, 372, 456, 368, 404, 440, 452, 372, 452, 372, 448, 376, 452, 1096, 452, 1096, 452, 1096, 452, 376, 452, 388, 452, 376, 396, 428, 448, 376, 452, 368, 404, 424, 452, 372, 452, 372, 448, 392, 452, 372, 456, 368, 456, 368, 452, 376, 452, 372, 452, 372, 400, 428, 452, 384, 404, 424, 448, 376, 452, 372, 400, 424, 452, 372, 452, 372, 456, 368, 456, 388, 448, 376, 452, 372, 400, 424, 452, 372, 456, 368, 404, 424, 448, 376, 452, 388, 400, 424, 452, 1096, 452, 372, 452, 1096, 452, 1096, 452, 1100, 452, 1096, 452, 380, 448];
var ON_VENTIL_NaN_FAN_MAX_FLAP = [2916, 1812, 368, 1180, 368, 1180, 368, 460, 364, 460, 364, 460, 368, 1180, 368, 460, 364, 480, 360, 1180, 368, 1180, 368, 460, 364, 1184, 368, 460, 364, 456, 368, 1184, 364, 1200, 364, 456, 368, 1180, 368, 1180, 372, 456, 368, 460, 364, 1180, 368, 460, 364, 476, 364, 1180, 372, 456, 368, 460, 364, 464, 360, 460, 364, 460, 364, 460, 368, 472, 368, 456, 368, 456, 368, 456, 368, 460, 364, 460, 364, 460, 368, 456, 368, 472, 368, 456, 368, 460, 364, 1184, 364, 460, 364, 460, 368, 1180, 368, 464, 360, 476, 364, 1180, 368, 1184, 364, 1184, 364, 460, 368, 456, 368, 456, 368, 460, 364, 472, 368, 1180, 368, 1180, 368, 1184, 368, 456, 368, 460, 364, 460, 364, 460, 364, 476, 364, 1184, 368, 456, 368, 1180, 368, 1180, 368, 1180, 368, 1184, 364, 460, 364, 476, 364, 460, 368, 460, 364, 456, 368, 460, 364, 460, 364, 460, 368, 456, 368, 472, 368, 456, 368, 460, 364, 460, 364, 460, 364, 460, 368, 460, 364, 460, 364, 472, 368, 460, 364, 460, 364, 460, 368, 456, 368, 456, 368, 460, 364, 460, 364, 476, 364, 460, 364, 460, 368, 456, 368, 456, 368, 460, 364, 460, 364, 460, 368, 472, 368, 456, 368, 456, 368, 1180, 368, 456, 372, 456, 364, 460, 368, 456, 368, 1188, 364];
var ON_HOT_24_FAN_AUTO_FLAP = [2976, 1756, 364, 1184, 364, 1184, 424, 400, 424, 400, 368, 456, 424, 1124, 424, 404, 424, 416, 364, 1184, 420, 1128, 368, 456, 368, 1180, 368, 460, 420, 404, 424, 1120, 428, 1140, 424, 400, 368, 1180, 368, 1180, 368, 460, 364, 460, 364, 1184, 364, 460, 424, 420, 364, 1180, 368, 456, 424, 404, 424, 400, 364, 460, 364, 460, 368, 456, 424, 420, 364, 460, 364, 460, 420, 404, 364, 460, 368, 456, 368, 460, 364, 460, 364, 476, 364, 460, 364, 460, 368, 1180, 368, 460, 364, 456, 424, 1124, 396, 432, 364, 476, 364, 1184, 396, 428, 368, 460, 364, 460, 364, 460, 364, 460, 392, 432, 424, 416, 368, 1180, 396, 1152, 396, 1152, 368, 460, 392, 432, 396, 428, 396, 428, 368, 472, 424, 404, 392, 432, 364, 460, 392, 1152, 400, 1152, 396, 1152, 368, 456, 396, 448, 392, 432, 364, 460, 396, 428, 396, 432, 392, 428, 396, 432, 392, 432, 392, 448, 392, 432, 396, 428, 396, 428, 368, 460, 392, 432, 392, 432, 392, 432, 396, 444, 396, 428, 396, 428, 396, 432, 392, 432, 392, 432, 396, 428, 396, 428, 396, 444, 396, 428, 396, 432, 392, 432, 392, 432, 396, 428, 396, 432, 392, 428, 396, 448, 392, 1152, 396, 432, 396, 428, 396, 1152, 396, 1152, 448, 1100, 396, 1156, 392, 436, 396];
var ON_HOT_24_FAN_SLOW_FLAP = [2944, 1784, 432, 1116, 368, 1180, 368, 460, 392, 432, 364, 460, 364, 1184, 396, 428, 432, 408, 396, 1152, 396, 1152, 396, 432, 364, 1184, 392, 432, 432, 392, 396, 1152, 368, 1196, 436, 392, 392, 1156, 396, 1152, 396, 428, 368, 460, 364, 1180, 368, 460, 364, 480, 388, 1156, 392, 432, 396, 428, 436, 392, 392, 428, 396, 432, 432, 392, 396, 444, 396, 428, 436, 392, 364, 460, 392, 432, 392, 432, 432, 392, 396, 428, 396, 448, 448, 372, 396, 432, 392, 1152, 396, 432, 448, 376, 368, 1180, 396, 432, 364, 472, 396, 1152, 396, 432, 448, 376, 396, 428, 396, 432, 444, 380, 392, 432, 392, 448, 392, 1156, 396, 1152, 396, 1152, 396, 436, 440, 380, 396, 428, 392, 432, 448, 392, 396, 428, 396, 1152, 396, 428, 396, 1152, 400, 1148, 400, 1152, 396, 428, 448, 392, 396, 428, 396, 432, 392, 432, 448, 376, 448, 376, 396, 428, 448, 380, 448, 392, 392, 432, 448, 376, 396, 428, 396, 428, 448, 380, 392, 432, 392, 428, 400, 444, 448, 376, 396, 428, 396, 432, 448, 376, 396, 428, 392, 432, 448, 376, 396, 444, 448, 376, 448, 376, 452, 376, 396, 428, 396, 428, 448, 376, 452, 372, 396, 448, 448, 1096, 452, 1096, 452, 376, 396, 1152, 448, 1100, 448, 1100, 452, 1100, 448, 380, 448];
var ON_HOT_24_FAN_MEDIUM_FLAP = [2916, 1812, 396, 1152, 400, 1148, 400, 428, 364, 464, 364, 456, 396, 1152, 396, 432, 396, 444, 392, 1156, 392, 1156, 396, 432, 432, 1116, 364, 460, 392, 432, 392, 1156, 396, 1168, 396, 428, 396, 1152, 396, 1152, 396, 432, 364, 460, 392, 1156, 396, 428, 396, 448, 364, 1180, 396, 432, 392, 432, 364, 460, 396, 428, 448, 380, 364, 456, 396, 448, 364, 460, 392, 432, 396, 428, 396, 428, 368, 460, 428, 392, 396, 432, 364, 476, 364, 460, 396, 428, 432, 1116, 432, 396, 392, 428, 400, 1152, 448, 376, 396, 444, 448, 1100, 448, 380, 448, 380, 388, 432, 448, 376, 396, 428, 396, 428, 448, 392, 452, 1096, 396, 1152, 448, 1100, 396, 432, 448, 376, 396, 428, 396, 432, 448, 388, 400, 1148, 400, 1152, 448, 376, 396, 1152, 396, 1152, 396, 1152, 400, 428, 396, 444, 448, 376, 396, 428, 396, 428, 396, 432, 448, 376, 448, 384, 388, 428, 448, 392, 396, 428, 448, 380, 448, 372, 400, 428, 444, 380, 448, 376, 452, 372, 396, 444, 396, 432, 448, 376, 396, 428, 396, 428, 448, 376, 396, 428, 448, 380, 448, 396, 392, 428, 448, 376, 448, 376, 448, 376, 396, 428, 396, 432, 448, 376, 452, 388, 448, 376, 452, 372, 396, 1152, 400, 1148, 452, 1100, 448, 1100, 448, 1100, 448, 384, 448];
var ON_HOT_24_FAN_MAX_FLAP2 = [2920, 1808, 368, 1180, 428, 1120, 424, 404, 424, 404, 364, 456, 396, 1152, 368, 460, 364, 476, 364, 1184, 364, 1184, 368, 456, 368, 1180, 368, 460, 420, 404, 424, 1124, 424, 1140, 364, 460, 368, 1180, 368, 1180, 428, 400, 364, 460, 364, 1184, 424, 400, 424, 416, 368, 1180, 368, 460, 364, 460, 424, 400, 364, 460, 368, 456, 368, 456, 368, 476, 364, 460, 420, 404, 364, 460, 396, 428, 424, 404, 364, 460, 364, 460, 392, 448, 364, 460, 364, 460, 368, 1180, 368, 456, 396, 432, 364, 1184, 364, 460, 364, 476, 392, 1156, 396, 428, 368, 460, 364, 460, 364, 460, 396, 428, 368, 460, 364, 472, 396, 1152, 368, 1184, 364, 1180, 396, 432, 396, 428, 368, 460, 364, 456, 396, 448, 364, 1184, 364, 460, 396, 1152, 396, 1152, 368, 1184, 364, 1180, 368, 460, 364, 476, 392, 432, 364, 460, 396, 428, 368, 460, 364, 460, 392, 432, 392, 432, 396, 448, 364, 456, 396, 428, 396, 432, 364, 460, 396, 428, 396, 428, 368, 460, 392, 448, 364, 460, 364, 460, 392, 432, 396, 428, 396, 432, 364, 460, 392, 432, 392, 448, 364, 460, 396, 428, 368, 456, 396, 432, 392, 432, 392, 432, 364, 460, 396, 444, 396, 428, 396, 1152, 396, 1152, 396, 1156, 392, 1156, 396, 1152, 396, 1152, 396, 436, 396];
var ON_HOT_24_FAN_MAX_FIX = [2916, 1812, 368, 1180, 368, 1180, 368, 460, 364, 460, 392, 432, 392, 1156, 396, 428, 396, 448, 364, 1180, 396, 1156, 364, 460, 392, 1156, 396, 428, 396, 432, 392, 1152, 396, 1168, 396, 432, 364, 1184, 364, 1184, 364, 460, 396, 428, 396, 1152, 396, 432, 392, 448, 432, 1116, 448, 376, 396, 428, 396, 432, 364, 460, 392, 432, 392, 432, 368, 472, 396, 428, 396, 428, 396, 432, 364, 460, 396, 428, 396, 428, 448, 380, 392, 444, 396, 432, 392, 432, 392, 1156, 396, 428, 396, 428, 396, 1152, 396, 432, 444, 396, 396, 1148, 400, 428, 396, 428, 436, 388, 396, 428, 396, 432, 392, 432, 448, 392, 396, 1152, 396, 1152, 396, 1152, 396, 432, 392, 432, 448, 376, 396, 428, 396, 444, 396, 1152, 396, 432, 444, 1104, 448, 376, 396, 428, 396, 432, 444, 380, 392, 444, 396, 432, 392, 436, 444, 376, 396, 428, 396, 428, 448, 380, 448, 376, 396, 444, 448, 376, 396, 428, 396, 428, 396, 428, 396, 432, 396, 428, 396, 428, 444, 396, 396, 428, 396, 432, 448, 376, 392, 432, 396, 428, 448, 376, 396, 428, 396, 448, 444, 380, 448, 376, 396, 428, 396, 428, 448, 380, 448, 372, 396, 432, 448, 392, 396, 428, 396, 1152, 396, 1152, 396, 428, 396, 432, 444, 380, 448, 1100, 448, 384, 448];
var ON_HOT_24_FAN_AUTO_FIX_SLEEP = [3000, 1728, 452, 1096, 452, 1096, 400, 428, 448, 376, 452, 372, 452, 1096, 456, 372, 452, 384, 404, 1152, 396, 1144, 404, 424, 452, 1096, 452, 376, 452, 376, 396, 1144, 456, 1112, 452, 372, 400, 1148, 400, 1148, 400, 428, 448, 376, 452, 1096, 452, 372, 452, 388, 400, 1148, 452, 380, 392, 428, 452, 372, 452, 372, 448, 380, 448, 372, 452, 388, 452, 376, 452, 372, 452, 372, 448, 376, 400, 428, 448, 376, 452, 376, 400, 436, 452, 372, 452, 372, 448, 1100, 452, 376, 448, 376, 452, 1096, 448, 376, 452, 392, 444, 1100, 400, 428, 448, 376, 452, 376, 444, 376, 452, 372, 452, 372, 400, 440, 452, 1096, 400, 1148, 404, 1148, 400, 424, 452, 376, 448, 372, 400, 428, 448, 392, 448, 1100, 452, 372, 452, 372, 400, 1148, 400, 1148, 404, 1144, 404, 424, 448, 392, 452, 372, 400, 424, 448, 376, 452, 376, 452, 372, 452, 372, 400, 424, 452, 388, 400, 424, 452, 376, 452, 368, 404, 424, 448, 376, 452, 372, 452, 372, 452, 388, 452, 376, 452, 372, 452, 372, 448, 380, 448, 372, 452, 372, 452, 376, 452, 384, 404, 424, 448, 376, 452, 372, 452, 376, 452, 372, 400, 424, 452, 372, 452, 388, 448, 376, 452, 1096, 452, 372, 404, 1144, 456, 1096, 452, 1096, 452, 1096, 452, 380, 448];

var global = [OFF, ON_HOT_24_C, ON_COLD22_C, ON_HOT_24_FAN_MAX_FLAP,ON_HOT_23_FAN_MAX_FLAP,ON_HOT_22_FAN_MAX_FLAP,ON_HOT_21_FAN_MAX_FLAP,ON_HOT_20_FAN_MAX_FLAP,ON_HOT_19_FAN_MAX_FLAP,ON_HOT_18_FAN_MAX_FLAP,ON_HOT_17_FAN_MAX_FLAP,ON_HOT_16_FAN_MAX_FLAP,ON_HOT_25_FAN_MAX_FLAP,ON_HOT_26_FAN_MAX_FLAP, ON_HOT_27_FAN_MAX_FLAP,ON_HOT_28_FAN_MAX_FLAP,ON_HOT_29_FAN_MAX_FLAP,ON_HOT_30_FAN_MAX_FLAP,ON_HOT_31_FAN_MAX_FLAP,ON_FAN_31_FAN_MEDIUM_FLAP,ON_COLD_22_FAN_AUTO_FLAP,ON_GOUTTE_NaN_FAN_AUTO_FLAP,ON_VENTIL_NaN_FAN_MAX_FLAP,ON_HOT_24_FAN_AUTO_FLAP,ON_HOT_24_FAN_SLOW_FLAP, ON_HOT_24_FAN_MEDIUM_FLAP,ON_HOT_24_FAN_MAX_FLAP2,ON_HOT_24_FAN_MAX_FIX,ON_HOT_24_FAN_AUTO_FIX_SLEEP];

// INIT
var TOLERENCE = 20;



foreach(dump in global) {
	var result = []
	var name = dump.constructor.name;
	for(var i=0;i < dump.lenght(); i + 2) {
		if(i != 0 || i != 1) { // ignore header
			
		}
	} 
}



function getByte(a, b) {
	if( a < 1000 && b < 1000) { // is 0
		return "0";
	}
	else if( a < 1000 && b > 1000) { // is 1
		return "1";
	} else {
		return "error";
	}
}




























