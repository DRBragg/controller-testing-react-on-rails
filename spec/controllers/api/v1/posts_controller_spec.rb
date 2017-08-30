require "rails_helper"

RSpec.describe Api::V1::PostsController, type: :controller do
  describe "POST#create" do
    ein = Floof.create!(name: "Ein", floofiness: 4, image: "www.google.com")

    it "creates a new post for a floof" do
      floof_post = { body: "See you, space cowboy", floof_id: ein.id}.to_json

      expect{ post(:create, floof_post)}.to change{ Post.count }.by 1
    end
  end
end
