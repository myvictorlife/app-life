import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.life.mycustomlife',
  appName: 'LIFE',
  webDir: 'www',
  bundledWebRuntime: false,
  ios: {
    cordovaLinkerFlags: ['-ObjC'],
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      showSpinner: true
    }
  }
};

export default config;
