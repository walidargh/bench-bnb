# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

offset = 0.001
def rand_lat
	lat_min = 37.7
	offset = 0.0001
	lat_min + offset*rand(1000)
end

def rand_lng
	lng_min = -122.5
	offset = 0.0001
	lng_min + offset*rand(1000)
end

def description
	Faker::Hipster.sentence
end


10.times do
	Bench.create!(description: description, lat: rand_lat, lng: rand_lng)
end
