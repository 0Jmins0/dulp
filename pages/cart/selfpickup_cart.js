Page({
  data: {
    cartItems: [],
    totalPrice: 0,
    packagingFee: 2,
    discount: 0,
    finalPrice: 0
  },
  onShow() {
    this.loadCart();
  },
  loadCart() {
    const cartItems = wx.getStorageSync('cart_selfpickup') || [];
    this.setData({ cartItems });
    this.calculateTotal();
  },
  increaseCount(e) {
    const id = e.currentTarget.dataset.id;
    let cartItems = this.data.cartItems;
    const item = cartItems.find(i => i.id === id);
    if (item) item.count++;
    wx.setStorageSync('cart_selfpickup', cartItems);
    this.setData({ cartItems });
    this.calculateTotal();
  },
  decreaseCount(e) {
    const id = e.currentTarget.dataset.id;
    let cartItems = this.data.cartItems;
    const item = cartItems.find(i => i.id === id);
    if (item && item.count > 1) item.count--;
    wx.setStorageSync('cart_selfpickup', cartItems);
    this.setData({ cartItems });
    this.calculateTotal();
  },
  removeItem(e) {
    const id = e.currentTarget.dataset.id;
    let cartItems = this.data.cartItems.filter(i => i.id !== id);
    wx.setStorageSync('cart_selfpickup', cartItems);
    this.setData({ cartItems });
    this.calculateTotal();
  },
  calculateTotal() {
    const totalPrice = this.data.cartItems.reduce((total, item) => total + (item.price * item.count), 0);
    const finalPrice = totalPrice + this.data.packagingFee - this.data.discount;
    this.setData({ totalPrice, finalPrice });
  },
  goToCheckout() {
    if (this.data.cartItems.length > 0) {
      wx.navigateTo({ url: '/pages/order/selfpickup_order' });
    }
  },
  goBack() {
    wx.navigateBack();
  }
}) 