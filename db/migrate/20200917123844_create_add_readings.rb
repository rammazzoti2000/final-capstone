class CreateAddReadings < ActiveRecord::Migration[6.0]
  def change
    create_table :add_readings do |t|
      t.integer "quota"
      t.integer "units"

      t.timestamps
    end
  end
end
