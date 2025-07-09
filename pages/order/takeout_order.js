Page({
  data: {
    cartItems: [],
    address: {
      name: '张三',
      phone: '138****8888',
      detail: '北京市朝阳区CBD一楼C座'
    },
    coupon: null,
    remark: '',
    totalPrice: 0,
    packagingFee: 2,
    discount: 0,
    finalPrice: 0
  },
  onLoad() {
    const cartItems = wx.getStorageSync('cart_takeout') || [];
    this.setData({ cartItems });
    this.calculateTotal();
  },
  calculateTotal() {
    const totalPrice = this.data.cartItems.reduce((total, item) => total + (item.price * item.count), 0);
    const finalPrice = totalPrice + this.data.packagingFee - this.data.discount;
    this.setData({ totalPrice, finalPrice });
  },
  onRemarkInput(e) {
    this.setData({ remark: e.detail.value });
  },
  selectPayType(e) {
    this.setData({ payType: e.currentTarget.dataset.type });
  },
  submitOrder() {
    // 真实微信支付API调用
    const that = this;
    wx.login({
      success(res) {
        if (res.code) {
          // 这里需要调用后端接口获取支付参数
          wx.request({
            url: 'https://你的后端域名/pay', // 替换为你的后端支付接口
            method: 'POST',
            data: {
              code: res.code,
              amount: that.data.finalPrice,
              cart: that.data.cartItems
            },
            success(resp) {
              const payData = resp.data;
              wx.requestPayment({
                timeStamp: payData.timeStamp,
                nonceStr: payData.nonceStr,
                package: payData.package,
                signType: payData.signType,
                paySign: payData.paySign,
                success() {
                  wx.showToast({ title: '支付成功', icon: 'success' });
                  wx.setStorageSync('cart_takeout', []);
                  setTimeout(() => {
                    wx.redirectTo({ url: '/pages/order/order-detail' });
                  }, 1000);
                },
                fail() {
                  wx.showToast({ title: '支付失败', icon: 'none' });
                }
              });
            }
          });
        }
      }
    });
  }
}) 