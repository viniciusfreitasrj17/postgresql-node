module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "12345",
  database: "postgresql-node",
  define: {
    timestamps: true, // created_at and updated_at
    underscored: true, // snack case, in sequelize use pascal case default
  },
};
