webpackJsonp([1],{

/***/ "+LO9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("tZCl");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("fdb7b6ec", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./default.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./default.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "lfHO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/quasar-framework/dist/quasar.mat.esm.js
var quasar_mat_esm = __webpack_require__("7109");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/layouts/default.vue




/* harmony default export */ var layouts_default = ({
  name: 'LayoutDefault',
  data: function data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },

  methods: {
    openURL: quasar_mat_esm["r" /* openURL */]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-39336072","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/layouts/default.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "q-layout",
    { attrs: { view: "lHh Lpr lFf" } },
    [
      _c(
        "q-layout-header",
        [
          _c(
            "q-toolbar",
            { attrs: { color: "primary" } },
            [
              _c(
                "q-btn",
                {
                  attrs: {
                    flat: "",
                    dense: "",
                    round: "",
                    "aria-label": "Menu"
                  },
                  on: {
                    click: function($event) {
                      _vm.leftDrawerOpen = !_vm.leftDrawerOpen
                    }
                  }
                },
                [_c("q-icon", { attrs: { name: "menu" } })],
                1
              ),
              _vm._v(" "),
              _c("q-toolbar-title", [_vm._v("\n        CryptoWallet\n      ")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "q-layout-drawer",
        {
          attrs: {
            "content-class": _vm.$q.theme === "mat" ? "bg-grey-2" : null
          },
          model: {
            value: _vm.leftDrawerOpen,
            callback: function($$v) {
              _vm.leftDrawerOpen = $$v
            },
            expression: "leftDrawerOpen"
          }
        },
        [
          _c(
            "q-list",
            { attrs: { "no-border": "", link: "", "inset-delimiter": "" } },
            [
              _c("q-list-header", [_vm._v("Essential Links")]),
              _vm._v(" "),
              _c(
                "q-item",
                {
                  nativeOn: {
                    click: function($event) {
                      _vm.openURL("http://quasar-framework.org")
                    }
                  }
                },
                [
                  _c("q-item-side", { attrs: { icon: "school" } }),
                  _vm._v(" "),
                  _c("q-item-main", {
                    attrs: { label: "Docs", sublabel: "quasar-framework.org" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "q-item",
                {
                  nativeOn: {
                    click: function($event) {
                      _vm.openURL("https://github.com/quasarframework/")
                    }
                  }
                },
                [
                  _c("q-item-side", { attrs: { icon: "code" } }),
                  _vm._v(" "),
                  _c("q-item-main", {
                    attrs: {
                      label: "GitHub",
                      sublabel: "github.com/quasarframework"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "q-item",
                {
                  nativeOn: {
                    click: function($event) {
                      _vm.openURL("https://discord.gg/5TDhbDg")
                    }
                  }
                },
                [
                  _c("q-item-side", { attrs: { icon: "chat" } }),
                  _vm._v(" "),
                  _c("q-item-main", {
                    attrs: {
                      label: "Discord Chat Channel",
                      sublabel: "https://discord.gg/5TDhbDg"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "q-item",
                {
                  nativeOn: {
                    click: function($event) {
                      _vm.openURL("http://forum.quasar-framework.org")
                    }
                  }
                },
                [
                  _c("q-item-side", { attrs: { icon: "record_voice_over" } }),
                  _vm._v(" "),
                  _c("q-item-main", {
                    attrs: {
                      label: "Forum",
                      sublabel: "forum.quasar-framework.org"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "q-item",
                {
                  nativeOn: {
                    click: function($event) {
                      _vm.openURL("https://twitter.com/quasarframework")
                    }
                  }
                },
                [
                  _c("q-item-side", { attrs: { icon: "rss feed" } }),
                  _vm._v(" "),
                  _c("q-item-main", {
                    attrs: { label: "Twitter", sublabel: "@quasarframework" }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("q-page-container", [_c("router-view")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-39336072", { render: render, staticRenderFns: staticRenderFns })
  }
}
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("XyMi");

// CONCATENATED MODULE: ./src/layouts/default.vue
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("+LO9")
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
  layouts_default,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/layouts/default.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39336072", Component.options)
  } else {
    hotAPI.reload("data-v-39336072", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var src_layouts_default = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "tZCl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"default.vue","sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=1.678ff802b336927f6913.js.map