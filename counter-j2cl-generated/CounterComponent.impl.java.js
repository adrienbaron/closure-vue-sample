/**
 * @fileoverview transpiled from com.axellience.vuegwtdemo.client.components.counter.CounterComponentExposedType.
 *
 * @suppress {const, extraRequire, missingOverride, missingRequire, suspiciousCode, transitionalSuspiciousCodeWarnings, unusedLocalVariables, uselessCode}
 */
goog.module('com.axellience.vuegwtdemo.client.components.counter.CounterComponent$impl');


const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('com.axellience.vuegwt.core.client.component.IsVueComponent.$Overlay$impl');


/**
 * @implements {Object}
  */
class CounterComponent extends j_l_Object {
  /**
   * @private
   */
  constructor() {
    super();
    /** @public {number} */
    this.f_counterValue__com_axellience_vuegwtdemo_client_components_counter_CounterComponent = 0;
  }
  
  /**
   * Factory method corresponding to constructor 'CounterComponentExposedType()'.
   * @return {!CounterComponent}
   * @public
   */
  static $create__() {
    CounterComponent.$clinit();
    let $instance = new CounterComponent();
    $instance.$ctor__com_axellience_vuegwtdemo_client_components_counter_CounterComponent__();
    return $instance;
  }
  
  /**
   * Initialization from constructor 'CounterComponentExposedType()'.
   * @return {void}
   * @public
   */
  $ctor__com_axellience_vuegwtdemo_client_components_counter_CounterComponent__() {
    this.$ctor__java_lang_Object__();
    this.$init__com_axellience_vuegwtdemo_client_components_counter_CounterComponent();
  }
  
  /**
   * @return {void}
   * @private
   */
  $init__com_axellience_vuegwtdemo_client_components_counter_CounterComponent() {
    this.f_counterValue__com_axellience_vuegwtdemo_client_components_counter_CounterComponent = 0;
  }
  
  /**
   * @param {?} instance
   * @return {boolean}
   * @public
   */
  static $isInstance(instance) {
    return instance instanceof CounterComponent;
  }
  
  /**
   * @param {Function} classConstructor
   * @return {boolean}
   * @public
   */
  static $isAssignableFrom(classConstructor) {
    return $Util.$canCastClass(classConstructor, CounterComponent);
  }
  
  /**
   * @public
   */
  static $clinit() {
    CounterComponent.$clinit = function() {};
    j_l_Object.$clinit();
  }
  
  
};

$Util.$setClassMetadata(CounterComponent, $Util.$makeClassName('com.axellience.vuegwtdemo.client.components.counter.CounterComponent'));




exports = CounterComponent; 
//# sourceMappingURL=CounterComponentExposedType.js.map