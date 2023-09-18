type TemperatureUnit = 'celsius' | 'fahrenheit';

export const convertKelvin = (kelvin: number, unit: TemperatureUnit) => {
  let result: number;

  switch (unit) {
    case 'celsius':
      result = kelvin - 273.15;
      break;
    case 'fahrenheit':
      result = ((kelvin - 273.15) * 9) / 5 + 32;
      break;
    default:
      throw new Error(`Unsupported temperature unit: ${unit}`);
  }

  return Math.round(result);
};
