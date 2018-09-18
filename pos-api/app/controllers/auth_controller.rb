class AuthController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      token = create_token({ id: @user.id, admin: @user.admin })
      render json: { user: @user, jwt: token}
    else
      render json: { user: false }
    end
  end

  def destroy
  end
end
