import { registerWebPlugin, WebPlugin } from '@capacitor/core';
import { MicrophonePlugin } from './definitions';

export class MicrophoneWeb extends WebPlugin implements MicrophonePlugin {
  constructor() {
    super({
      name: 'Microphone',
      platforms: ['web'],
    });
  }

  async setInputGain(options: { value: number }): Promise<{ value: number }> {
    console.log('ECHO', options);
    return options;
  }
}

const Microphone = new MicrophoneWeb();

export { Microphone };

registerWebPlugin(Microphone);
