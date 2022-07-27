import {CommentsModel} from "../../app/model/comments.model";

describe('CommentsModel',() => {
  it('should initialize commentsModel', () => {
    let model = new CommentsModel();

    expect(model).toBeTruthy();
  })
})
