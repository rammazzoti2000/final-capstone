# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_17_125542) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "add_readings", force: :cascade do |t|
    t.integer "quota"
    t.integer "units"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_add_readings_on_user_id"
  end

  create_table "readings", force: :cascade do |t|
    t.integer "bedroom"
    t.integer "study"
    t.integer "garage"
    t.integer "living"
    t.integer "kitchen"
    t.integer "guest"
    t.integer "consumption"
    t.integer "available"
    t.integer "saved"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_readings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.integer "units"
    t.integer "target"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "add_readings", "users"
  add_foreign_key "readings", "users"
end
