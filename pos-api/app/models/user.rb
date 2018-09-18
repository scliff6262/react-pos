class User < ApplicationRecord
<<<<<<< HEAD
  has_secure_password
=======
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
>>>>>>> 6da0e3c06ef1cae93427f61a1f11c47d1f6e89d1
end
