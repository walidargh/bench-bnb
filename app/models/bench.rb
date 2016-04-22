class Bench < ActiveRecord::Base
	validates :description, :lat, :lng, presence: true
	validates_uniqueness_of :lat, scope: [:lng]

	
end
