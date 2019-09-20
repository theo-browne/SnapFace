# README

## About the Project

This website is a Facebook inspired social media platform. The entire site is based on the interactions between users and the content they generate.

* Friendships

    Friending other users is the first step to interacting with the site as otherwise there are limited was to interact with limited until users do so. Users can find friends either through the search feature or through the suggested friends bar. Friending is also the basis of messaging as users the ability to message all of their friends using the sites messaging feature.
    ![alt text](https://user-images.githubusercontent.com/47790228/65351431-f39c5200-db9c-11e9-9e90-65fa0f9e826a.png "Logo Title Text 1")
    ![alt text](https://user-images.githubusercontent.com/47790228/65355499-e84e2400-dba6-11e9-9e11-1cbf0e55bd62.png "Logo Title Text 1")
* Content

    The core functionality of the site is the content and how users interact with it. Users can create their own post and have the options to attach images to these posts. Additionally, users can both comment, and react to posts and comments on the site. Users news feed is filled with all of their posts as well as the posts of all of their friends with the most recent ones appearing on the top of the feed. The profile feed is simliar however only displaying the posts for a paticular user. Most of the content on the site was generated through the Ruby Faker gem which provided random content to fill the site (it was a lot to seed between the posts, and comments) as well as images from unsplash.com. 
    ![alt text](https://user-images.githubusercontent.com/47790228/65355568-16cbff00-dba7-11e9-95dc-fd882b125ac8.png "Logo Title Text 1")

## Challenges:

* Load Times
    * Problem
    Having so much content to load presented a challenge when it came to load times. If a user had a large number of   friends, the number of posts, comments, and pictures that would have to be fetched on login lead to incredibly    long load times and generally a poor user experience. 

    * Solution
    The fix to this problem was to paginate as many things as possible. On login, users only fetch the first 5 posts for their news feed, no comments, and only the most recent message for all of their conversations with their friends. The rest of the information is fetched using pagination. The news feed and profile feed both wait until the user is towards the bottom of their feed (event listeners) and fetch more posts at that point. Addtionally with post comments and messages, the user is provided buttons that when clicked fetch more comments or messages respectively. Limits are also put in place for the comments and feed requests such that requests are no longer sent when there is no more relevant information. The kamiari gem was used to select the correct information based on the current 'page' the user was on.

    ``` 
    frontend/components/feed/news_feed.jsx
    
    handleScroll(e){
         const ul = document.querySelector(".news-feed")

         const lastEl = ul.lastElementChild
         if (!lastEl) return null
         if (lastEl.offsetTop - pageYOffset < window.innerHeight && this.ready){
             this.page += 1
             this.props.fetchPosts(this.page)
             this.ready = false
             setTimeout(() => this.ready = true, 1000)
         }
         if (this.page > this.props.maxPages) {
             window.removeEventListener('scroll', this.handleScroll)
         }
        } 
    ```

    * Key Takeaways
    It is important to understand how users will interact with the site and adjust accordingly. A long initial load time represents a common problem and is something that had to be addressed. Allowing information to be received when it is wanted both fixed this problem and allowed users more control as to the content they see.

* Friending
    * Problem 
    The problems surrounding user interaction were two-fold. The first issue being the state of the website upon signup. As a site based around friendships and content, it was a problem that neither of those components of the site were visable to new users. 

    * Solution
    Thus the suggested friends bar. This bar suggested the users add friends. The results of the search bar were determined first by encouraging the user to add bot accounts that had been created at seeding. After that intial batch, users are encouraged to add users with the most mutual friends to them. 
    ``` 
    app/models/friendship.rb

    def self.sort_by_messages(friendships) 
        res = friendships.sort_by do |friendship|
            if friendship.room.messages[-1]
                friendship.room.messages[-1].created_at
            else 
                friendship.room.created_at
            end
        end
        res.reverse
    end
    ```

    * Key Takeaways
   This was one of the changes to the site came as a result of initial feedback. It was important to provide the best possible experience to users. It not only important to consider how the site works for those who have established accounts, but also for brand new users. This was one area that last lacking, and as such, changes were made.

* Messaging
    * Problem
    Another major issue was that the site did not allow for 1 to 1 interactions between users. All of the content to this point was public, but it felt necessary to change that. 

    * Solution
    The solution to this was introducing live messaging between users. As friendships were the basis of the site, it still felt necessary to tie messaging to this relationship. Upon the creation of a friendship a chat room is created between the 2 users. The live messaging feature is supported by Action Cable as well as Redis which creates pub/sub realtionship between the users allowing the messages to be sent and received without requiring a refresh of the website. 


    ```
    app/channels/room_channel.rb

    def speak(data)
      message = Message.create!(content: data['message']['message'], user_id: data['message']['user_id'], room_id: data['message']['room_id'] )

      socket = { message: {content: message.content, userId: message.user_id, roomId: message.room_id, createdAt: message.created_at, id: message.id}}

      ActionCable.server.broadcast "RoomChannel_#{data['message']['room_id']}", socket      
    end
  ```
    
    * Key Takeaways
    Using websockets and Action Cable was an very enjoyable experience. Both were technolgies I did not have any prior use with, which made using them for this project very rewarding. Addtionally, as a Facebook inspired site, some of the feedback that I received initially was dissapointment that the site did not feature live messaging.