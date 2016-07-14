# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Bench.create({description: "Nice quaint bench on the east side of Golden Gate Park", lat: 37.767303, lng: -122.467437, seating: 2})
Bench.create({description: "North park bench", lat: 37.792212, lng: -122.464067, seating: 4})
Bench.create({description: "By AT&T park", lat: 37.779924, lng: -122.388243, seating: 1})
Bench.create({description: "On the Embarcadero", lat: 37.796292, lng: -122.394495, seating: 3})
Bench.create({description: "Wait for your BART ride", lat: 37.780317, lng: -122.414279, seating: 2})
