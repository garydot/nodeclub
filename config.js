/**
 * config
 */

var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: false,

  get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: '好孕帮·圈子', // 社区名字
  description: '好孕帮：您身边的助孕专家', // 社区的描述
  keywords: '好孕帮, 助孕, 难孕难育',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="EDP@TAOBAO" />'
  ],
  site_logo: '', // default is `name`
  site_icon: 'haoyunbang.cn', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    //[ '/about', '关于' ]
  ],
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: 'localhost',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: 'UA-4175xxxx-x',

  // mongodb 配置
  db: 'mongodb://127.0.0.1/node_club_dev',
  db_name: 'node_club_dev',


  session_secret: 'hyb_luntan_sec', // 务必修改
  auth_cookie_name: 'hyb_luntan',

  // 程序运行的端口
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // 限制发帖时间间隔，单位：毫秒
  post_interval: 2000,

  // RSS配置
  rss: {
    title: '好孕帮',
    link: 'http://haoyunbang.cn',
    language: 'zh-cn',
    description: '好孕帮：您身边的助孕专家',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // 邮箱配置
  mail_opts: {
    host: 'SMTP.YM.163.COM',
    port: 25,
    auth: {
      user: 'zhangang@newsage.cn',
      pass: 'zxg4811452'
    }
  },

  //weibo app key
  weibo_key: 10000000,
  weibo_id: 'your_weibo_id',

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { zhangang: true },

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: 'your GITHUB_CLIENT_ID',
    clientSecret: 'your GITHUB_CLIENT_SECRET',
    callbackURL: 'http://cnodejs.org/auth/github/callback'
  },
  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // newrelic 是个用来监控网站性能的服务
  newrelic_key: '6abfa4b572b410d12eaeb833d688e0ead3b870c3',

  //7牛的access信息，用于文件上传
  qn_access: {
    accessKey: 'FSyFDytwVgYi8cXVp8ZHNkhk1Le9ZWCz2nDdDS1k',
    secretKey: 'a_VxgCYnocR9S1s2J7TU6y5NEcGA9YpJGFVPVTMd',
    bucket: 'haoyb',
    domain: 'http://haoyb.qiniudn.com'
  },

  //文件上传配置
  //注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  // 版块
  tabs: [
  ]
};

module.exports = config;
