import {CompanyModel} from "../../app/model/company.model";

describe('CompanyModel', () => {

  it('should initialize companyModel', () => {
    let model = new CompanyModel();

    expect(model).toBeTruthy();
  })
})
