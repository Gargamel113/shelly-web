export interface Price {
  PriceArea: string,
  TimeStamp: string,
  TimeStampDay: string,
  TimeStampHour: string,
  Unit: string,
  Value: string
}

export interface Switch {
    id: number;
    source: string;
    output: boolean;
    apower: number;
    voltage: number;
    current: number;
    pf: number;
    aenergy: Energy;
    temperature: Temperature;
}

export interface Energy {
  total: number;
  by_minute: number[];
  minute_ts: number;
}

export interface Temperature {
  tC: number;
  tF: number;
}