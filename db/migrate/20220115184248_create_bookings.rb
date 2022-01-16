class CreateBookings < ActiveRecord::Migration[5.2]
  def up
    create_table :bookings do |t|

      t.column "user_id", :string, :limit => 50
      t.column "start_time", :time
      t.column "end_time", :time
      t.column "amenities_id", :string
      t.column "admin_id", :boolean
      t.column "weekday", :string
      t.column "date", :date
      t.column "timeslot", :time


      t.timestamps
    end
  end

  def down
    drop_table :users
  end

end
