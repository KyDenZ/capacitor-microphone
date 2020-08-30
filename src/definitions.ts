declare module '@capacitor/core' {
  interface PluginRegistry {
    Microphone: MicrophonePlugin;
  }
}

export interface MicrophonePlugin {
  setInputGain(options: { value: number }): Promise<{ value: number }>;
}
