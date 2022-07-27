import {UserModel} from "../../app/model/user.model";

describe('UserModel', () => {

  it('should initialize userModel', () => {
    let model = new UserModel();

    expect(model).toBeTruthy();
  })
})
