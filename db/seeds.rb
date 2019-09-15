# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Post.destroy_all
Comment.destroy_all
Reaction.destroy_all

# 5.times do 
#     user = User.create(name: Faker::Sports::Basketball,  email: Faker::Company.catch_phrase.downcase, password: "123456" )


# end
photos = [
    "test_images/darius-bashar-3KYviZ-qG7M-unsplash.jpg",
    "test_images/adi-constantin-C8Z5DvtWQMw-unsplash.jpg",
    "test_images/annie-spratt-jY9mXvA15W0-unsplash.jpg",
    "test_images/arif-riyanto-G1N9kDHqBrQ-unsplash.jpg",
    "test_images/blake-richard-verdoorn-cssvEZacHvQ-unsplash.jpg",
    "test_images/brad-knight-huWlb1NP67w-unsplash.jpg",
    "test_images/braydon-anderson-wOHH-NUTvVc-unsplash.jpg",
]

content_photos = [
    "/Users/theodorebrowne/Desktop/test_images/adi-constantin-C8Z5DvtWQMw-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/annie-spratt-jY9mXvA15W0-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/blake-richard-verdoorn-cssvEZacHvQ-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/brad-knight-huWlb1NP67w-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/brooke-lark-M4E7X3z80PQ-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/brooke-lark-R18ecx07b3c-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/chris-ried-ieic5Tq8YMk-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/christopher-sardegna-bSmKli4OTIY-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/clement-h-95YRwf6CNw8-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/dan-cook-MCauAnBJeig-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/eberhard-grossgasteiger-pBgnT4KH8d4-unsplash.jpg",

]

profile_photo = [
    "/Users/theodorebrowne/Desktop/test_images/braydon-anderson-wOHH-NUTvVc-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/charles-pOUA8Xay514-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/darius-bashar-3KYviZ-qG7M-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/david-clode-Yg_sNKOiXvY-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/elena-cordery-RLlcbkemwnw-unsplash.jpg",
    "/Users/theodorebrowne/Desktop/test_images/erol-ahmed-5nFU8l0RDiY-unsplash.jpg",

]

user_count = 0
post_count = 0
# reaction_count = 0
reactions = ["like", "love", "wow", "laugh", "sad"]
10.times do 
    # photo = photos.sample
    # filename = photos.sample
    # photo = "https://s3.amazonaws.com/snap-face-pro/#{filename}.jpg"
    # file = open(photo)
    user = User.new(name: Faker::Sports::Basketball.player.downcase, email: rand() , password: "123456" )
    # user.profile_photo.attach(io: file, filename: filename)
    user.save!
    user_count += 1
    5.times do 
        post = Post.create(user_id: user.id, body: Faker::TvShows::RickAndMorty.quote.downcase )
        post_count += 1
        5.times do 
            comment = Comment.create(user_id: rand(User.first.id..(User.first.id+ user_count)), post_id: post.id, body: Faker::TvShows::RickAndMorty.quote.downcase )
            5.times do 
                Reaction.create(user_id: rand(User.first.id..(User.first.id+ user_count)), reaction_type: reactions.sample, reacted_id: comment.id, reacted_type: "Comment" )
            end
        end
         5.times do 
        Reaction.create(user_id: rand(User.first.id..(User.first.id+ user_count)), reaction_type: reactions.sample, reacted_id: post.id, reacted_type: "Post" )
    end
    end
   
end