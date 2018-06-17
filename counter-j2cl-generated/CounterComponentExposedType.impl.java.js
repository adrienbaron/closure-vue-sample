/**
 * @fileoverview transpiled from com.axellience.vuegwtdemo.client.components.counter.CounterComponentExposedType.
 *
 * @suppress {const, extraRequire, missingOverride, missingRequire, suspiciousCode, transitionalSuspiciousCodeWarnings, unusedLocalVariables, uselessCode}
 */
goog.module('VueGWTExposedTypesRepository.com_axellience_vuegwtdemo_client_components_counter_CounterComponent$impl');
goog.module.declareLegacyNamespace();


const CounterComponent = goog.require('com.axellience.vuegwtdemo.client.components.counter.CounterComponent$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let VueGWT = goog.forwardDeclare('VueGWT$impl');
let $Overlay = goog.forwardDeclare('com.axellience.vuegwt.core.client.component.ComponentExposedTypeConstructorFn.$Overlay$impl');
let VueComponentOptions_$Overlay = goog.forwardDeclare('com.axellience.vuegwt.core.client.component.options.VueComponentOptions.$Overlay$impl');
let VueGWTTools = goog.forwardDeclare('com.axellience.vuegwt.core.client.tools.VueGWTTools$impl');
let CounterComponentFactory = goog.forwardDeclare('com.axellience.vuegwtdemo.client.components.counter.CounterComponentFactory$impl');
let Function_$Overlay = goog.forwardDeclare('elemental2.core.Function.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');


class CounterComponentExposedType extends CounterComponent {
  /**
   * JsConstructor 'CounterComponentExposedType()'.
   * @public
   */
  constructor() {
    CounterComponentExposedType.$clinit();
    super();
    /** @public {boolean} */
    this.vuegwt$hrc_0 = false;
    this.$ctor__com_axellience_vuegwtdemo_client_components_counter_CounterComponentExposedType__();
  }
  
  /**
   * Initialization from constructor 'CounterComponentExposedType()'.
   * @return {void}
   * @public
   */
  $ctor__com_axellience_vuegwtdemo_client_components_counter_CounterComponentExposedType__() {
    this.$ctor__com_axellience_vuegwtdemo_client_components_counter_CounterComponent__();
  }
  
  /**
   * @return {CounterComponentFactory}
   * @public
   */
  static getVueComponentFactory() {
    CounterComponentExposedType.$clinit();
    return CounterComponentFactory.m_get__();
  }
  
  /**
   * @return {void}
   * @public
   */
  vuegwt$created() {
    window.console.log("CREATED");
    if (this.vuegwt$hrc_0) {
      return;
    }
    this.vuegwt$hrc_0 = true;
    $Overlay.m_initComponentInstanceProperties__com_axellience_vuegwt_core_client_component_ComponentExposedTypeConstructorFn__com_axellience_vuegwt_core_client_component_IsVueComponent(/**@type {Function<CounterComponent>} */ (VueGWT.m_getComponentExposedTypeConstructorFn__java_lang_Class(Class.$get(CounterComponent))), this);
  }
  
  /**
   * @return {?string}
   * @public
   */
  static getScopedCss() {
    CounterComponentExposedType.$clinit();
    return null;
  }
  
  /**
   * @return {Function}
   * @public
   */
  static m_getRenderFunction___$p_com_axellience_vuegwtdemo_client_components_counter_CounterComponentExposedType() {
    CounterComponentExposedType.$clinit();
    return new Function("with(this){return _c('div',[_c('button',{staticClass:\"btn orange\",on:{\"click\":function($event){exp$0()}}},[_v(\"\\n    Press me!\\n  \")]),_v(\" \"),_c('button',{staticClass:\"btn grey\",on:{\"click\":function($event){exp$1()}}},[_v(\"\\n    Reset\\n  \")]),_v(\" \"),_c('p',[_v(\"\\n    You pressed \"+_s(exp$2())+\" times\\n  \")])])}");
  }
  
  /**
   * @return {void}
   * @public
   */
  // native render() 
  
  /**
   * @return {Array<Function>}
   * @public
   */
  static m_getStaticRenderFunctions___$p_com_axellience_vuegwtdemo_client_components_counter_CounterComponentExposedType() {
    CounterComponentExposedType.$clinit();
    return [];
  }
  
  /**
   * @return {VueOptions<CounterComponent>}
   * @public
   */
  getOptions() {
    let options = /**@type {!VueOptions<CounterComponent>} */ (new VueOptions());
    let proto = /**@type {Object<string, *>} */ ($Casts.$to(JsPropertyMap_$Overlay.m_get__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, Object<string, *>>} */ ($Casts.$to(JsPropertyMap_$Overlay.m_get__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, Object<string, Object<string, *>>>} */ ($Casts.$to(JsPropertyMap_$Overlay.m_get__jsinterop_base_JsPropertyMap__java_lang_String((/**@type {Object<string, Object<string, Object<string, Object<string, *>>>>} */ ($Casts.$to(new CounterComponentExposedType(), JsPropertyMap_$Overlay))), "__proto__"), JsPropertyMap_$Overlay)), "constructor"), JsPropertyMap_$Overlay)), "prototype"), JsPropertyMap_$Overlay));
    window.console.log("EXPOSED_TYPE", proto);
    VueComponentOptions_$Overlay.m_setComponentExportedTypePrototype__com_axellience_vuegwt_core_client_component_options_VueComponentOptions__jsinterop_base_JsPropertyMap(options, proto);
    VueComponentOptions_$Overlay.m_initData__com_axellience_vuegwt_core_client_component_options_VueComponentOptions__boolean__arrayOf_java_lang_String(options, true, /**@type {!Array<?string>} */ ($Arrays.$init(["counterValue"], j_l_String)));
    VueComponentOptions_$Overlay.m_addMethods__com_axellience_vuegwt_core_client_component_options_VueComponentOptions__arrayOf_java_lang_String(options, /**@type {!Array<?string>} */ ($Arrays.$init([], j_l_String)));
    VueComponentOptions_$Overlay.m_addMethod__com_axellience_vuegwt_core_client_component_options_VueComponentOptions__java_lang_String__elemental2_core_Function(options, "exp$0", /**@type {Function} */ ($Casts.$to(Js.m_cast__java_lang_Object(/**@type {?function():void} */ ($Casts.$to((() =>{
      this.f_counterValue__com_axellience_vuegwtdemo_client_components_counter_CounterComponent++;
    }), $JavaScriptFunction))), Function_$Overlay)));
    VueComponentOptions_$Overlay.m_addMethod__com_axellience_vuegwt_core_client_component_options_VueComponentOptions__java_lang_String__elemental2_core_Function(options, "exp$1", /**@type {Function} */ ($Casts.$to(Js.m_cast__java_lang_Object(/**@type {?function():void} */ ($Casts.$to((() =>{
      this.f_counterValue__com_axellience_vuegwtdemo_client_components_counter_CounterComponent = 0;
    }), $JavaScriptFunction))), Function_$Overlay)));
    VueComponentOptions_$Overlay.m_addMethod__com_axellience_vuegwt_core_client_component_options_VueComponentOptions__java_lang_String__elemental2_core_Function(options, "exp$2", /**@type {Function} */ ($Casts.$to(Js.m_cast__java_lang_Object(/**@type {?function():?string} */ ($Casts.$to((() =>{
      return VueGWTTools.m_templateExpressionToString__java_lang_Object(this.f_counterValue__com_axellience_vuegwtdemo_client_components_counter_CounterComponent);
    }), $JavaScriptFunction))), Function_$Overlay)));
    JsPropertyMap_$Overlay.m_set__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(options, "render", Js.m_cast__java_lang_Object(/**@type {?function():void} */ ($Casts.$to((() =>{
      this.render();
    }), $JavaScriptFunction))));
    return options;
  }
  
  /**
   * @param {?} instance
   * @return {boolean}
   * @public
   */
  static $isInstance(instance) {
    return instance instanceof CounterComponentExposedType;
  }
  
  /**
   * @param {Function} classConstructor
   * @return {boolean}
   * @public
   */
  static $isAssignableFrom(classConstructor) {
    return $Util.$canCastClass(classConstructor, CounterComponentExposedType);
  }
  
  /**
   * @public
   */
  static $clinit() {
    CounterComponentExposedType.$clinit = function() {};
    VueGWT = goog.module.get('VueGWT$impl');
    $Overlay = goog.module.get('com.axellience.vuegwt.core.client.component.ComponentExposedTypeConstructorFn.$Overlay$impl');
    VueComponentOptions_$Overlay = goog.module.get('com.axellience.vuegwt.core.client.component.options.VueComponentOptions.$Overlay$impl');
    VueGWTTools = goog.module.get('com.axellience.vuegwt.core.client.tools.VueGWTTools$impl');
    CounterComponentFactory = goog.module.get('com.axellience.vuegwtdemo.client.components.counter.CounterComponentFactory$impl');
    Function_$Overlay = goog.module.get('elemental2.core.Function.$Overlay$impl');
    Class = goog.module.get('java.lang.Class$impl');
    j_l_String = goog.module.get('java.lang.String$impl');
    Js = goog.module.get('jsinterop.base.Js$impl');
    JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
    $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
    $Casts = goog.module.get('vmbootstrap.Casts$impl');
    $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
    CounterComponent.$clinit();
  }
  
  
};

$Util.$setClassMetadata(CounterComponentExposedType, $Util.$makeClassName('com.axellience.vuegwtdemo.client.components.counter.CounterComponentExposedType'));




/* NATIVE.JS EPILOG */

const com_axellience_vuegwtdemo_client_components_counter_CounterComponentExposedType = CounterComponentExposedType;

CounterComponentExposedType.prototype.render = function () {
  const that = this;
    return that._c('div', [that._c('button', {
      staticClass: "btn orange", on: {
        "click": function ($event) {
          that.exp$0()
        }
      }
    }, [that._v("\n    Press me!\n  ")]), that._v(" "), that._c('button', {
      staticClass: "btn grey", on: {
        "click": function ($event) {
          that.exp$1()
        }
      }
    }, [that._v("\n    Reset\n  ")]), that._v(" "),
      that._c('p', [that._v("\n    You pressed " + that._s(that.exp$2()) + " times\n  ")])])
};

exports = CounterComponentExposedType; 
//# sourceMappingURL=CounterComponentExposedType.js.map