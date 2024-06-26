export interface weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface dataList {
  base: string;
  clouds: {all: number};
  cod: number;
  coord: {lat: number; lon: number};
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: weather[];
  wind: {deg: number; gust: number; speed: number};
}
