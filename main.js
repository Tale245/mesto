(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=function(e){return e.some((function(e){return!e.validity.valid}))},(r="_hasInvalidInput")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._object=e,this._formElement=n}var n,r;return n=t,(r=[{key:"_showInputError",value:function(e,t){var n=document.querySelector(".".concat(e.id,"-error"));e.classList.add(this._object.inputErrorClass),n.textContent=t,n.classList.add(this._object.errorClass)}},{key:"_hideInputError",value:function(e){var t=document.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._object.inputErrorClass),t.textContent="",t.classList.remove(this._object.errorClass)}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._object.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._object.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"resetValidator",value:function(){var e=this;this.toggleButtonState(this._inputList,this._buttonElement),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._object.inputSelector)),this._buttonElement=this._formElement.querySelector(this._object.submitButtonSelector),this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("sumbit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.userName,r=t.infoAboutUser;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._infoAboutUser=document.querySelector(r)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,infoAboutUser:this._infoAboutUser.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._infoAboutUser.textContent=t}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()})),this._popup.querySelector(".popup__overlay").addEventListener("click",(function(){e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function p(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupSrc=t._popup.querySelector(".popup__image"),t._popupParagraph=t._popup.querySelector(".popup__paragraph"),t}return t=u,(n=[{key:"open",value:function(e,t){c(f(u.prototype),"open",this).call(this),this._popupSrc.src=t,this._popupSrc.alt=e,this._popupParagraph.textContent=e}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i);function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardName=t,this._cardLink=n,this._templateSelector=r,this._handleCardClick=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this.elementButton=this._element.querySelector(".element__button"),this.elementButton.addEventListener("click",(function(){e._handleLikeClick()})),this._element.querySelector(".element__trash-button").addEventListener("click",(function(){e._handleTrashClick()})),this.cardImage.addEventListener("click",(function(){e._handleOpenImagePopupClick()}))}},{key:"_handleLikeClick",value:function(){this.elementButton.classList.toggle("element__button_active")}},{key:"_handleTrashClick",value:function(){this._element.remove()}},{key:"_handleOpenImagePopupClick",value:function(){this._handleCardClick(this._cardName,this._cardLink)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this.cardImage=this._element.querySelector(".element__img"),this._setEventListeners(),this.cardImage.src=this._cardLink,this.cardImage.alt=this._cardName,this._element.querySelector(".element__title").textContent=this._cardName,this._element}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._containerSelector=document.querySelector(n)}var t,n;return t=e,(n=[{key:"rendererItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function E(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e){var t,n=e.popupSelector,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._popup=document.querySelector(n),t._submitForm=r,t._popupForm=t._popup.querySelector(".popup__form"),t._inputList=t._popup.querySelectorAll(".popup__field"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;w(S(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){w(S(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i),O=document.querySelector(".profile__edit-button"),x=document.querySelector(".popup_add-item"),L=document.querySelector(".popup_edit-info").querySelector(".popup__form_info_edit"),C=document.querySelector(".popup__field_name"),q=document.querySelector(".popup__field_job"),P=document.querySelector(".profile__add-button"),B=x.querySelector(".popup__form_add-image"),I=(x.querySelector(".popup__field_image"),x.querySelector(".popup__field_title-image"),document.querySelector(".popup_image-scale"),document.querySelector(".profile__title"),document.querySelector(".profile__paragraph"),{inputSelector:".popup__field",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"button__disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"}),R=new t(I,L),M=new t(I,B);R.enableValidation(),M.enableValidation();var V=new r({userName:".profile__title",infoAboutUser:".profile__paragraph"}),D=new h(".popup_image-scale");D.setEventListeners();var H=function(e,t){D.open(e,t)},T=function(e,t){return new d(e,t,"#template",H).generateCard()},A=new m({items:[{name:"GTR",link:"https://images.unsplash.com/photo-1595527137281-3cb1fd8968ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Индонезия",link:"https://images.unsplash.com/photo-1648426230909-e99ce0a4a133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"},{name:"Лос-Анджелес",link:"https://images.unsplash.com/photo-1646285105405-8f1c6cbb6d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Cafe Racer",link:"https://images.unsplash.com/photo-1645023925869-a5e4b5ebdbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80"},{name:"70s",link:"https://images.unsplash.com/photo-1581956214240-5b4e182889ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Винес-Бич",link:"https://images.unsplash.com/photo-1584305161484-a959768b7614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}],renderer:function(e){T(e.name,e.link),A.addItem(T(e.name,e.link))}},".elements");A.rendererItems();var G=new j({popupSelector:".popup_edit-info",submitForm:function(e){V.setUserInfo(e.name,e.job)}}),N=new j({popupSelector:".popup_add-item",submitForm:function(e){A.addItem(T(e.imageTitle,e.imageLink))}});G.setEventListeners(),N.setEventListeners(),O.addEventListener("click",(function(){var e=V.getUserInfo();C.value=e.userName,q.value=e.infoAboutUser,R.resetValidator(),G.open()})),P.addEventListener("click",(function(){M.resetValidator(),N.open()}))})();