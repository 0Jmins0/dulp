Page({
  data: {
    categories: [
      { id: 1, name: '猪肉馅饺', icon: '🥟', active: true },
      { id: 2, name: '牛肉馅饺', icon: '🥟', active: false },
      { id: 3, name: '素馅饺', icon: '🥟', active: false },
      { id: 4, name: '海鲜饺', icon: '🥟', active: false },
      { id: 5, name: '水饺', icon: '🥟', active: false },
      { id: 6, name: '煎饺', icon: '🥟', active: false },
      { id: 7, name: '蒸饺', icon: '🥟', active: false },
      { id: 8, name: '特色饺', icon: '🥟', active: false }
    ],
    dishes: [
      { id: 1, categoryId: 1, name: '经典猪肉大白菜饺', description: '精选猪肉搭配清甜大白菜，皮薄馅大', price: 28, sales: 146, image: '/images/dishes/dumpling1.jpg', count: 0 },
      { id: 2, categoryId: 2, name: '香煎韭菜鸡蛋饺', description: '外皮酥脆，内馅鲜美，香气四溢', price: 32, sales: 89, image: '/images/dishes/dumpling2.jpg', count: 0 },
      { id: 3, categoryId: 3, name: '秘制素三鲜饺', description: '香菇、胡萝卜、青菜，营养丰富', price: 26, sales: 78, image: '/images/dishes/dumpling5.jpg', count: 0 },
      { id: 4, categoryId: 4, name: '海鲜什锦饺', description: '虾仁、蟹肉、鱿鱼，海鲜盛宴', price: 52, sales: 45, image: '/images/dishes/dumpling6.jpg', count: 0 },
      { id: 5, categoryId: 5, name: '传统水饺', description: '经典水饺，皮薄馅大', price: 22, sales: 234, image: '/images/dishes/dumpling7.jpg', count: 0 },
      { id: 6, categoryId: 6, name: '黄金煎饺', description: '底部金黄酥脆，口感层次丰富', price: 35, sales: 156, image: '/images/dishes/dumpling8.jpg', count: 0 }
    ],
    currentCategory: 1,
    cart: [],
    totalPrice: 0,
    storeInfo: {
      name: '外卖配送',
      address: '北京市朝阳区CBD一楼C座'
    }
  },

  onLoad() {
    this.loadCart();
  },

  // 返回上一页
  goBack() {
    wx.navigateBack();
  },

  loadCart() {
    const cart = wx.getStorageSync('cart_takeout') || [];
    this.setData({ cart });
    this.updateCartTotal();
  },

  switchCategory(e) {
    const categoryId = e.currentTarget.dataset.id;
    const categories = this.data.categories.map(item => {
      item.active = item.id === categoryId;
      return item;
    });
    this.setData({ categories, currentCategory: categoryId });
  },

  addToCart(e) {
    const dishId = e.currentTarget.dataset.id;
    const dishes = this.data.dishes;
    const dish = dishes.find(item => item.id === dishId);
    if (dish) {
      dish.count++;
      let cart = wx.getStorageSync('cart_takeout') || [];
      const cartItem = cart.find(item => item.id === dishId);
      if (cartItem) {
        cartItem.count++;
      } else {
        cart.push({ id: dish.id, name: dish.name, price: dish.price, count: 1, image: dish.image });
      }
      wx.setStorageSync('cart_takeout', cart);
      this.setData({ dishes, cart });
      this.updateCartTotal();
    }
  },

  removeFromCart(e) {
    const dishId = e.currentTarget.dataset.id;
    const dishes = this.data.dishes;
    const dish = dishes.find(item => item.id === dishId);
    if (dish && dish.count > 0) {
      dish.count--;
      let cart = wx.getStorageSync('cart_takeout') || [];
      const cartItem = cart.find(item => item.id === dishId);
      if (cartItem) {
        cartItem.count--;
        if (cartItem.count === 0) {
          const index = cart.findIndex(item => item.id === dishId);
          cart.splice(index, 1);
        }
      }
      wx.setStorageSync('cart_takeout', cart);
      this.setData({ dishes, cart });
      this.updateCartTotal();
    }
  },

  updateCartTotal() {
    const cart = wx.getStorageSync('cart_takeout') || [];
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.count), 0);
    this.setData({ totalPrice });
  },

  viewCart() {
    wx.navigateTo({ url: '/pages/cart/takeout_cart' });
  }
})