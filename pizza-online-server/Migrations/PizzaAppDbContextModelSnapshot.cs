﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using pizza_online_server.Models;

#nullable disable

namespace pizza_online_server.Migrations
{
    [DbContext(typeof(PizzaAppDbContext))]
    partial class PizzaAppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("pizza_online_server.Models.Meal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Price")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ingredients")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Menu");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Category = "pizza",
                            Price = 10,
                            Title = "Smoked Chicken Pizza",
                            ingredients = "Red sauce pizza topped with smoked chicken, roasted poblano peppers, redonions, and mozzarella cheese finished with a garlic puree"
                        },
                        new
                        {
                            Id = 2,
                            Category = "pizza",
                            Price = 10,
                            Title = "Greek Pizza",
                            ingredients = "Olive oil, kalamata olives, red onions, mozzarella cheese,and feta cheese, topped with fresh tomatoes, oregano,and a garlic puree"
                        },
                        new
                        {
                            Id = 3,
                            Category = "pizza",
                            Price = 10,
                            Title = "Italian Pizza",
                            ingredients = "Red sauce pizza topped with sausage, pepperoni, onions, green peppers, and mozzarella cheese"
                        },
                        new
                        {
                            Id = 4,
                            Category = "pizza",
                            Price = 10,
                            Title = "Red Sauce Pizza",
                            ingredients = "Start with house made pizza sauce and mozzarella cheese then add any two toppings of your choic"
                        },
                        new
                        {
                            Id = 5,
                            Category = "salad",
                            Price = 7,
                            Title = "Greek Salad",
                            ingredients = "Mixed greens, kalamata olives, tomatoes, cucumbers, onions, feta cheese, oregano, peperoncini, house made Greek dressing"
                        },
                        new
                        {
                            Id = 6,
                            Category = "salad",
                            Price = 7,
                            Title = "Caesar Salad",
                            ingredients = "Romaine lettuce, aged parmigiano reggiano, house made Caesar dressing, and croutons"
                        },
                        new
                        {
                            Id = 7,
                            Category = "salad",
                            Price = 6,
                            Title = "House Salad",
                            ingredients = "Mixed greens, red onions, sunflower seeds, tomatoes, mozzarella cheese, house made balsamic vinaigrette"
                        });
                });

            modelBuilder.Entity("pizza_online_server.Models.Order", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OrderId"));

                    b.Property<DateTime>("OrderDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("OrderId");

                    b.HasIndex("UserId");

                    b.ToTable("Orders");

                    b.HasData(
                        new
                        {
                            OrderId = 1,
                            OrderDate = new DateTime(2023, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            UserId = 2
                        });
                });

            modelBuilder.Entity("pizza_online_server.Models.OrderDetail", b =>
                {
                    b.Property<int>("OrderDetailId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OrderDetailId"));

                    b.Property<int>("Count")
                        .HasColumnType("int");

                    b.Property<int>("MealId")
                        .HasColumnType("int");

                    b.Property<int>("OrderId")
                        .HasColumnType("int");

                    b.HasKey("OrderDetailId");

                    b.HasIndex("MealId");

                    b.HasIndex("OrderId");

                    b.ToTable("OrderDetails");

                    b.HasData(
                        new
                        {
                            OrderDetailId = 1,
                            Count = 2,
                            MealId = 2,
                            OrderId = 1
                        },
                        new
                        {
                            OrderDetailId = 2,
                            Count = 1,
                            MealId = 6,
                            OrderId = 1
                        });
                });

            modelBuilder.Entity("pizza_online_server.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Address = "",
                            Email = "seeren_assadi@outlook.com",
                            FirstName = "Seren",
                            LastName = "Bokaiey",
                            Password = "123Sb@123",
                            PhoneNumber = "",
                            Role = "admin"
                        },
                        new
                        {
                            Id = 2,
                            Address = "Tamra",
                            Email = "bhaa_bokaiey@outlook.com",
                            FirstName = "Bhaa",
                            LastName = "Bokaiey",
                            Password = "123Bh@123",
                            PhoneNumber = "0552375949",
                            Role = "regular"
                        });
                });

            modelBuilder.Entity("pizza_online_server.Models.Order", b =>
                {
                    b.HasOne("pizza_online_server.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("pizza_online_server.Models.OrderDetail", b =>
                {
                    b.HasOne("pizza_online_server.Models.Meal", "Meal")
                        .WithMany()
                        .HasForeignKey("MealId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("pizza_online_server.Models.Order", "Order")
                        .WithMany()
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Meal");

                    b.Navigation("Order");
                });
#pragma warning restore 612, 618
        }
    }
}