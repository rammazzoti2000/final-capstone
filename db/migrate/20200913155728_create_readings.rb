class CreateReadings < ActiveRecord::Migration[6.0]
  def change
    create_table :readings do |t|
      t.integer "bedroom"
      t.integer "study"
      t.integer "garage"
      t.integer "living"
      t.integer "kitchen"
      t.integer "guest"
      t.integer "consumption"
      t.integer "available"
      t.integer "saved"

      t.timestamps
    end
  end
end
