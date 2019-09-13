json.id @user.id
json.name @user.name
if @user.profile_photo.attached?
    json.profileUrl url_for(@user.profile_photo) 
else 
    json.profileUrl url_for("https://image.flaticon.com/icons/svg/149/149452.svg")
end