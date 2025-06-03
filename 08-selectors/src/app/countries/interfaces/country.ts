export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export interface SmallCountry {
  name: string
  cca3: string;
  borders: string[];
}

export interface Country {
  name:         Name;
  cca3:         string;
  status:       Status;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  languages:    Languages;
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  translations: { [key: string]: Translation };
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  capitalInfo:  CapitalInfo;
  postalCode:   PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currency {
  symbol: string;
  name:   string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  ukr?: string;
  deu?: string;
  spa?: string;
  cat?: string;
  eus?: string;
  glc?: string;
  swe?: string;
  bul?: string;
  sqi?: string;
  ron?: string;
  eng?: string;
  fra?: string;
  nrf?: string;
  rus?: string;
  slv?: string;
  ita?: string;
  dan?: string;
  hrv?: string;
  isl?: string;
  fin?: string;
  fao?: string;
  cnr?: string;
  srp?: string;
  ell?: string;
  tur?: string;
  slk?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  nld?: string;
  gsw?: string;
  roh?: string;
  hun?: string;
  lat?: string;
  est?: string;
  nor?: string;
  glv?: string;
  bel?: string;
  pol?: string;
  ces?: string;
  mlt?: string;
  gle?: string;
  nfr?: string;
  lav?: string;
  lit?: string;
  por?: string;
  ltz?: string;
  bos?: string;
  mkd?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: null | string;
  regex:  null | string;
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
