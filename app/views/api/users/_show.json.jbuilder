
json.id user.id
name = []
user.name.split(" ").each do |part|
    name << part.capitalize
end
json.name name.join(" ")
if user.profile_photo.attached?
    json.profileUrl url_for(user.profile_photo)
else 
    json.profileUrl "https://image.flaticon.com/icons/svg/149/149452.svg"
end 
# json.friends user.friendships