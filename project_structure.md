# 餐饮小程序项目目录结构

```
wechat_app/
├── README.md                          # 项目说明文档
├── package.json                       # 项目依赖配置
├── project.config.json               # 微信小程序项目配置
├── app.json                          # 小程序全局配置
├── app.js                            # 小程序入口文件
├── app.wxss                          # 全局样式文件
├── sitemap.json                      # 小程序搜索配置
│
├── pages/                            # 页面目录
│   ├── index/                        # 首页
│   │   ├── index.js
│   │   ├── index.wxml
│   │   ├── index.wxss
│   │   └── index.json
│   │
│   ├── menu/                         # 菜品浏览页面
│   │   ├── menu.js
│   │   ├── menu.wxml
│   │   ├── menu.wxss
│   │   └── menu.json
│   │
│   ├── dish-detail/                  # 菜品详情页面
│   │   ├── dish-detail.js
│   │   ├── dish-detail.wxml
│   │   ├── dish-detail.wxss
│   │   └── dish-detail.json
│   │
│   ├── cart/                         # 购物车页面
│   │   ├── cart.js
│   │   ├── cart.wxml
│   │   ├── cart.wxss
│   │   └── cart.json
│   │
│   ├── order/                        # 订单确认页面
│   │   ├── order.js
│   │   ├── order.wxml
│   │   ├── order.wxss
│   │   └── order.json
│   │
│   ├── order-list/                   # 订单列表页面
│   │   ├── order-list.js
│   │   ├── order-list.wxml
│   │   ├── order-list.wxss
│   │   └── order-list.json
│   │
│   ├── order-detail/                 # 订单详情页面
│   │   ├── order-detail.js
│   │   ├── order-detail.wxml
│   │   ├── order-detail.wxss
│   │   └── order-detail.json
│   │
│   ├── profile/                      # 个人中心页面
│   │   ├── profile.js
│   │   ├── profile.wxml
│   │   ├── profile.wxss
│   │   └── profile.json
│   │
│   ├── address/                      # 地址管理页面
│   │   ├── address.js
│   │   ├── address.wxml
│   │   ├── address.wxss
│   │   └── address.json
│   │
│   ├── coupon/                       # 优惠券页面
│   │   ├── coupon.js
│   │   ├── coupon.wxml
│   │   ├── coupon.wxss
│   │   └── coupon.json
│   │
│   ├── login/                        # 登录页面
│   │   ├── login.js
│   │   ├── login.wxml
│   │   ├── login.wxss
│   │   └── login.json
│   │
│   └── shop-admin/                   # 店家端页面
│       ├── dashboard/                # 店家端首页
│       │   ├── dashboard.js
│       │   ├── dashboard.wxml
│       │   ├── dashboard.wxss
│       │   └── dashboard.json
│       │
│       ├── dish-management/          # 菜品管理
│       │   ├── dish-management.js
│       │   ├── dish-management.wxml
│       │   ├── dish-management.wxss
│       │   └── dish-management.json
│       │
│       ├── dish-edit/                # 菜品编辑
│       │   ├── dish-edit.js
│       │   ├── dish-edit.wxml
│       │   ├── dish-edit.wxss
│       │   └── dish-edit.json
│       │
│       ├── order-management/         # 订单管理
│       │   ├── order-management.js
│       │   ├── order-management.wxml
│       │   ├── order-management.wxss
│       │   └── order-management.json
│       │
│       ├── shop-settings/            # 店铺设置
│       │   ├── shop-settings.js
│       │   ├── shop-settings.wxml
│       │   ├── shop-settings.wxss
│       │   └── shop-settings.json
│       │
│       ├── statistics/               # 数据统计
│       │   ├── statistics.js
│       │   ├── statistics.wxml
│       │   ├── statistics.wxss
│       │   └── statistics.json
│       │
│       └── marketing/                # 营销活动
│           ├── marketing.js
│           ├── marketing.wxml
│           ├── marketing.wxss
│           └── marketing.json
│
├── components/                       # 自定义组件
│   ├── dish-card/                    # 菜品卡片组件
│   │   ├── dish-card.js
│   │   ├── dish-card.wxml
│   │   ├── dish-card.wxss
│   │   └── dish-card.json
│   │
│   ├── order-item/                   # 订单项组件
│   │   ├── order-item.js
│   │   ├── order-item.wxml
│   │   ├── order-item.wxss
│   │   └── order-item.json
│   │
│   ├── category-nav/                 # 分类导航组件
│   │   ├── category-nav.js
│   │   ├── category-nav.wxml
│   │   ├── category-nav.wxss
│   │   └── category-nav.json
│   │
│   ├── cart-item/                    # 购物车项组件
│   │   ├── cart-item.js
│   │   ├── cart-item.wxml
│   │   ├── cart-item.wxss
│   │   └── cart-item.json
│   │
│   └── loading/                      # 加载组件
│       ├── loading.js
│       ├── loading.wxml
│       ├── loading.wxss
│       └── loading.json
│
├── utils/                            # 工具函数
│   ├── request.js                    # 网络请求封装
│   ├── auth.js                       # 认证相关工具
│   ├── storage.js                    # 本地存储工具
│   ├── format.js                     # 格式化工具
│   ├── validate.js                   # 验证工具
│   └── constants.js                  # 常量定义
│
├── services/                         # 业务服务层
│   ├── api.js                        # API接口定义
│   ├── user.js                       # 用户相关服务
│   ├── dish.js                       # 菜品相关服务
│   ├── order.js                      # 订单相关服务
│   ├── shop.js                       # 店铺相关服务
│   ├── payment.js                    # 支付相关服务
│   └── upload.js                     # 文件上传服务
│
├── store/                            # 状态管理
│   ├── index.js                      # 状态管理入口
│   ├── user.js                       # 用户状态
│   ├── cart.js                       # 购物车状态
│   ├── order.js                      # 订单状态
│   └── shop.js                       # 店铺状态
│
├── styles/                           # 样式文件
│   ├── common.wxss                   # 公共样式
│   ├── variables.wxss                # 样式变量
│   ├── mixins.wxss                   # 样式混入
│   └── themes/                       # 主题样式
│       ├── default.wxss
│       └── dark.wxss
│
├── images/                           # 图片资源
│   ├── icons/                        # 图标文件
│   ├── dishes/                       # 菜品图片
│   ├── shop/                         # 店铺相关图片
│   └── common/                       # 通用图片
│
├── config/                           # 配置文件
│   ├── dev.js                        # 开发环境配置
│   ├── prod.js                       # 生产环境配置
│   └── index.js                      # 配置入口
│
├── docs/                             # 文档目录
│   ├── api.md                        # API文档
│   ├── components.md                 # 组件文档
│   ├── deployment.md                 # 部署文档
│   └── development.md                # 开发文档
│
├── tests/                            # 测试文件
│   ├── unit/                         # 单元测试
│   ├── integration/                  # 集成测试
│   └── e2e/                          # 端到端测试
│
├── miniprogram_npm/                  # npm包构建目录
├── node_modules/                     # npm依赖包
├── .gitignore                        # Git忽略文件
├── .eslintrc.js                      # ESLint配置
├── .prettierrc                       # Prettier配置
└── userinput.py                      # 用户输入脚本
```

## 目录说明

### 核心目录

1. **pages/** - 页面目录
   - 用户端页面：首页、菜品浏览、购物车、订单等
   - 店家端页面：管理后台、菜品管理、订单管理等

2. **components/** - 可复用组件
   - 菜品卡片、订单项、分类导航等通用组件

3. **utils/** - 工具函数
   - 网络请求、认证、存储、格式化等工具函数

4. **services/** - 业务服务层
   - 封装各种业务逻辑和API调用

5. **store/** - 状态管理
   - 全局状态管理，包括用户、购物车、订单等状态

### 功能模块

#### 用户端功能
- 菜品浏览与点餐
- 购物车管理
- 订单下单与支付
- 订单查询与评价
- 个人中心管理

#### 店家端功能
- 账户与店铺管理
- 菜品管理
- 订单管理
- 营销活动管理
- 数据统计

### 技术栈

- **前端框架**: 微信小程序原生开发
- **状态管理**: 自定义状态管理
- **网络请求**: 微信小程序API
- **支付**: 微信支付
- **文件上传**: 微信小程序云存储
- **地图**: 微信小程序地图API

### 开发规范

- 使用ESLint进行代码规范检查
- 使用Prettier进行代码格式化
- 遵循微信小程序开发规范
- 组件化开发，提高代码复用性
- 统一的API接口管理
- 完善的错误处理和日志记录 