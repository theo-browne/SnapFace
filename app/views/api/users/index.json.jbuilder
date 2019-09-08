@users.each do |user|
    json.set! user.id do
        json.name user.name
        json.id user.id
    end
end