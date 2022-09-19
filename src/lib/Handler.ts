import EventEmitter from './event-emitter/event';
import keyboard from './keyboard/index';

export default class Handler extends EventEmitter {
  public keyboard = keyboard;
  constructor(storage, painter, proxy, painterRoot) {
    super();
  }
}
