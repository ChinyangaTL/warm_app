import {device, element, by, waitFor} from 'detox';

// Be careful with codepush, the Update Alert could be displayed.

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome text', async () => {
    await waitFor(element(by.text('WELCOME')))
      .toBeVisible()
      .withTimeout(4000);
  });
});
