require 'byebug'
class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    if params[:southWest]
      @benches = Bench.in_bounds(params)
    end

    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end
end
