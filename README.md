# netflix-control v1.0.0（chrome extension）

该项目为chrome扩展，用于增强Netflix的播放功能

### features
- 可调播放速度

### how to use
1. 下载项目：`git clone https://github.com/royhuang813/netflix-control.git`
2. 在浏览器中输入：`chrome://extensions/`，右上角开启**开发者模式**，左上角点击**加载已解压的扩展程序**，选择刚下载的项目即可

### bug
- 进入任一视频后，必须手动刷新一次，才会起效
- 自动跳入下个视频时，不会保留上个视频所设定的播放速度
- 无法立即获取DOM（可能是异步问题），暂时设定为进入页面6秒后再执行扩展程序


有任何建议欢迎提issues
