class StaticPagesController < ApplicationController
  def root
  end

  def search
    @response = Gems.info params[:gem]
    render json: {
      response_data: @response
    }
  end

  def favorites
  end

end
