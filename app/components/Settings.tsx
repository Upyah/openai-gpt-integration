'use client';

import { useState } from 'react';
import Image from 'next/image';
import { OpenAIConfig, defaultConfig, defaultSliderConfigs } from '../types/types';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  config: OpenAIConfig;
  onConfigChange: (config: OpenAIConfig) => void;
}

const Settings = ({ isOpen, onClose, config, onConfigChange }: SettingsProps) => {
  const [localConfig, setLocalConfig] = useState<OpenAIConfig>(config);

  const handleSliderChange = (key: keyof OpenAIConfig, value: number) => {
    const newConfig = { ...localConfig, [key]: value };
    setLocalConfig(newConfig);
    onConfigChange(newConfig);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-[#0a1825] shadow-lg p-4 transform transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Settings</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-6">
        {Object.entries(defaultSliderConfigs).map(([key, config]) => (
          <div key={key} className="space-y-2">
            <label className="text-sm text-gray-300">{config.label}</label>
            <input
              type="range"
              min={config.min}
              max={config.max}
              step={config.step}
              value={localConfig[key as keyof OpenAIConfig] as number}
              onChange={(e) =>
                handleSliderChange(
                  key as keyof OpenAIConfig,
                  parseFloat(e.target.value)
                )
              }
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>{config.min}</span>
              <span>{localConfig[key as keyof OpenAIConfig]}</span>
              <span>{config.max}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;