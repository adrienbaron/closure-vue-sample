package com.axellience.vuegwtdemo.client.components.counter;

import static jsinterop.base.Js.cast;

import com.axellience.vuegwt.core.client.VueGWT;
import com.axellience.vuegwt.core.client.component.options.VueComponentOptions;
import com.axellience.vuegwt.core.client.jsnative.jsfunctions.JsProvider;
import com.axellience.vuegwt.core.client.jsnative.jsfunctions.JsRunnable;
import com.axellience.vuegwt.core.client.observer.VueGWTObserverManager;
import com.axellience.vuegwt.core.client.tools.VueGWTTools;
import elemental2.core.Function;
import elemental2.dom.DomGlobal;
import javax.annotation.Generated;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.JsPropertyMap;

@Generated(
    value = "com.axellience.vuegwt.processors.component.ComponentExposedTypeGenerator",
    comments = "https://github.com/Axellience/vue-gwt"
)
@JsType(
    namespace = "VueGWTExposedTypesRepository",
    name = "com_axellience_vuegwtdemo_client_components_counter_CounterComponent"
)
public class CounterComponentExposedType extends CounterComponent {

  public boolean vuegwt$hrc_0;

  @SuppressWarnings("unusable-by-js")
  public static CounterComponentFactory getVueComponentFactory() {
    return CounterComponentFactory.get();
  }

  public void vuegwt$created() {
    DomGlobal.console.log("CREATED");
    if (vuegwt$hrc_0) {
      return;
    }
    vuegwt$hrc_0 = true;
    VueGWT.getComponentExposedTypeConstructorFn(CounterComponent.class)
        .initComponentInstanceProperties(this);
  }

  public static String getScopedCss() {
    return null;
  }

  private static Function getRenderFunction() {
    return new Function(
        "with(this){return _c('div',[_c('button',{staticClass:\"btn orange\",on:{\"click\":function($event){exp$0()}}},[_v(\"\\n    Press me!\\n  \")]),_v(\" \"),_c('button',{staticClass:\"btn grey\",on:{\"click\":function($event){exp$1()}}},[_v(\"\\n    Reset\\n  \")]),_v(\" \"),_c('p',[_v(\"\\n    You pressed \"+_s(exp$2())+\" times\\n  \")])])}");
  }

  @JsMethod(name = "render")
  private native void render();

  private static Function[] getStaticRenderFunctions() {
    return new Function[]{};
  }

  public VueComponentOptions<CounterComponent> getOptions() {
    VueComponentOptions<CounterComponent> options = new VueComponentOptions<CounterComponent>();
    JsPropertyMap<Object> proto = ((JsPropertyMap<JsPropertyMap<JsPropertyMap<JsPropertyMap<Object>>>>) new CounterComponentExposedType())
        .get("__proto__").get("constructor").get("prototype");
    DomGlobal.console.log("EXPOSED_TYPE", proto);
    options.setComponentExportedTypePrototype(proto);
    options.initData(true, "counterValue");
    options.addMethods();
    options.addMethod("exp$0", cast((JsRunnable) () -> counterValue++));
    options.addMethod("exp$1", cast((JsRunnable) () -> counterValue = 0));
    options.addMethod("exp$2", cast((JsProvider<String>) () -> VueGWTTools.templateExpressionToString(counterValue)));
    //options.set("created", cast((JsRunnable) this::vuegwt$created));
    options.set("render", cast((JsRunnable) this::render));
    //options.initRenderFunctions(getRenderFunction(), getStaticRenderFunctions());

    return options;
  }
}
