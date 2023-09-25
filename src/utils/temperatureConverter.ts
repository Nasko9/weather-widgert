type TemperatureUnit = 'Celsius' | 'Fahrenheit';

export const convertKelvin = (kelvin: number, unit: TemperatureUnit) => {
  let result: number;
  let symbol: any;

  switch (unit) {
    case 'Celsius':
      result = kelvin - 273.15;
      symbol = '°C';
      break;
    case 'Fahrenheit':
      result = ((kelvin - 273.15) * 9) / 5 + 32;
      symbol = '°F';
      break;
    default:
      throw new Error(`Unsupported temperature unit: ${unit}`);
  }

  return `${Math.round(result)}${symbol}`;
};
