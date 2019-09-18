class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "RoomChannel_#{params[:room_id]}"
    
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    
    message = Message.create!(content: data['message']['message'], user_id: data['message']['user_id'], room_id: data['message']['room_id'] )
    
    socket = { message: {content: message.content, userId: message.user_id, roomId: message.room_id, createdAt: message.created_at, id: message.id}}
    
    # RoomChannel.broadcast_to("#{data['message']['room_id']}", socket)
    ActionCable.server.broadcast "RoomChannel_#{data['message']['room_id']}", socket
    # Message.create(content: data['message'])
    
  end
end
