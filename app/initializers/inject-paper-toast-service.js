export function initialize(/* application */) {
  const application = arguments[1] || arguments[0];
  application.inject('route', 'paper-toast', 'service:paper-toast');
  application.inject('controller', 'paper-toast', 'service:paper-toast');
}

export default {
  name: 'inject-paper-toast-service',
  initialize
};
