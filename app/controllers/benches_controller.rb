class BenchesController < ApplicationController
  def index
    render :index
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      redirect_to bench_url(@bench)
    else
      render :index
    end
  end
end
