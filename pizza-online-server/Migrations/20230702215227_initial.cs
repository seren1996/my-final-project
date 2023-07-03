using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace pizza_online_server.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Menu",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    ingredients = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Menu", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    OrderId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    OrderDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.OrderId);
                    table.ForeignKey(
                        name: "FK_Orders_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OrderDetails",
                columns: table => new
                {
                    OrderDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderId = table.Column<int>(type: "int", nullable: false),
                    MealId = table.Column<int>(type: "int", nullable: false),
                    Count = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderDetails", x => x.OrderDetailId);
                    table.ForeignKey(
                        name: "FK_OrderDetails_Menu_MealId",
                        column: x => x.MealId,
                        principalTable: "Menu",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderDetails_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "OrderId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Menu",
                columns: new[] { "Id", "Category", "Price", "Title", "ingredients" },
                values: new object[,]
                {
                    { 1, "pizza", 10, "Smoked Chicken Pizza", "Red sauce pizza topped with smoked chicken, roasted poblano peppers, redonions, and mozzarella cheese finished with a garlic puree" },
                    { 2, "pizza", 10, "Greek Pizza", "Olive oil, kalamata olives, red onions, mozzarella cheese,and feta cheese, topped with fresh tomatoes, oregano,and a garlic puree" },
                    { 3, "pizza", 10, "Italian Pizza", "Red sauce pizza topped with sausage, pepperoni, onions, green peppers, and mozzarella cheese" },
                    { 4, "pizza", 10, "Red Sauce Pizza", "Start with house made pizza sauce and mozzarella cheese then add any two toppings of your choic" },
                    { 5, "salad", 7, "Greek Salad", "Mixed greens, kalamata olives, tomatoes, cucumbers, onions, feta cheese, oregano, peperoncini, house made Greek dressing" },
                    { 6, "salad", 7, "Caesar Salad", "Romaine lettuce, aged parmigiano reggiano, house made Caesar dressing, and croutons" },
                    { 7, "salad", 6, "House Salad", "Mixed greens, red onions, sunflower seeds, tomatoes, mozzarella cheese, house made balsamic vinaigrette" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Address", "Email", "FirstName", "LastName", "Password", "PhoneNumber", "Role" },
                values: new object[,]
                {
                    { 1, "", "seeren_assadi@outlook.com", "Seren", "Bokaiey", "123Sb@123", "", "admin" },
                    { 2, "Tamra", "bhaa_bokaiey@outlook.com", "Bhaa", "Bokaiey", "123Bh@123", "0552375949", "regular" }
                });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "OrderId", "OrderDate", "UserId" },
                values: new object[] { 1, new DateTime(2023, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), 2 });

            migrationBuilder.InsertData(
                table: "OrderDetails",
                columns: new[] { "OrderDetailId", "Count", "MealId", "OrderId" },
                values: new object[,]
                {
                    { 1, 2, 2, 1 },
                    { 2, 1, 6, 1 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_MealId",
                table: "OrderDetails",
                column: "MealId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_OrderId",
                table: "OrderDetails",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_UserId",
                table: "Orders",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderDetails");

            migrationBuilder.DropTable(
                name: "Menu");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
