/**
 * Use this function to pause an expensive calculation and continue it during the next tick.
 * See example usage [here](https://gist.github.com/IntelOrca/a9f90c930d8fa2e04877281be5f8481b)
 *
 */
export function nextTick() {
  return new Promise<void>((resolve, reject) => {
    try {
      const subscription = context.subscribe("interval.tick", () => {
        try {
          subscription.dispose();
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}
