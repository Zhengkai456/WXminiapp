const app=getApp();
var index_function_button_counter=0;

Page({
  data:{
    index_text_welcome:"让傲娇神教给你洗脑吧(手动滑稽)",
    index_text_main:"才...才不是为了你才做的这个小程序呢！！///v///",
    index_button:"本当？",
    index_image:"../../images/tousaka.jpeg"
  },
  onLoad: function () {
      },
  index_function_button () {
    index_function_button_counter+=1;
    if (index_function_button_counter%2!==0){
      this.setData({
        index_text_main: "无路赛无路赛无路赛！！！",
        index_button: "给小程序作者打电话！",
        index_image:"../../images/shana.jpg"
      })
    }
    else if (index_function_button_counter%2===0){
      this.setData({
        index_text_main: "才...才不是为了你才做的这个小程序呢！！///v///",
        index_button: "本当？",
        index_image:"../../images/tousaka.jpeg"
      })
    }
  }
  
})