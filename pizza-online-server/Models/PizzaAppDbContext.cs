using Microsoft.EntityFrameworkCore;

namespace pizza_online_server.Models
{
    public class PizzaAppDbContext :DbContext
    {
        public PizzaAppDbContext(DbContextOptions<PizzaAppDbContext> options) : base(options)
        {
        }

        public DbSet<Meal> Menu { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-BHIBGS6;Initial Catalog=PizzaRestaurantDB;TrustServerCertificate=True;Integrated Security=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var meal1 = new Meal { Id = 1, Title = "Smoked Chicken Pizza", Category = "pizza", Price = 10, ingredients = "Red sauce pizza topped with smoked chicken, roasted poblano peppers, redonions, and mozzarella cheese finished with a garlic puree" };
            var meal2 = new Meal { Id = 2, Title = "Greek Pizza", Category = "pizza", Price = 10, ingredients = "Olive oil, kalamata olives, red onions, mozzarella cheese,and feta cheese, topped with fresh tomatoes, oregano,and a garlic puree" };
            var meal3 = new Meal { Id = 3, Title = "Italian Pizza", Category = "pizza", Price = 10, ingredients = "Red sauce pizza topped with sausage, pepperoni, onions, green peppers, and mozzarella cheese" };
            var meal4 = new Meal { Id = 4, Title = "Red Sauce Pizza", Category = "pizza", Price = 10, ingredients = "Start with house made pizza sauce and mozzarella cheese then add any two toppings of your choic" };
            var meal5 = new Meal { Id = 5, Title = "Greek Salad", Category = "salad", Price = 7, ingredients = "Mixed greens, kalamata olives, tomatoes, cucumbers, onions, feta cheese, oregano, peperoncini, house made Greek dressing" };
            var meal6 = new Meal { Id = 6, Title = "Caesar Salad", Category = "salad", Price = 7, ingredients = "Romaine lettuce, aged parmigiano reggiano, house made Caesar dressing, and croutons" };
            var meal7 = new Meal { Id = 7, Title = "House Salad", Category = "salad", Price = 6, ingredients = "Mixed greens, red onions, sunflower seeds, tomatoes, mozzarella cheese, house made balsamic vinaigrette" };
            var user1 = new User { Id = 1, FirstName = "Seren", LastName = "Bokaiey", Email = "seeren_assadi@outlook.com", Password = "123Sb@123" ,Role ="admin", Address = "", PhoneNumber = ""};
            var user2 = new User { Id = 2, FirstName = "Bhaa", LastName = "Bokaiey", Email = "bhaa_bokaiey@outlook.com", Password = "123Bh@123", Role = "regular", Address = "Tamra", PhoneNumber = "0552375949" };

            modelBuilder.Entity<Meal>().HasData(meal1, meal2, meal3, meal4, meal5, meal6, meal7);
            modelBuilder.Entity<User>().HasData(user1, user2);


            //modelBuilder.Entity<OrderDetail>().HasOne<Order>(o => o.Order).WithMany(o => o.OrderLines).HasForeignKey(s => s.OrderId);

            //modelBuilder.Entity<Order>()
            //.HasOne<User>(o => o.User)
            //.WithMany(u => u.Orders)
            //.HasForeignKey(s => s.UserId);


            var order1 = new Order { OrderId = 1, UserId = user2.Id , OrderDate = new DateTime(2023, 5, 15) };
            var orderDetail1 = new OrderDetail { OrderDetailId = 1, Count = 2 ,OrderId = order1.OrderId, MealId = meal2.Id};
            var orderDetail2 = new OrderDetail { OrderDetailId = 2, Count = 1, OrderId = order1.OrderId, MealId = meal6.Id};

            modelBuilder.Entity<Order>().HasData(order1);
            modelBuilder.Entity<OrderDetail>().HasData(orderDetail1, orderDetail2);


            base.OnModelCreating(modelBuilder);
        }
    }
}
