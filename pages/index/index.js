//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    name:"ziazan",
     count:1,
     zero:0,
     staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //改变名字
  changeName:function(e){
    this.setData({name:"littleFour"});
  },
  //加计数
  click:function(){
    this.setData({
      count: this.data.count+1
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
    console.log('onReady')
  },
  onShow:function(){
    // 页面显示
    console.log('onShow')
  },
  onHide:function(){
    // 页面隐藏
    console.log('onHide')
  },
  onUnload:function(){
    // 页面关闭
    console.log('onUnload')
  },
  onPullDownRefreash:function(){
    console.log("不要动");
  }
})

