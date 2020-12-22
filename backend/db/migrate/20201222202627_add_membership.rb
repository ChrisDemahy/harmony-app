class AddMembership < ActiveRecord::Migration[6.0]
  def change
    create_table :memberships do |t|
      t.timestamps
    end
  end
end
