import {AddressModel} from "../../app/model/address.model.";

describe('AddressModel', () => {

  it('should initialize addressModel', () => {
    let model = new AddressModel();

    expect(model).toBeTruthy()
  })
})
