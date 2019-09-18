
@messages.each do |message|
    json.set! message.id do 
        json.id message.id
        json.createdAt message.created_at
        json.content message.content
        json.roomId message.room_id
        json.userId message.user.id
        json.author message.user.name
    end
end