import { MyElement } from "./sayHello";

export const findElementById = (
  id: string,
  startElement: HTMLElement = document.body
): HTMLElement | null => {
  if (startElement.id === id) {
    return startElement;
  }

  if (startElement.shadowRoot) {
    const elementInShadowRoot = startElement.shadowRoot.getElementById(id);
    if (elementInShadowRoot) {
      return elementInShadowRoot as HTMLElement;
    }
  }

  for (let i = 0; i < startElement.children.length; i++) {
    const childElement = startElement.children[i];
    if (childElement instanceof HTMLElement) {
      const foundElement = findElementById(id, childElement);
      if (foundElement) {
        return foundElement;
      }
    }
  }

  return null;
};

describe("test", () => {
  let element: MyElement;
  beforeEach(() => {
    element = document.createElement("my-element") as MyElement;
    document.body.appendChild(element);
  });

  test("is defined", () => {
    expect(element).toBeDefined();
    expect(element).toBeInstanceOf(MyElement);
  });

  it("should trigger willUpdate when properties change", async () => {
    // Create a spy to track the willUpdate method

    // Query the button element
    const button = findElementById("btn", element) as HTMLButtonElement;

    // Simulate a button click
    button.click();

    // Wait for the next microtask to ensure the update has been processed by Lit
    await Promise.resolve();

    jest.runAllTimers();
    expect(element.willUpdateCount).toBe(1);
  });
});
