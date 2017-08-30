class Api::V1::FloofsController < ApplicationController
  def show
    floof = Floof.find(params[:id])
    posts = floof.posts.order(created_at: :desc)

    render json: {floof: floof, posts: posts}
  end
end
