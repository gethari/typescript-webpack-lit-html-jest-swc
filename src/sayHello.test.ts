import { MyElement } from './sayHello';

describe('test', () => {
  let element: MyElement;
  beforeEach(() => {
    element = document.createElement('my-element') as MyElement;
  })

  test('is defined', () => {
    expect(element).toBeDefined();
    expect(element).toBeInstanceOf(MyElement);
  });

  it('should increment count when button is clicked', () => {
    // Simulate button click
    element['_onClick']();

    // Check if count has been incremented
    expect(element.count).toBe(1);
  });

  it('should trigger willUpdate when properties change', async () => {
    // Mock any setup you need for your LitElement
    // For example, if you have properties or attributes, you can set them up here

    // Create a spy to track the willUpdate method
    const willUpdateSpy = jest.spyOn(element, 'willUpdate');

    // Change a property of the element
    element.count = 5;
    await element.updateComplete;
    // Assert that the willUpdate method was called
    expect(willUpdateSpy).toHaveBeenCalled();

  });

  // it('should receive at least more than one value in _changedProperties', async () => {
  //   // Mocking the console.log method to spy on its usage
  //   //const consoleSpy = jest.spyOn(element, 'willUpdate').mockImplementation();


  //   // Call the function with an empty map
  //   element.count = element.count + 1;
  //   await element.updateComplete;
  //   expect(element['willUpdate']).toHaveBeenCalled();
  //   // Assert that console.log was called with the expected number of times
  //   // In this case, we expect it to be called at least once with an argument that is not empty
  //   // expect(consoleSpy).toHaveBeenCalled();
  //   // expect(consoleSpy.mock.calls.some(call => call[0].size > 1)).toBe(true);

  //   // // Restore the original console.log method
  //   // consoleSpy.mockRestore();
  // });
});
