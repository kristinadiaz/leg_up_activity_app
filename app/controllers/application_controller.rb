class ApplicationController < ActionController::API
  # include ActionController::Cookies

  # make key something long and indecipherable and store it in an environment variable somewhere so it isnt checked-in. That way its not attached. 
  def encode_token(payload)
    JWT.encode(payload, 'my_secret_key')
  end



end
