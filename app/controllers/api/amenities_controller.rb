class Api::AmenitiesController < ApplicationController

  def index
    @amenities = Amenity.all
    render json: @amenities
  end

  def destroy
    @amenity = Amenity.find params[:id]
    @amenity.destroy

  end

end