(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      {{title}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"icontent\" [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">{{ title }}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-list>\r\n    <span class=\"blank-workout ion-padding-top\" *ngIf=\"exercises.length === 0\">\r\n      <h3>Click the button below to add a exercise to the workout!</h3>\r\n      </span>\r\n    <!-- Sliding item with text options on both sides -->\r\n    <ion-item-sliding *ngFor=\"let exercise of exercises; let i = index\">\r\n      <ion-item> \r\n        <ion-label class=\"workout\">\r\n          <h2>\r\n            <strong>Exercise Name:</strong> {{exercise.name}}<br />\r\n            <strong>Weight Used(in LBs): </strong> {{exercise.weight}}<br />\r\n            <strong>Sets Completed:</strong> {{exercise.sets}}<br />\r\n            <strong>Reps Completed in each Set:</strong> {{exercise.reps}}<br />\r\n      </h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-button color=\"customColors\" (click)=\"editExercise(exercise, i)\" color=\"primary\" icon-start>\r\n          <ion-icon name=\"create\"></ion-icon>\r\n          Edit\r\n        </ion-button>\r\n        <ion-button (click)=\"removeExercise(exercise)\" color=\"danger\" icon-start>\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n          Delete\r\n        </ion-button>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n      \r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"addExercise()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/tab1/tab1-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "./src/app/tab1/tab1-routing.module.ts");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-item {\n  border-bottom: 2px dotted var(--ion-color-medium);\n}\n:host ion-toolbar {\n  color: black;\n}\nion-content {\n  --ion-background-color: silver;\n}\n.blank-workout {\n  color: red;\n  text-align: center;\n}\n.workout {\n  background-color: silver;\n  color: black;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlEQUFBO0FBQVI7QUFHSTtFQUNJLFlBQUE7QUFEUjtBQUtBO0VBQ0ksOEJBQUE7QUFGSjtBQUtBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBRko7QUFLQTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG59XHJcblxyXG4uYmxhbmstd29ya291dCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud29ya291dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _workout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../workout.service */
      "./src/app/workout.service.ts");
      /* harmony import */


      var _input_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../input-dialog.service */
      "./src/app/input-dialog.service.ts");

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(toastCtrl, alertController, dataService, inputDialogService, navCtrl) {
          var _this = this;

          _classCallCheck(this, Tab1Page);

          this.toastCtrl = toastCtrl;
          this.alertController = alertController;
          this.dataService = dataService;
          this.inputDialogService = inputDialogService;
          this.navCtrl = navCtrl;
          this.title = 'JUST-LIFT!';
          this.exercises = [];
          dataService.dataChanged$.subscribe(function (dataChanged) {
            _this.loadExercises();
          });
        } // load exercises on start of the app


        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('Loading...');
            this.loadExercises();
          }
        }, {
          key: "loadExercises",
          value: function loadExercises() {
            var _this2 = this;

            this.dataService.getExercises().subscribe(function (exercises) {
              return _this2.exercises = exercises;
            }, function (error) {
              return _this2.errorMessage = error;
            });
          }
        }, {
          key: "removeExercise",
          value: function removeExercise(exercise) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.dataService.removeExercise(exercise);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "editExercise",
          value: function editExercise(exercise, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('Editing ', exercise, index);
                      _context2.next = 3;
                      return this.toastCtrl.create({
                        message: 'Editing ' + exercise.name,
                        duration: 3000,
                        position: 'top'
                      });

                    case 3:
                      toast = _context2.sent;
                      toast.present();
                      this.inputDialogService.showPrompt(exercise, index);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "addExercise",
          value: function addExercise() {
            console.log('Adding Exercise!');
            this.inputDialogService.showPrompt();
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _workout_service__WEBPACK_IMPORTED_MODULE_3__["WorkoutService"]
        }, {
          type: _input_dialog_service__WEBPACK_IMPORTED_MODULE_4__["InputDialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab1.page.scss */
        "./src/app/tab1/tab1.page.scss"))["default"]]
      })], Tab1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map