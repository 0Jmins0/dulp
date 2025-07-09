Page({
  data: {},

  onLoad() {},

  // 外卖点击事件
  onTakeoutTap() {
    wx.navigateTo({
      url: '/pages/menu/takeout/takeout'
    })
  },

  // 门店自取点击事件
  onSelfPickupTap() {
    wx.navigateTo({
      url: '/pages/menu/selfpickup/selfpickup'
    })
  },

  // 优惠券中心点击事件
  onCouponTap() {
    wx.navigateTo({
      url: '/pages/coupon/coupon'
    })
  },

  // 个人中心点击事件
  onProfileTap() {
    wx.navigateTo({
      url: '/pages/profile/profile'
    })
  }
})
