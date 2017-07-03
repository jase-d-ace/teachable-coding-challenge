class StaticPagesController < ApplicationController
  def root
  end

  def search
    @response = Gems.info 'httparty'
    #eventually replace httparty with params[:gem]
    render json: {
      response_data: @response
    }
  end

  def favorites
  end

end
