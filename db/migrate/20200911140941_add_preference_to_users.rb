class AddPreferenceToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :name, :string
    add_column :users, :units, :string
    add_column :users, :target, :string
    add_column :users, :string, :string
  end
end
