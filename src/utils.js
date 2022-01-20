export const NotificationType = {
  DANGER: 'danger',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
};

export const VerticalPosition = {
  TOP: 'top',
  BOTTOM: 'bottom',
  CENTER: 'center',
};

export const HorizontalPosition = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
};

export const AnimationType = {
  CSS: 'css',
};

export const DEFAULTS = {
  animationType: AnimationType.CSS,
};

export function Timer(callback, delay, notify) {
  let start, remaining = delay;

  this.pause = () => {
    clearTimeout(notify.timer);
    remaining -= Date.now() - start;
  };

  this.resume = () => {
    start = Date.now();
    clearTimeout(notify.timer);
    notify.timer = setTimeout(callback, remaining);
  };

  this.resume();
}
