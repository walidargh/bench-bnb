class Bench < ActiveRecord::Base
	validates :description, :lat, :lng, presence: true
	validates_uniqueness_of :lat, scope: [:lng]

	def self.in_bounds(bounds) {
		# lat_range = [ bounds.northEast.lat, bounds.southWest.lat ]
		# lng_range = [ bounds.southWest.lng, bounds.northEast.lng]
		min_lat = bounds.northEast.lat
		max_lat = bounds.southWest.lat
		min_lng = bounds.southWest.lng
		max_lng = bounds.northEast.lng
		bounded_markers = Bench.execute(<<-SQL, min_lat, max_lat, min_lng, max_lng)
      SELECT
        benches.*
      FROM
        benches
      WHERE
        (lat BETWEEN ? AND ?) AND (lng BETWEEN ? AND ?)
    SQL
		bounded_markers
end
