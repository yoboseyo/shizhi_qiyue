require('es6-promise').polyfill();
require('isomorphic-fetch');
export default (
  {
    title = '食之契约',
    desc = '食之契约',
    link = window.location.href.split('#')[0],
    imgUrl = ''
  } = {}
) => {
  if (window.isWeChat()) {
    wxconfig();
    window.wx.ready(function() {
      //发送给朋友
      window.wx.onMenuShareAppMessage({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl
      });
      //分享到朋友圈
      window.wx.onMenuShareTimeline({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl
      });
      //分享到QQ
      window.wx.onMenuShareQQ({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl
      });
      //分享到QQ空间
      window.wx.onMenuShareQZone({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl
      });
      //分享到腾讯微博
      window.wx.onMenuShareWeibo({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl
      });
    });

    window.wx.error(function(res) {
      console.log(res);
    });
  } else {
    console.log('not a wechat clinet');
  }
};


function wxconfig(){
  fromWxUrl();
  fetch('http://food.funtoygame.com/api/getSignature', {
    method: "POST",
		headers: {},
  }).then((response)=>{
    return response.json()
  }).then((data)=>{
    window.wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: data.appId, // 必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.nonceStr, // 必填，生成签名的随机串
      signature: data.signature, // 必填，签名，见附录1
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
      ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
  }).catch((err)=>{
    console.log(err, 'err');
  })
}

function fromWxUrl(){
  let url = window.location.href;
  let s_url = url.split("?")[0]
  let searchArr =[];
  url.split("?")[1] && url.split("?")[1].split('&').map((item,index)=>{
    if(item.split('=')[0] !== 'from' && item.split('=')[0] !== 'isappinstalled'){
      searchArr.push(item);
    }
  })
  if(searchArr.length>0) s_url = s_url + "?" +searchArr.join('&');

  if(url.indexOf("groupmessage") !== -1){
    window.location.href = s_url;
  }
}
