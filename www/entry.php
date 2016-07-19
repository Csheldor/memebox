<?php
  include 'WechatJssdk.class.php';
  $appid = "wxdd8c5ec068dd79ed";
  $appsecret = "72fafdd1d57e9886d591c5de0b909b5d";
  $jssdk = new WechatJssdk($appid,$appsecret);
  $signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>起点中文网</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link rel="stylesheet" href="/qidian/prd/styles/usage/app@d751c72fc71e792ee35841e63af1fa08.css" />
  <script>
      document.ontouchmove = function(e) {
          if (e.target.tagName.toUpperCase() !== 'IFRAME') {
              e.preventDefault();
          }
      };
  </script>
</head>
<body>
  <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
  <script>
    wx.config({
      debug: false,
      appId: "<?php echo $signPackage['appId']; ?>",
      timestamp: '<?php echo $signPackage["timestamp"]; ?>',
      nonceStr: '<?php echo $signPackage["nonceStr"]; ?>',
      signature: '<?php echo $signPackage["signature"]; ?>',
      jsApiList: [
        // 所有要调用的 API 都要加到这个列表中
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'hideOptionMenu',
        'showOptionMenu',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'closeWindow',
        'scanQRCode'
      ]
    });
  </script>
  <script src="/qidian/prd/scripts/app@a76f99fda44153c955809cb250ec4de6.js"></script>
</body>
</html>
