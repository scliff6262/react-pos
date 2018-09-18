class ApplicationController < ActionController::API

  def create_token(payload)
    token = JWT.encode(payload, "secret")
  end

  def current_user
    #decode token and find its payload user_id
  end

end
