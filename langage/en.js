import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zn from './zh';
import en from './en';

Vue.use(V18n);

const messages = {
  zh,
  en
}

const i18n = new VueI18n({
  messages,
  locale: 'zh',
})

export default i18n;


<p>{$t('table.username')}</p>
<div>{$t('username')}</div>