Page({
  data: {
    cartItems: [
      {
        id: 1,
        name: '经典猪肉大白菜饺',
        price: 28,
        count: 2,
        image: '/images/dishes/dumpling1.jpg'
      },
      {
        id: 2,
        name: '香煎韭菜鸡蛋饺',
        price: 32,
        count: 1,
        image: '/images/dishes/dumpling2.jpg'
      },
      {
        id: 3,
        name: '鲜虾玉米蒸饺',
        price: 38,
        count: 1,
        image: '/images/dishes/dumpling3.jpg'
      }
    ],
    totalPrice: 0,
    deliveryFee: 0,
    packagingFee: 2,
    discount: 0,
    finalPrice: 0
  },

  onLoad() {
    this.calculateTotal();
  },

  // 增加商品数量
  increaseCount(e) {
    const id = e.currentTarget.dataset.id;
    const cartItems = this.data.cartItems.map(item => {
      if (item.id === id) {
        item.count++;
      }
      return item;
    });
    
    this.setData({ cartItems });
    this.calculateTotal();
  },

  // 减少商品数量
  decreaseCount(e) {
    const id = e.currentTarget.dataset.id;
    const cartItems = this.data.cartItems.map(item => {
      if (item.id === id && item.count > 1) {
        item.count--;
      }
      return item;
    });
    
    this.setData({ cartItems });
    this.calculateTotal();
  },

  // 删除商品
  removeItem(e) {
    const id = e.currentTarget.dataset.id;
    const cartItems = this.data.cartItems.filter(item => item.id !== id);
    
    this.setData({ cartItems });
    this.calculateTotal();
  },

  // 计算总价
  calculateTotal() {
    const totalPrice = this.data.cartItems.reduce((total, item) => {
      return total + (item.price * item.count);
    }, 0);
    
    const finalPrice = totalPrice + this.data.packagingFee - this.data.discount;
    
    this.setData({
      totalPrice,
      finalPrice
    });
  },

  // 去结算
  goToCheckout() {
    if (this.data.cartItems.length > 0) {
      wx.navigateTo({
        url: '/pages/order/order'
      });
    }
  },

  // 返回菜单
  goBack() {
    wx.navigateBack();
  }
})
