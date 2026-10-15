/* God's Eye View 界面汉化层（运行时注入，不改动应用源码）
 * 原理：监听 DOM 变化，将界面上的英文 UI 文案替换为中文。
 * 词典集中在下方 TRANSLATIONS 与 ATTR_TRANSLATIONS 中，按需增补即可。 */
(function () {
  'use strict';

  // ---------- 文本词典（节点文本精确匹配 → 中文） ----------
  var T = {
    // 首次启动
    'MISSION CONTROL · FIRST LAUNCH': '任务控制 · 首次启动',
    'Choose your first view': '选择你的第一个视角',
    'It feels like a forbidden cockpit—then you realize the sources are public and the data is real.': '它看起来像一座不该接触的驾驶舱——但你会发现数据源全部公开、数据真实。',
    'LIVE CONTACTS': '实时目标',
    'Aircraft, vessels and nearby intelligence': '飞机、船舶与周边情报',
    'SPACE MISSIONS': '太空任务',
    'Launches, spacecraft and orbital context': '发射、航天器与轨道信息',
    'ENVIRONMENTAL': '环境监测',
    'Live earthquakes and active fires, from USGS and NASA': '实时地震与活跃火情（USGS / NASA）',
    'EXPLORE MANUALLY': '手动探索',
    'Begin with a clean globe': '从干净的地球开始',
    "Don't show this again": '不再显示',
    'ESC to dismiss': '按 ESC 关闭',
    'Tip: the GEV MIC button in the dock lets you talk to the map.': '提示：底部栏的 GEV MIC 按钮可让你与地图对话。',
    // 场景外壳
    'NO PLACE LEFT BEHIND': '不遗漏任何角落',
    'ACTIVE STYLE': '当前风格',
    'LOADING LIVE DATA': '正在加载实时数据',
    'syncing road network': '正在同步路网',
    'loading frames': '正在加载画面',
    // 显示控制
    'DISPLAY': '显示',
    'Layout': '布局',
    'Tactical': '战术',
    'Operator': '操作员',
    'Minimal': '极简',
    'Cyber': '赛博',
    'Sonar': '声呐',
    'Rings': '环数',
    'Range': '范围',
    'Power': '功率',
    'Opacity': '不透明度',
    'Sector': '扇区',
    'DETECT': '识别',
    'Density': '密度',
    'Allocation': '分配',
    'Elastic': '弹性',
    'Weighted': '加权',
    'Fade': '渐隐',
    'Outside': '外侧',
    'PARAMETERS': '参数',
    'Models': '模型',
    'Proximity': '近距离',
    'All': '全部',
    'Scope': '视场',
    'Feather': '羽化',
    'Draw': '绘制',
    'Shape': '形状',
    'Area': '区域',
    'Line': '线条',
    'Pin': '标记点',
    'Primary': '主色',
    'Amber': '琥珀',
    'Cyan': '青色',
    'Green': '绿色',
    'Red': '红色',
    'Clear': '清除',
    'Import': '导入',
    'Celestial': '天球',
    'Clean UI': '简洁界面',
    'Bloom': '辉光',
    'Sharpen': '锐化',
    'EXIT CLEAN VIEW': '退出简洁视图',
    // 底部命令栏
    'VISUAL PRESETS': '视觉预设',
    'Normal': '标准',
    'Anime': '动漫',
    'Noir': '黑白',
    'Snow': '雪景',
    'MAP SOURCE': '地图源',
    'LOCATION': '位置',
    'Location: --': '位置：--',
    'Landmark: --': '地标：--',
    'Style': '风格',
    // 数据图层
    'DATA LAYERS': '数据图层',
    'CCTV': '监控',
    'Enable CCTV to load camera intersections': '开启监控以加载摄像头路口',
    'CCTV OFF': '监控关',
    'NEAREST': '最近',
    'PREV': '上一个',
    'NEXT': '下一个',
    'FOCUS': '聚焦',
    'COVERAGE OFF': '覆盖关',
    'AUTO HOP OFF': '自动切换关',
    'PROJECTION ON': '投影开',
    'CALIBRATION': '标定',
    'ADJUST': '调整',
    'SAVE CAL': '保存标定',
    'RESET CAL': '重置标定',
    'SCENE SUMMARY': '场景摘要',
    'Enable CCTV to start camera-linked intelligence summaries.': '开启监控以启动摄像头关联情报摘要。',
    'STREET LEVEL': '街景',
    'EXPAND': '展开',
    'FIT': '适应',
    'FILL': '填充',
    'FOLLOW': '跟随',
    'PROVIDERS': '数据源',
    'IMAGERY': '影像',
    'FLAT': '平面',
    'SINCE': '时间',
    'ANY DATE': '任意日期',
    'OPEN STREET VIEW': '打开街景',
    'SCENES': '场景',
    'NEW': '新建',
    'DEL': '删除',
    'CAPTURE SHOT': '捕获镜头',
    'UPDATE SHOT': '更新镜头',
    'START': '开始',
    'STOP': '停止',
    'EXPORT PRESETS': '导出预设',
    'IMPORT': '导入',
    'RUN LOG': '运行日志',
    'Ready': '就绪',
    // 态势 / 电台 / 天气
    'WEATHER': '天气',
    'RECENT IMAGERY': '近期影像',
    'CONTEXT': '态势',
    'RADIO': '电台',
    'RADIO READY': '电台就绪',
    'ENABLE': '启用',
    'VOLUME': '音量',
    'CONTACTS': '目标',
    'SELECT CONTEXT': '选择态势',
    'CONTACTS — nearest planes · vessels · sites': '目标 — 最近的飞机 · 船舶 · 设施',
    'SPACE MISSIONS — launches & orbital assets': '太空任务 — 发射与轨道资产',
    'COCKPIT': '座舱',
    'SEARCH NEARBY SITES': '搜索附近设施',
    'CONTACTS CONTEXT OFF': '目标态势关闭',
    'SELECT CONTACTS TO LOAD OBSERVED / MAPPED PROXIMITY': '选择目标以加载观测 / 地图周边信息',
    'AVAILABLE MISSIONS': '可用任务',
    'SELECT A MISSION TO INSPECT': '选择任务查看',
    'LOADING 30-DAY MISSION INDEX': '正在加载 30 天任务索引',
    'TAB PREVIEWS · ENTER / SPACE SELECTS': 'TAB 预览 · 回车 / 空格选择',
    'STATION TAG': '电台标签',
    'NO STATION SELECTED': '未选择电台',
    'Enable Radio, then choose a globe marker or use next.': '启用电台，然后选择地球标记或使用下一个。',
    'DIRECTORY BAND': '目录频段',
    'DRAG TO TUNE': '拖动调谐',
    'ALL · DRAG THE NEEDLE': '全部 · 拖动指针',
    'SNAPS TO AVAILABLE STATIONS': '自动吸附到可用电台',
    'PLAY': '播放',
    'Radio off': '电台已关闭',
    'STATION SITE': '电台主页',
    'DIRECTORY: RADIO BROWSER': '电台目录：RADIO BROWSER',
    'Audio connects directly to the broadcaster after you press play. Your IP is visible to that broadcaster.': '播放后音频将直连电台服务器，对方可见你的 IP。',
    'LOCAL RTL-SDR': '本地 RTL-SDR',
    'NO USB': '无 USB',
    'Chrome/Edge · WebUSB · one local tuner shared by FM and the Local ADS-B layer.': 'Chrome/Edge · WebUSB · FM 与本地 ADS-B 图层共享一个本地调谐器。',
    'CONNECT': '连接',
    'LOCATE': '定位',
    'CHANGE DEVICE': '更换设备',
    'GAIN': '增益',
    'AUTO': '自动',
    'HEARD': '收到',
    'POSITIONED': '已定位',
    'FM MHZ': 'FM 兆赫',
    'TUNE': '调谐',
    'SEEK': '搜索',
    'SDR VOL': 'SDR 音量',
    'Connect an RTL-SDR to begin.': '连接 RTL-SDR 以开始。',
    // 座舱
    'LEVEL': '水平',
    'DEST ---°': '目的地 ---°',
    'OPTICAL PLANE · 01': '光学平面 · 01',
    'VISOR LOCK · ACTIVE': '遮阳板锁定 · 激活',
    'GROUND SPEED · KTS': '地速 · 节',
    'ALTITUDE · FT': '高度 · 英尺',
    'GROUND SPEED': '地速',
    'KTS': '节',
    'ALTITUDE': '高度',
    'FT': '英尺',
    'FIRST PERSON': '第一人称',
    'AIRCRAFT': '飞机',
    'LIVE TRACK · COURSE ALIGNED': '实时跟踪 · 航向对齐',
    'CURRENT': '当前',
    'CONTACT': '目标',
    'CONTACTS · 250 KM': '目标 · 250 公里',
    'CONTEXT ONLY': '仅态势',
    'SITE': '设施',
    'NEAREST OBSERVED / MAPPED': '最近的观测 / 地图目标',
    'NO AVAILABLE EXAMPLE': '无可用示例',
    'AVAILABLE INPUTS ONLY · NOT AN ALL-CLEAR': '仅基于可用输入 · 非安全确认',
    'ESTIMATED FLIGHT PLAN': '预估飞行计划',
    'ROUTE DATA UNAVAILABLE': '航线数据不可用',
    'FROM': '出发',
    'TO': '到达',
    'UNKNOWN': '未知',
    'LIVE SIGNALS': '实时信号',
    'OBSERVED / MAPPED PINGS': '观测 / 地图信号',
    'CYCLE OFF': '自动切换关',
    'ACQUIRING REGIONAL NEWS': '正在获取区域新闻',
    'RESOLVING REGION': '正在解析区域',
    'TEMP': '温度',
    'WIND': '风',
    'SKY': '天空',
    'PRECIP': '降水',
    'MM': '毫米',
    'Weather data by Open-Meteo.com': '天气数据来自 Open-Meteo.com',
    'SOURCE-BACKED EVENTS · NO SYNTHETIC NEWS': '有来源的事件 · 无合成新闻',
    'NEWS': '新闻',
    'LOCAL': '本地',
    'READY': '就绪',
    'ESC EXIT · C TOGGLE': 'ESC 退出 · C 切换',
    'RESET': '重置',
    'EXIT COCKPIT': '退出座舱',
    // 服务商设置
    'POWER UP': '启用增强',
    'GROUND STATION · PROVIDER SETTINGS': '地面站 · 服务商设置',
    'Power up the globe': '为地球增强功能',
    'The globe already flies keyless. Every key below switches on another real feed — paste one and it\'s saved into this app\'s local configuration, then the server restarts itself. Server-side keys stay on this machine; Google Maps and Cesium ion run in the browser and must be provider-restricted. Keys you configured elsewhere are shown but never touched.': '地球无需密钥即可运行。下方每个密钥都会开启一路真实数据源——粘贴后即保存到本地配置并自动重启服务。服务端密钥仅存于本机；Google Maps 与 Cesium ion 在浏览器中运行，需在服务商侧限制使用范围。在其他地方配置过的密钥只读显示，不会被改动。',
    'SAVE KEYS': '保存密钥',
    'ESC to close': '按 ESC 关闭',
    'The Google Maps key buys the photorealistic planet — everything else stacks on top.': 'Google Maps 密钥可解锁真实感地球——其余功能都建立在此之上。',
    // 加载屏
    'Initializing photorealistic world...': '正在初始化真实感世界...'
  };

  // ---------- 短语词典（出现在短文本中时替换，用于 JS 动态生成的按钮/标签） ----------
  var PHRASES = [
    ['Military Flights', '军用航班'],
    ['Live Flights', '实时航班'],
    ['Flights', '航班'],
    ['Vessels', '船舶'],
    ['Satellites', '卫星'],
    ['Earthquakes', '地震'],
    ['Fires', '火情'],
    ['Traffic', '交通'],
    ['Launches', '发射'],
    ['Transit', '公交'],
    ['Street Level', '街景'],
    ['Submarine Cables', '海底光缆'],
    ['Datacenters', '数据中心'],
    ['Military Installations', '军事设施'],
    ['Power Plants', '发电厂'],
    ['Airports', '机场'],
    ['Mapped ALPR Cameras', '车牌识别摄像头'],
    ['CCTV Mesh', '公共摄像头'],
    ['Camera Viewsheds', '摄像头视域'],
    ['Detection', '识别'],
    ['Parameters', '参数'],
    ['Visual Presets', '视觉预设'],
    ['Map Source', '地图源'],
    ['Global Context', '全局态势'],
    ['Weather', '天气'],
    ['Radio', '电台'],
    ['Search any location', '搜索任意位置'],
    ['Select Context', '选择态势'],
    ['Available Missions', '可用任务'],
    ['Sort By', '排序方式'],
    ['Distance', '距离'],
    ['Name', '名称'],
    ['No results', '无结果'],
    ['Loading', '加载中'],
    ['Error', '错误'],
    ['Latitude', '纬度'],
    ['Longitude', '经度'],
    ['Altitude', '高度'],
    ['Speed', '速度'],
    ['Heading', '航向'],
    ['Status', '状态'],
    ['Source', '来源'],
    ['Updated', '更新时间'],
    ['Signal', '信号'],
    ['Live', '实时'],
    ['CANCEL', '取消'],
    ['OK', '确定'],
    ['CLOSE', '关闭'],
    ['BACK', '返回'],
    ['OPEN', '打开'],
    ['CLICK TO TRACK', '点击跟踪'],
    ['NO DATA', '无数据'],
    ['OFFLINE', '离线'],
    ['ONLINE', '在线']
  ];

  // ---------- 属性词典（title / placeholder / aria-label 精确匹配） ----------
  var ATTR = {
    'Collapse panel': '收起面板',
    'Expand panel': '展开面板',
    'Search any location...': '搜索任意位置...',
    'Label (optional)': '标签（可选）',
    'Copy share link': '复制分享链接',
    'Turn off all selected data layers': '关闭所有选中的数据图层',
    'Reset camera and return to full globe view': '重置视角并回到完整地球视图',
    'Reset map bearing to north': '将地图方向重置为北',
    'Toggle straight-down and tilted map views': '切换俯视与倾斜视角',
    'Search any location': '搜索任意位置',
    'Search location by name or coordinates': '按名称或坐标搜索位置',
    'Expand Visual Presets': '展开视觉预设',
    'Expand LOCATION': '展开位置',
    'Keep visual presets open': '保持视觉预设打开',
    'Keep location tray open': '保持位置栏打开',
    'Collapse panel': '收起面板',
    'Hide UI chrome': '隐藏界面元素',
    'Turn Street Level on or off': '开关街景',
    'Open detailed Radio controls': '打开电台详细控制',
    'Close compact Radio controls': '关闭电台简洁控制',
    'Previous station': '上一个电台',
    'Next station': '下一个电台',
    'Play': '播放',
    'Expand Radio': '展开电台',
    'Close key setup': '关闭密钥设置'
  };

  var ATTR_NAMES = ['title', 'placeholder', 'aria-label'];

  function translateTextNode(node) {
    var text = node.nodeValue;
    var trimmed = text.replace(/\s+/g, ' ').trim();
    if (!trimmed) return;
    // 精确匹配
    if (Object.prototype.hasOwnProperty.call(T, trimmed)) {
      if (node.nodeValue !== T[trimmed]) node.nodeValue = T[trimmed];
      return;
    }
    // 短语匹配：仅处理看起来像 UI 标签的短文本（含大写字母），避免误伤遥测数字
    if (trimmed.length <= 48 && /[A-Z]/.test(trimmed)) {
      for (var i = 0; i < PHRASES.length; i++) {
        var key = PHRASES[i][0];
        if (trimmed.indexOf(key) !== -1) {
          var next = text.split(key).join(PHRASES[i][1]);
          if (next !== text) { node.nodeValue = next; return; }
        }
      }
    }
  }

  function translateAttributes(el) {
    for (var i = 0; i < ATTR_NAMES.length; i++) {
      var name = ATTR_NAMES[i];
      if (el.hasAttribute(name)) {
        var val = el.getAttribute(name);
        var trimmed = val.replace(/\s+/g, ' ').trim();
        if (Object.prototype.hasOwnProperty.call(ATTR, trimmed)) {
          var repl = ATTR[trimmed];
          if (val !== repl) el.setAttribute(name, repl);
        }
      }
    }
  }

  function scanNode(root) {
    // 跳过脚本与样式
    if (root.nodeType === 1) {
      var tag = root.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA') return;
      translateAttributes(root);
    }
    if (root.nodeType === 3) {
      translateTextNode(root);
      return;
    }
    if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (n.nodeType === 1) {
          var t = n.tagName;
          if (t === 'SCRIPT' || t === 'STYLE' || t === 'TEXTAREA') return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    var cur = walker.currentNode;
    while (cur) {
      nodes.push(cur);
      cur = walker.nextNode();
    }
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.nodeType === 1) translateAttributes(n);
      else if (n.nodeType === 3) translateTextNode(n);
    }
  }

  function start() {
    if (document.documentElement) {
      document.documentElement.setAttribute('lang', 'zh-CN');
      scanNode(document.body || document.documentElement);
    }
    if (typeof MutationObserver !== 'undefined') {
      var timer = null;
      var mo = new MutationObserver(function (records) {
        // 批量合并，避免频繁全量扫描
        if (timer) return;
        timer = setTimeout(function () {
          timer = null;
          for (var i = 0; i < records.length; i++) {
            var rec = records[i];
            for (var j = 0; j < rec.addedNodes.length; j++) {
              scanNode(rec.addedNodes[j]);
            }
            if (rec.type === 'characterData' && rec.target && rec.target.nodeType === 3) {
              translateTextNode(rec.target);
            }
          }
        }, 60);
      });
      mo.observe(document.documentElement, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
  // 延迟再补扫，覆盖应用晚些时候渲染的静态模板
  setTimeout(start, 800);
  setTimeout(start, 2500);
})();
