import { MyElement } from './sayHello';

describe('test', () => {
  test('is defined', () => {
    let el = document.createElement('my-element') as MyElement;
    expect(el).toBeDefined();
    expect(el).toBeInstanceOf(MyElement);
  });
});
