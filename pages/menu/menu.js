Page({
  data: {
    // 分类数据
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
    
    // 菜品数据
    dishes: [
      {
        id: 1,
        categoryId: 1,
        name: '经典猪肉大白菜饺',
        description: '精选猪肉搭配清甜大白菜，皮薄馅大',
        price: 28,
        sales: 146,
        image: '/images/dishes/dumpling1.jpg',
        count: 0
      },
      {
        id: 2,
        categoryId: 1,
        name: '香煎韭菜鸡蛋饺',
        description: '外皮酥脆，内馅鲜美，香气四溢',
        price: 32,
        sales: 89,
        image: '/images/dishes/dumpling2.jpg',
        count: 0
      },
      {
        id: 3,
        categoryId: 2,
        name: '鲜虾玉米蒸饺',
        description: '新鲜虾仁配甜玉米，蒸制而成',
        price: 38,
        sales: 67,
        image: '/images/dishes/dumpling3.jpg',
        count: 0
      },
      {
        id: 4,
        categoryId: 2,
        name: '酸汤肥牛水饺',
        description: '酸辣开胃，肥牛鲜嫩多汁',
        price: 45,
        sales: 123,
        image: '/images/dishes/dumpling4.jpg',
        count: 0
      },
      {
        id: 5,
        categoryId: 3,
        name: '秘制素三鲜饺',
        description: '香菇、胡萝卜、青菜，营养丰富',
        price: 26,
        sales: 78,
        image: '/images/dishes/dumpling5.jpg',
        count: 0
      },
      {
        id: 6,
        categoryId: 4,
        name: '海鲜什锦饺',
        description: '虾仁、蟹肉、鱿鱼，海鲜盛宴',
        price: 52,
        sales: 45,
        image: '/images/dishes/dumpling6.jpg',
        count: 0
      },
      {
        id: 7,
        categoryId: 5,
        name: '传统水饺',
        description: '经典水饺，皮薄馅大',
        price: 22,
        sales: 234,
        image: '/images/dishes/dumpling7.jpg',
        count: 0
      },
      {
        id: 8,
        categoryId: 6,
        name: '黄金煎饺',
        description: '底部金黄酥脆，口感层次丰富',
        price: 35,
        sales: 156,
        image: '/images/dishes/dumpling8.jpg',
        count: 0
      }
    ],
    
    // 当前选中的分类
    currentCategory: 1,
    
    // 购物车数据
    cart: [],
    
    // 总价
    totalPrice: 0,
    
    // 门店信息
    storeInfo: {
      name: '自取门店',
      address: '朝阳区有一间饺子店 (朝阳区CBD一楼C...)'
    }
  },

  onLoad() {
    this.updateCartTotal();
  },

  // 切换分类
  switchCategory(e) {
    const categoryId = e.currentTarget.dataset.id;
    
    // 更新分类状态
    const categories = this.data.categories.map(item => {
      item.active = item.id === categoryId;
      return item;
    });
    
    this.setData({
      categories,
      currentCategory: categoryId
    });
  },

  // 添加到购物车
  addToCart(e) {
    const dishId = e.currentTarget.dataset.id;
    const dishes = this.data.dishes;
    const dish = dishes.find(item => item.id === dishId);
    
    if (dish) {
      dish.count++;
      
      // 更新购物车
      const cart = this.data.cart;
      const cartItem = cart.find(item => item.id === dishId);
      
      if (cartItem) {
        cartItem.count++;
      } else {
        cart.push({
          id: dish.id,
          name: dish.name,
          price: dish.price,
          count: 1
        });
      }
      
      this.setData({
        dishes,
        cart
      });
      
      this.updateCartTotal();
    }
  },

  // 从购物车移除
  removeFromCart(e) {
    const dishId = e.currentTarget.dataset.id;
    const dishes = this.data.dishes;
    const dish = dishes.find(item => item.id === dishId);
    
    if (dish && dish.count > 0) {
      dish.count--;
      
      // 更新购物车
      const cart = this.data.cart;
      const cartItem = cart.find(item => item.id === dishId);
      
      if (cartItem) {
        cartItem.count--;
        if (cartItem.count === 0) {
          const index = cart.findIndex(item => item.id === dishId);
          cart.splice(index, 1);
        }
      }
      
      this.setData({
        dishes,
        cart
      });
      
      this.updateCartTotal();
    }
  },

  // 更新购物车总价
  updateCartTotal() {
    const totalPrice = this.data.cart.reduce((total, item) => {
      return total + (item.price * item.count);
    }, 0);
    
    this.setData({
      totalPrice
    });
  },

  // 查看购物车
  viewCart() {
    if (this.data.cart.length > 0) {
      wx.navigateTo({
        url: '/pages/cart/cart'
      });
    }
  },

  // 返回上一页
  goBack() {
    wx.navigateBack();
  },

  // 更多选项
  showMoreOptions() {
    wx.showActionSheet({
      itemList: ['分享', '收藏', '客服'],
      success: (res) => {
        console.log('选择了', res.tapIndex);
      }
    });
  }
})
