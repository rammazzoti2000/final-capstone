class AddColumnsToAddReading < ActiveRecord::Migration[6.0]
  def change
    add_reference :add_readings, :user, null: false, foreign_key: true
  end
end
