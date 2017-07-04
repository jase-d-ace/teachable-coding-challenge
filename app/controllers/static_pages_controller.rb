class StaticPagesController < ApplicationController
  def root
  end

  def search
    @response = Gems.info params[:gem]
    puts @response["dependencies"]
    @dependencies_array = []
    @response["dependencies"].each_key do |key|
      @response["dependencies"]["#{key}"].each do |dependency|
        @dependencies_array << dependency["name"]
      end
    end
    render json: {
      response_data: @response,
      dependencies: @dependencies_array
    }
  end

  def favorites
  end

end
