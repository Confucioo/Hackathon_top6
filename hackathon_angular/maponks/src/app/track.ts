export interface Track {
  tstamp: number;
  seascape: Seascape[];
}

export interface Seascape {
  cog: string,
  imo: number | null,
  lat: string,
  lon: string,
  nav: string | null,
  sog: string,
  head: string | null,
  mmsi: number,
  tstamp: number,
  vessel_name: string,
  vesseltype_icon: number
}
