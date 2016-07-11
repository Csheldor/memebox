angular.module('cart.controller',[])
  .controller('cartController', ['$scope','$ionicPopup', function ($scope,$ionicPopup) {
    var items=[
      {
        title:'|MEMEBOX.美美箱|IM COEVER CUSHION 我爱丝绒 无暇气垫霜 #01象牙白',
        price:'￥198.00'
      },
      {
        title:'|MEMEBOX.美美箱|IM COEVER CUSHION 我爱丝绒 无暇气垫霜 #01象牙白',
        price:'￥198.00'
      }
    ];
    var item1=[
        {
        title:'|MEMEBOX.美美箱|PONY 樱花浪漫口红 #01玫瑰色',
        price:'￥198.00'
      }
    ];
    $scope.item1=item1;
    $scope.items=items;
    // console.log(items);
//弹出窗
    $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
        title: '确认删除商品？',
        okText:'确定',
        cancelText:'取消'
      });
    confirmPopup.then(function(obj,res) {
      if(res) {

      } else {
        console.log(res);
      }
    });
  };
//数量加减
  $scope.cut=function(){

  }
}])
