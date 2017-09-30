class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook, :twitter, :linkedin, :google_oauth2]

 def name
   [first_name,last_name].join(" ")
 end
 # app/models/user.rb

def self.new_with_session(params, session)
  super.tap do |user|
    if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
      user.email = data["email"] if user.email.blank?
    end

    if data = session["devise.twitter_data"] && session["devise.twitter_data"]["extra"]["raw_info"]
      user.email = data["email"] if user.email.blank?
    end
    if data = session["devise.linkedin_data"] && session["devise.linkedin_data"]["extra"]["raw_info"]
      user.email = data["email"] if user.email.blank?
    end
     if data = session["devise.google_oauth2_data"] && session["devise.google_oauth2_data"]["extra"]["raw_info"]
      user.email = data["email"] if user.email.blank?
    end

  end
end


def self.from_omniauth(auth)
  where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
  	if auth.provider != "twitter"
   user.email = auth.info.email
   end 
    user.password = Devise.friendly_token[0,20]
    if auth.provider != "google_oauth2"
    user.name = auth.info.name   # assuming the user model has a name
    end
    user.image = auth.info.image # assuming the user model has an image
  end
end
def email_required?
  false
end
      

end
