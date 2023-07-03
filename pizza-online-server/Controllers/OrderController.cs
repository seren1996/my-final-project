using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pizza_online_server.Models;

namespace pizza_online_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly PizzaAppDbContext pizzaAppDbContext;

        public OrderController(PizzaAppDbContext pizzaAppDbContext)
        {
            this.pizzaAppDbContext = pizzaAppDbContext;
        }

        [HttpGet]
        [Route("GetOrder")]
        public async Task<IEnumerable<OrderView>> GetOrder()
        {
            var orderViewColumnsQuery = pizzaAppDbContext.OrderDetails.Join(pizzaAppDbContext.Orders,
               OrderDetail => OrderDetail.OrderId,
               Order => Order.OrderId,
               (orderDetail, order) => new
               {
                   orderDetail.MealId,
                   orderDetail.Count,
                   order.OrderId,
                   order.UserId,
                   order.OrderDate
               }).Join(pizzaAppDbContext.Menu,
               OrderDetailsAndOrdersJoin => OrderDetailsAndOrdersJoin.MealId,
               Meal => Meal.Id,
               (orderDetailsAndOrdersJoin, meal) => new
               {
                   orderDetailsAndOrdersJoin.Count,
                   orderDetailsAndOrdersJoin.OrderId,
                   orderDetailsAndOrdersJoin.UserId,
                   orderDetailsAndOrdersJoin.OrderDate,
                   meal.Title
               }).Join(pizzaAppDbContext.Users,
               OrderDetailOrdersAndMenuJoin => OrderDetailOrdersAndMenuJoin.UserId,
               User => User.Id,
               (orderDetailOrdersAndMenuJoin, user) => new
               {
                   user.FirstName,
                   user.LastName,
                   user.Address,
                   user.PhoneNumber,
                   orderDetailOrdersAndMenuJoin.OrderDate,
                   orderDetailOrdersAndMenuJoin.OrderId,
                   orderDetailOrdersAndMenuJoin.Title,
                   orderDetailOrdersAndMenuJoin.Count
               });

            var list = orderViewColumnsQuery.Select(x => new OrderView
            {
                OrderDate = x.OrderDate, OrderId = x.OrderId,
                Count = x.Count, Title = x.Title,
                Address = x.Address, PhoneNumber = x.PhoneNumber,
                FirstName = x.FirstName,LastName = x.LastName
            }).ToListAsync();
           
            return await list;

        }

        [HttpPost]
        [Route("AddOrder")]
        public async Task<Order> AddOrder([FromBody] ClientOrder objOrder)
        {
            Order order1 = new Order
            {
                UserId = objOrder.UserId,
                OrderDate = DateTime.Parse(objOrder.OrderDate)
            };
            pizzaAppDbContext.Orders.Add(order1);
            await pizzaAppDbContext.SaveChangesAsync();
            return order1;
        }
        /*
         * [HttpPost]
        [Route("AddOrder")]
        public async Task<IActionResult> AddOrder([FromBody] ClientOrder objOrder)
        {
            Order order1 = new Order
            {
                UserId = objOrder.UserId,
                OrderDate = DateTime.Parse(objOrder.OrderDate)
            };
            pizzaAppDbContext.Orders.Add(order1);
            await pizzaAppDbContext.SaveChangesAsync();
            return Ok("order is successfullt added");
        }
         */

    }
}
