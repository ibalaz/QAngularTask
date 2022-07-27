import {GeoLocationModel} from "./geoLocation.model";

export class AddressModel {
  street = '';
  suite = '';
  city = '';
  zipcode = '';
  geo: GeoLocationModel = new GeoLocationModel();
}
