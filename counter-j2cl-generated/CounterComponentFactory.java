package com.axellience.vuegwtdemo.client.components.counter;

import com.axellience.vuegwt.core.client.Vue;
import com.axellience.vuegwt.core.client.component.options.VueComponentOptions;
import com.axellience.vuegwt.core.client.vue.VueComponentFactory;
import javax.annotation.Generated;
import javax.inject.Inject;
import javax.inject.Singleton;

/**
 * VueComponentFactory for Component {@link com.axellience.vuegwtdemo.client.components.counter.CounterComponent} */
@Singleton
@Generated(
    value = "com.axellience.vuegwt.processors.component.factory.VueComponentFactoryGenerator",
    date = "Thu Jun 14 21:50:47 CEST 2018",
    comments = "https://github.com/Axellience/vue-gwt"
)
public final class CounterComponentFactory extends VueComponentFactory<CounterComponent> {
  private static CounterComponentFactory INSTANCE;

  @Inject
  public CounterComponentFactory() {
  }

  @Inject
  protected void init() {
    VueComponentOptions<CounterComponent> componentOptions = new CounterComponentExposedType().getOptions();
    jsConstructor = Vue.extendJavaComponent(componentOptions);
  }

  public static CounterComponentFactory get() {
    if (INSTANCE == null) {
      INSTANCE = new CounterComponentFactory();
      INSTANCE.injectComponentCss(CounterComponentExposedType.getScopedCss());
      INSTANCE.init();}
    return INSTANCE;
  }
}
