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
Friendship.destroy_all 
Room.destroy_all
Message.destroy_all

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
    "content_pictures/adeolu-eletu-unRkg2jH1j0-unsplash.jpg",
    "content_pictures/adi-constantin-C8Z5DvtWQMw-unsplash.jpg",
    "content_pictures/agustin-diaz-7F65HDP0-E0-unsplash.jpg",
    "content_pictures/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg",
    "content_pictures/annie-spratt-wgivdx9dBdQ-unsplash.jpg",
    "content_pictures/austin-neill-_fYBsiQzMHI-unsplash.jpg",
    "content_pictures/brooke-lark-M4E7X3z80PQ-unsplash.jpg",
    "content_pictures/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
    "content_pictures/clarisse-meyer-FQ96bh4O1tY-unsplash.jpg",
    "content_pictures/daniel-chen-ypZIfpMpyIs-unsplash.jpg",
    "content_pictures/deanna-ritchie-wORTURlz7jg-unsplash.jpg",
    "content_pictures/farzad-nazifi-p-xSl33Wxyc-unsplash.jpg",
    "content_pictures/forest-simon-GZNyQVnRbgE-unsplash.jpg",
    "content_pictures/franck-v-zbLW0FG8XU8-unsplash.jpg",
    "content_pictures/harley-davidson-56R8TzG7Lzc-unsplash.jpg",
    "content_pictures/headway-5QgIuuBxKwM-unsplash.jpg",
    "content_pictures/hu-chen-5O6c_pLziXs-unsplash.jpg",
    "content_pictures/ihor-malytskyi-iHFcFJVhozI-unsplash.jpg",
    "content_pictures/jack-cain--cbijoXPahg-unsplash.jpg",
    "content_pictures/joel-filipe-QwoNAhbmLLo-unsplash.jpg",
    "content_pictures/john-bakator-iQOzInmMxEY-unsplash.jpg",
    "content_pictures/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg",
    "content_pictures/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg",
    "content_pictures/joshua-coleman-KzPefInJW58-unsplash.jpg",
    "content_pictures/karim-manjra-uqeL6V53WUc-unsplash.jpg",
    "content_pictures/manuel-molina-VJGup1CQAYs-unsplash.jpg",
    "content_pictures/mesut-kaya-eOcyhe5-9sQ-unsplash.jpg",
    "content_pictures/micaela-parente-YGgKE6aHaUw-unsplash.jpg",
    "content_pictures/miguel-andrade-RpZukiMpLmM-unsplash.jpg",
    "content_pictures/monika-grabkowska-P1aohbiT-EY-unsplash.jpg",
    "content_pictures/mostafa-meraji-vzYaLX6OTi8-unsplash.jpg",
    "content_pictures/nasa-OLlj17tUZnU-unsplash.jpg",
    "content_pictures/nick-moore-t51-FLRcBX0-unsplash.jpg",
    "content_pictures/nicole-reyes-FRZ8jQ9j85U-unsplash.jpg",
    "content_pictures/pankaj-patel-u2Ru4QBXA5Q-unsplash.jpg",
    "content_pictures/paul-dufour-vzb0FFmZHsI-unsplash.jpg",
    "content_pictures/paul-silvan-koQG_ClP1hA-unsplash.jpg",
    "content_pictures/rachel-park-hrlvr2ZlUNk-unsplash.jpg",
    "content_pictures/riley-mccullough-iezcEpGuYdE-unsplash.jpg",
    "content_pictures/safar-safarov-MSN8TFhJ0is-unsplash.jpg",
    "content_pictures/samuel-zeller-rk_Zz3b7G2Y-unsplash.jpg",
    "content_pictures/shifaaz-shamoon-qtbV_8P_Ksk-unsplash.jpg",
    "content_pictures/uriel-soberanes-MxVkWPiJALs-unsplash.jpg"
]

profile_photos = [
    "profile_pictures/charles-pOUA8Xay514-unsplash.jpg",
    "profile_pictures/braydon-anderson-wOHH-NUTvVc-unsplash.jpg",
    "profile_pictures/charles-K4mSJ7kc0As-unsplash.jpg",
    "profile_pictures/dan-cook-MCauAnBJeig-unsplash.jpg",
    "profile_pictures/darius-bashar-3KYviZ-qG7M-unsplash.jpg",
    "profile_pictures/david-clode-7_TTPznVIQI-unsplash.jpg",
    "profile_pictures/david-clode-Yg_sNKOiXvY-unsplash.jpg",
    "profile_pictures/elena-cordery-RLlcbkemwnw-unsplash.jpg",
    "profile_pictures/jared-rice-O6DUoIl6NWA-unsplash.jpg",
    "profile_pictures/marion-michele-z_eFLP9aS6s-unsplash.jpg",
    "profile_pictures/matthew-henry-U5rMrSI7Pn4-unsplash.jpg",
    "profile_pictures/nasa-U2uKrI4lci8-unsplash.jpg",
    "profile_pictures/sebastian-molinares-VcRbMldAFU8-unsplash.jpg",
    "profile_pictures/simon-matzinger-39SHYToxfiQ-unsplash.jpg",
    "profile_pictures/sunyu-tIfrzHxhPYQ-unsplash.jpg"
]

name_generators = [
 
]

5.times do 
    name_generators << Faker::TvShows::SiliconValley.character
    name_generators << Faker::DcComics.name
    name_generators << Faker::GreekPhilosophers.name
    name_generators << Faker::Science.scientist
    name_generators << Faker::Movies::StarWars.character
end 


content_generators = [
    
]
20.times do 
   content_generators << Faker::Quote.most_interesting_man_in_the_world + " -Faker Gem Quote"
    content_generators << Faker::Quote.famous_last_words + " -Faker Gem Quote"
    content_generators << Faker::Quote.matz + " -Faker Gem Quote"
    content_generators << Faker::Quote.singular_siegler + " -Faker Gem Quote"
    content_generators << Faker::Movies::HarryPotter.quote + " -Harry Potter"
    content_generators << Faker::TvShows::StrangerThings.quote + " -Stranger Things"
    content_generators << Faker::GreekPhilosophers.quote + " -Faker Gem Quote"
    content_generators << Faker::Movies::StarWars.quote + " -Star Wars"
    content_generators << Faker::Movies::VForVendetta.speech + " -VForVendetta"
    content_generators << Faker::Movies::VForVendetta.quote + " -VForVendetta"
    content_generators << Faker::Movies::HitchhikersGuideToTheGalaxy.quote + " -Hitchhikers Guide To The Galaxy"
end

user_count = 0
post_count = 0

# reaction_count = 0
reactions = ["like", "love", "wow", "laugh", "sad"]
15.times do 

    # photo = photos.sample
    filename = profile_photos.sample
    photo = "https://snap-face-pro.s3-us-west-1.amazonaws.com/#{filename}"
    # https://snap-face-pro.s3-us-west-1.amazonaws.com/test_images/adi-constantin-C8Z5DvtWQMw-unsplash.jpg
    file = open(photo)
    user = User.new(name: name_generators.sample, email: rand() , password: "123456" )
    user.profile_photo.attach(io: file, filename: filename)
    user.save!
    room = Room.create
    Friendship.create(user_id: user.id, friend_id: user.id, status: "CONFIRMED", room_id: room.id)
    
    user_count += 1
    5.times do 
        post = Post.create(user_id: user.id, body: content_generators.sample )
        5.times do 
            comment = Comment.create(user_id: rand(User.first.id..(User.first.id+ user_count)), post_id: post.id, body: content_generators.sample )
            5.times do 
                Reaction.create(user_id: rand(User.first.id..(User.first.id+ user_count)), reaction_type: reactions.sample, reacted_id: comment.id, reacted_type: "Comment" )
            end
        end
         5.times do 
        Reaction.create(user_id: rand(User.first.id..(User.first.id+ user_count)), reaction_type: reactions.sample, reacted_id: post.id, reacted_type: "Post" )
        end
        post_count += 1
    end
    5.times do 
        post = Post.create(user_id: user.id, body: content_generators.sample )
        filename_content = content_photos.sample
        photo = "https://snap-face-pro.s3-us-west-1.amazonaws.com/#{filename_content}"
        file = open(photo)
        post.photo.attach(io: file, filename: filename_content)
        post_count += 1
        5.times do 
            comment = Comment.create(user_id: rand(User.first.id..(User.first.id+ user_count)), post_id: post.id, body: content_generators.sample )
            5.times do 
                Reaction.create(user_id: rand(User.first.id..(User.first.id+ user_count)), reaction_type: reactions.sample, reacted_id: comment.id, reacted_type: "Comment" )
            end
        end
         5.times do 
        Reaction.create(user_id: rand(User.first.id..(User.first.id+ user_count)), reaction_type: reactions.sample, reacted_id: post.id, reacted_type: "Post" )
        end
    end

end