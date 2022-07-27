import {PostModel} from "../../app/model/post.model";

describe('PostModel', () => {

  it('should initialize postModel', () => {
    let model = new PostModel();

    expect(model).toBeTruthy();
  })
})
