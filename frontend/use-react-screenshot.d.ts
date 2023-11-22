declare module 'use-react-screenshot' {
    export type UseScreenshotResult = [
      string, // The screenshot image data URL
      (ref: HTMLElement | null) => Promise<string> // Function to capture a screenshot
    ];
  
    export const useScreenshot: () => UseScreenshotResult;
  }
  