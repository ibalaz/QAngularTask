import {GeoLocationModel} from "../../app/model/geoLocation.model";

describe('GeoLocationModel', () => {

  it('should initialize GeoLocationModel', () => {
    let model = new GeoLocationModel();

    expect(model).toBeTruthy();
  })
});
