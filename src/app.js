import { Vue } from './vue';
import CounterComponentExposedType from './counter-component-exposed-type';

const el = new Vue(new CounterComponentExposedType().getOptions());
