require "rails_helper"

RSpec.describe Api::V1::FloofsController, type: :controller do
  Floof.create!(name: "Ein", floofiness: 4, image: "http://25.media.tumblr.com/tumblr_m9bx7asW6n1ql03r9o1_500.gif")
  Post.create!(body: "See you, space cowboy", floof: Floof.first)

  describe "GET#show" do
    it "should return information about the requested floof" do

      get :show, id: Floof.first.id
      floof = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(floof.length).to eq 2
      expect(floof["floof"]["name"]).to eq "Ein"
      expect(floof["floof"]["floofiness"]).to eq 4
      expect(floof["floof"]["image"]).to eq "www.google.com"
    end

    it "should return posts about the requested floof" do

      get :show, id: Floof.first.id
      floof = JSON.parse(response.body)

      expect(floof["posts"][0]["body"]).to eq "See you, space cowboy"
    end
  end
end
