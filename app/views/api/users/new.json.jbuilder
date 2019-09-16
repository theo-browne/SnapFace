json.id @user.id
# json.name @user.name
name = []
    @user.name.split(" ").each do |part|
            name << part.capitalize
    end
json.name name.join(" ")
json.profileUrl "https://image.flaticon.com/icons/svg/149/149452.svg"
