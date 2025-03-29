export enum OpenAIModel {
  GPT4 = "gpt-4",
  GPT4_32K = "gpt-4-32k",
  GPT4_TURBO = "gpt-4-1106-preview",
  GPT4_VISION = "gpt-4-vision-preview",
  GPT35_TURBO = "gpt-3.5-turbo",
  GPT35_TURBO_16K = "gpt-3.5-turbo-16k"
}

export interface OpenAIConfig {
  model: OpenAIModel;
  temperature: number; // Range: 0-2, UI: Slider
  max_tokens: number; // Range: 1-32000, UI: Slider
  top_p: number; // Range: 0-1, UI: Slider
  frequency_penalty: number; // Range: -2.0-2.0, UI: Slider
  presence_penalty: number; // Range: -2.0-2.0, UI: Slider
  stop?: string[]; // UI: Input array
  n?: number; // Range: 1-10, UI: Number input
  stream?: boolean; // UI: Toggle
  logit_bias?: Record<string, number>; // UI: Key-value input
  user?: string; // UI: Text input
}

export interface UIConfig {
  sidebarOpen: boolean;
  activeSection: string;
}

export interface SliderConfig {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  label: string;
}

export const defaultSliderConfigs: Record<keyof Pick<OpenAIConfig, 'temperature' | 'max_tokens' | 'top_p' | 'frequency_penalty' | 'presence_penalty'>, SliderConfig> = {
  temperature: {
    min: 0,
    max: 2,
    step: 0.1,
    defaultValue: 0.7,
    label: 'Temperature'
  },
  max_tokens: {
    min: 1,
    max: 32000,
    step: 1,
    defaultValue: 2048,
    label: 'Maximum Length'
  },
  top_p: {
    min: 0,
    max: 1,
    step: 0.05,
    defaultValue: 1,
    label: 'Top P'
  },
  frequency_penalty: {
    min: -2,
    max: 2,
    step: 0.1,
    defaultValue: 0,
    label: 'Frequency Penalty'
  },
  presence_penalty: {
    min: -2,
    max: 2,
    step: 0.1,
    defaultValue: 0,
    label: 'Presence Penalty'
  }
};

export const defaultConfig: OpenAIConfig = {
  model: OpenAIModel.GPT35_TURBO,
  temperature: defaultSliderConfigs.temperature.defaultValue,
  max_tokens: defaultSliderConfigs.max_tokens.defaultValue,
  top_p: defaultSliderConfigs.top_p.defaultValue,
  frequency_penalty: defaultSliderConfigs.frequency_penalty.defaultValue,
  presence_penalty: defaultSliderConfigs.presence_penalty.defaultValue,
  stream: true
};