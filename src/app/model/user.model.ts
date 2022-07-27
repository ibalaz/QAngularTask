import {AddressModel} from "./address.model.";
import {CompanyModel} from "./company.model";

export class UserModel {
  id = '';
  name = '';
  username = '';
  email = '';
  address: AddressModel = new AddressModel();
  phone = '';
  website = '';
  company: CompanyModel = new CompanyModel();

}
