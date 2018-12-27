var number_judge=/U\d{9}/;
var phone_judge=/\d{11}/;
var count=0;

Page({
  data:{
    baoming_image:"../../images/menma.png",
    will_range:["思存工作室","除了思存工作室我哪里都不想去！"],
    index:0
  },
  onLoad:function () {
  },
  PickerChange:function (e) {
    this.setData({
      index:e.detail.value
    })
  },
  baoming_function_submit:function (e) {
    var form=e.detail.value;
    var x=number_judge.test(form["user_number"]);
    var y=phone_judge.test(form["user_phone"]);
    if(x&&y) {
      wx.showModal({
        title: '提交成功',
        content: '面试信息将以短信形式通知',
      })
    }
    else if(x&&(!y)) {
      wx.showModal({
        title: '提交失败',
        content: '请检查手机号码输入是否有问题',
      })
    }
    else if((!x)&&y) {
      wx.showModal({
        title: '提交失败',
        content: '请检查学号输入是否有问题',
      })
    }
    else if((!x)&&(!y)) {
      wx.showModal({
        title: '提交失败',
        content: '请重新输入信息',
      })
    }
  },
  changepic: function () {
    count+=1;
    if(count%2!==0) {
      this.setData({
        baoming_image: "../../images/menma.jpeg"
      })
    }
    else if(count%2===0) {
      this.setData({
        baoming_image: "../../images/menma.png"
      })
    }
  }
})