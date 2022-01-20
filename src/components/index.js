import Notifications from '@/components/Notifications.vue';
import { events } from './events';

const Notify = {
  install(Vue, args) {
    if (this.installed) return;

    this.installed = true;
    this.params = args;

    Vue.component(args.componentName || 'notifications', Notifications);

    const notify = (params) => {
      if (typeof params === 'string') params = { title: '', text: params };

      if (typeof params === 'object') events.$emit('show', params);
    };

    notify.close = (id) => {
      events.$emit('close', id);
    };

    const name = args.name || 'notify';

    Vue.prototype[`$${name}`] = notify;
    Vue[name] = notify;
  },

};

export default Notify;
