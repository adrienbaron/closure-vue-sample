/**
 * @fileoverview transpiled from com.axellience.vuegwtdemo.client.components.counter.CounterComponentFactory.
 *
 * @suppress {const, extraRequire, missingOverride, missingRequire, suspiciousCode, transitionalSuspiciousCodeWarnings, unusedLocalVariables, uselessCode}
 */
goog.module('com.axellience.vuegwtdemo.client.components.counter.CounterComponentFactory$impl');


const VueComponentFactory = goog.require('com.axellience.vuegwt.core.client.vue.VueComponentFactory$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let CounterComponentExposedType = goog.forwardDeclare('VueGWTExposedTypesRepository.com_axellience_vuegwtdemo_client_components_counter_CounterComponent$impl');
let $Overlay = goog.forwardDeclare('com.axellience.vuegwt.core.client.Vue.$Overlay$impl');
let VueJsConstructor_$Overlay = goog.forwardDeclare('com.axellience.vuegwt.core.client.vue.VueJsConstructor.$Overlay$impl');
let CounterComponent = goog.forwardDeclare('com.axellience.vuegwtdemo.client.components.counter.CounterComponent$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');


/**
 * @extends {VueComponentFactory<CounterComponent>}
  */
class CounterComponentFactory extends VueComponentFactory {
  /**
   * @private
   */
  constructor() {
    super();
  }
  
  /**
   * Factory method corresponding to constructor 'CounterComponentFactory()'.
   * @return {!CounterComponentFactory}
   * @public
   */
  static $create__() {
    CounterComponentFactory.$clinit();
    let $instance = new CounterComponentFactory();
    $instance.$ctor__com_axellience_vuegwtdemo_client_components_counter_CounterComponentFactory__();
    return $instance;
  }
  
  /**
   * Initialization from constructor 'CounterComponentFactory()'.
   * @return {void}
   * @public
   */
  $ctor__com_axellience_vuegwtdemo_client_components_counter_CounterComponentFactory__() {
    this.$ctor__com_axellience_vuegwt_core_client_vue_VueComponentFactory__();
  }
  
  /**
   * @return {void}
   * @public
   */
  m_init__() {
    let componentOptions = new CounterComponentExposedType().getOptions();
    this.f_jsConstructor__com_axellience_vuegwt_core_client_vue_VueComponentFactory = /**@type {Function<CounterComponent>} */ ($Overlay.m_extendJavaComponent__com_axellience_vuegwt_core_client_component_options_VueComponentOptions(componentOptions));
  }
  
  /**
   * @return {CounterComponentFactory}
   * @public
   */
  static m_get__() {
    CounterComponentFactory.$clinit();
    if ($Equality.$same(CounterComponentFactory.$f_INSTANCE__com_axellience_vuegwtdemo_client_components_counter_CounterComponentFactory_, null)) {
      CounterComponentFactory.$f_INSTANCE__com_axellience_vuegwtdemo_client_components_counter_CounterComponentFactory_ = CounterComponentFactory.$create__();
      CounterComponentFactory.$f_INSTANCE__com_axellience_vuegwtdemo_client_components_counter_CounterComponentFactory_.m_injectComponentCss__java_lang_String(CounterComponentExposedType.getScopedCss());
      CounterComponentFactory.$f_INSTANCE__com_axellience_vuegwtdemo_client_components_counter_CounterComponentFactory_.m_init__();
    }
    return CounterComponentFactory.$f_INSTANCE__com_axellience_vuegwtdemo_client_components_counter_CounterComponentFactory_;
  }
  
  /**
   * @return {CounterComponentFactory}
   * @public
   */
  static get f_INSTANCE__com_axellience_vuegwtdemo_client_components_counter_CounterComponentFactory_() {
    return (CounterComponentFactory.$clinit(), CounterComponentFactory.$f_INSTANCE__com_axellience_vuegwtdemo_client_components_counter_CounterComponentFactory_);
  }
  
  /**
   * @param {CounterComponentFactory} value
   * @return {void}
   * @public
   */
  static set f_INSTANCE__com_axellience_vuegwtdemo_client_components_counter_CounterComponentFactory_(value) {
    (CounterComponentFactory.$clinit(), CounterComponentFactory.$f_INSTANCE__com_axellience_vuegwtdemo_client_components_counter_CounterComponentFactory_ = value);
  }
  
  /**
   * @param {?} instance
   * @return {boolean}
   * @public
   */
  static $isInstance(instance) {
    return instance instanceof CounterComponentFactory;
  }
  
  /**
   * @param {Function} classConstructor
   * @return {boolean}
   * @public
   */
  static $isAssignableFrom(classConstructor) {
    return $Util.$canCastClass(classConstructor, CounterComponentFactory);
  }
  
  /**
   * @public
   */
  static $clinit() {
    CounterComponentFactory.$clinit = function() {};
    CounterComponentExposedType = goog.module.get('VueGWTExposedTypesRepository.com_axellience_vuegwtdemo_client_components_counter_CounterComponent$impl');
    $Overlay = goog.module.get('com.axellience.vuegwt.core.client.Vue.$Overlay$impl');
    $Equality = goog.module.get('nativebootstrap.Equality$impl');
    VueComponentFactory.$clinit();
  }
  
  
};

$Util.$setClassMetadata(CounterComponentFactory, $Util.$makeClassName('com.axellience.vuegwtdemo.client.components.counter.CounterComponentFactory'));


/** @private {CounterComponentFactory} */
CounterComponentFactory.$f_INSTANCE__com_axellience_vuegwtdemo_client_components_counter_CounterComponentFactory_;




exports = CounterComponentFactory; 
//# sourceMappingURL=CounterComponentFactory.js.map