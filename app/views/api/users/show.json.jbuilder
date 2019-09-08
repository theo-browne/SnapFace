friendIds = []
@user.friends.each do |friend|
    friendIds.push(friend.id)
end

json.id @user.id
json.name @user.name
json.friendIds friendIds


