webpackJsonp([3],{

/***/ "+nwc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nplA");


/***/ }),

/***/ "1z9n":
/***/ (function(module, exports) {



/***/ }),

/***/ "3Puz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5pIN":
/***/ (function(module, exports) {



/***/ }),

/***/ "N12Q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "R58i":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nHeW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nplA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("/5sW");

// EXTERNAL MODULE: ./node_modules/quasar-framework/dist/quasar.mat.esm.js
var quasar_mat_esm = __webpack_require__("7109");

// CONCATENATED MODULE: ./.quasar/quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding initialization code.
 * Use "quasar new plugin <name>" and add it there.
 * One plugin per concern. Then reference the file(s) in quasar.conf.js > plugins:
 * plugins: ['file', ...] // do not add ".js" extension to it.
 **/





vue_runtime_esm["a" /* default */].use(quasar_mat_esm["q" /* default */], {components: {QLayout: quasar_mat_esm["g" /* QLayout */],QLayoutHeader: quasar_mat_esm["i" /* QLayoutHeader */],QLayoutDrawer: quasar_mat_esm["h" /* QLayoutDrawer */],QPageContainer: quasar_mat_esm["m" /* QPageContainer */],QPage: quasar_mat_esm["l" /* QPage */],QToolbar: quasar_mat_esm["n" /* QToolbar */],QToolbarTitle: quasar_mat_esm["o" /* QToolbarTitle */],QBtn: quasar_mat_esm["b" /* QBtn */],QIcon: quasar_mat_esm["c" /* QIcon */],QList: quasar_mat_esm["j" /* QList */],QListHeader: quasar_mat_esm["k" /* QListHeader */],QItem: quasar_mat_esm["d" /* QItem */],QItemMain: quasar_mat_esm["e" /* QItemMain */],QItemSide: quasar_mat_esm["f" /* QItemSide */]},directives: {Ripple: quasar_mat_esm["p" /* Ripple */]},plugins: {Notify: quasar_mat_esm["a" /* Notify */]}})

// EXTERNAL MODULE: ./node_modules/quasar-extras/roboto-font.js
var roboto_font = __webpack_require__("L4dm");
var roboto_font_default = /*#__PURE__*/__webpack_require__.n(roboto_font);

// EXTERNAL MODULE: ./node_modules/quasar-extras/material-icons.js
var material_icons = __webpack_require__("hAPP");
var material_icons_default = /*#__PURE__*/__webpack_require__.n(material_icons);

// EXTERNAL MODULE: ./.quasar/app.styl
var _quasar_app = __webpack_require__("3Puz");
var app_default = /*#__PURE__*/__webpack_require__.n(_quasar_app);

// EXTERNAL MODULE: ./src/css/app.styl
var css_app = __webpack_require__("N12Q");
var css_app_default = /*#__PURE__*/__webpack_require__.n(css_app);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue


/* harmony default export */ var App = ({
  name: 'App',

  data: function data() {
    return {
      paymentMimeType: 'CryptoWallet/Payment',
      recievingAddress: Math.random().toString(36).slice(-5),
      nDefMimeType: 'cryptowallet/payments'
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    console.log(this.$q);
    console.log(window);
    console.log(window.nfc);
    console.log(window.ndef);
    var record = window.ndef.mimeMediaRecord(this.nDefMimeType, window.nfc.stringToBytes(this.recievingAddress));

    console.log(record);

    document.addEventListener('deviceready', function () {
      window.nfc.addNdefListener(function (payload) {
        _this.log(payload);
      }, _this.log('listen addNdefListener successfull'), _this.log('listen addNdefListener failed'));
      window.nfc.addTagDiscoveredListener(function (payload) {
        _this.log(payload);
      }, _this.log('listen addTagDiscoveredListener successfull'), _this.log('listen addTagDiscoveredListener failed'));
    }, false);
  },
  created: function created() {
    window.nfc.share(this.recievingAddress, this.log('share successfull'), this.log('share failed'));
  },
  beforeMount: function beforeMount() {},
  updated: function updated() {},


  methods: {
    log: function log(payload) {
      console.log(payload);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7ba5bd90","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "q-app" } }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ba5bd90", { render: render, staticRenderFns: staticRenderFns })
  }
}
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("XyMi");

// CONCATENATED MODULE: ./src/App.vue
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("nHeW")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  App,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ba5bd90", Component.options)
  } else {
    hotAPI.reload("data-v-7ba5bd90", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./src/router/routes.js

/* harmony default export */ var routes = ([{
  path: '/',
  component: function component() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "lfHO"));
  },
  children: [{
    path: '',
    component: function component() {
      return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "2NXm"));
    }
  }]
}, {
  path: '*',
  component: function component() {
    return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "c5Mg"));
  }
}]);
// CONCATENATED MODULE: ./src/router/index.js





vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

var Router = new vue_router_esm["a" /* default */]({
  mode: "hash",
  base: "/",
  scrollBehavior: function scrollBehavior() {
    return { y: 0 };
  },
  routes: routes
});

/* harmony default export */ var router = (Router);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./src/store/module-example/state.js
/* harmony default export */ var state = ({});
// EXTERNAL MODULE: ./src/store/module-example/getters.js
var getters = __webpack_require__("1z9n");
var getters_default = /*#__PURE__*/__webpack_require__.n(getters);

// EXTERNAL MODULE: ./src/store/module-example/mutations.js
var mutations = __webpack_require__("5pIN");
var mutations_default = /*#__PURE__*/__webpack_require__.n(mutations);

// EXTERNAL MODULE: ./src/store/module-example/actions.js
var actions = __webpack_require__("vSrN");
var actions_default = /*#__PURE__*/__webpack_require__.n(actions);

// CONCATENATED MODULE: ./src/store/module-example/index.js





/* harmony default export */ var module_example = ({
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});
// CONCATENATED MODULE: ./src/store/index.js





vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);

var store = new vuex_esm["a" /* default */].Store({
  modules: {
    example: module_example
  }
});

/* harmony default export */ var src_store = (store);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__("TXmL");

// CONCATENATED MODULE: ./src/i18n/en/index.js


/* harmony default export */ var en = ({
  failed: 'Action failed',
  success: 'Action was successful'
});
// CONCATENATED MODULE: ./src/i18n/index.js


/* harmony default export */ var i18n = ({
  en: en
});
// CONCATENATED MODULE: ./src/plugins/i18n.js



/* harmony default export */ var plugins_i18n = (function (_ref) {
  var app = _ref.app,
      Vue = _ref.Vue;

  Vue.use(vue_i18n_esm["a" /* default */]);

  app.i18n = new vue_i18n_esm["a" /* default */]({
    locale: 'en',
    fallbackLocale: 'en',
    messages: i18n
  });
});
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/plugins/axios.js


/* harmony default export */ var plugins_axios = (function (_ref) {
  var Vue = _ref.Vue;

  Vue.prototype.$axios = axios_default.a;
});
// CONCATENATED MODULE: ./.quasar/entry.js





vue_runtime_esm["a" /* default */].config.productionTip = false;















var entry_app = extends_default()({
  el: '#q-app',
  router: router,
  store: src_store
}, src_App);

var plugins = [];


plugins.push(plugins_i18n);


plugins.push(plugins_axios);

plugins.forEach(function (plugin) {
  return plugin({ app: entry_app, router: router, store: src_store, Vue: vue_runtime_esm["a" /* default */] });
});

document.addEventListener('deviceready', function () {
  vue_runtime_esm["a" /* default */].prototype.$q.cordova = window.cordova;

  new vue_runtime_esm["a" /* default */](entry_app);
}, false);

/***/ }),

/***/ "vSrN":
/***/ (function(module, exports) {



/***/ })

},[0]);
//# sourceMappingURL=app.a2b2086e6fa14bad651a.js.map