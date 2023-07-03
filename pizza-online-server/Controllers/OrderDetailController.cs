using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pizza_online_server.Models;

namespace pizza_online_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderDetailController : ControllerBase
    {
        private readonly PizzaAppDbContext pizzaAppDbContext;

        public OrderDetailController(PizzaAppDbContext pizzaAppDbContext)
        {
            this.pizzaAppDbContext = pizzaAppDbContext;
        }


        [HttpPost]
        [Route("AddOrderDetail")]
        public async Task<IActionResult> AddUser([FromBody] ClientOrderDetail objOrderDetail)
        {
            OrderDetail orderDetail = new OrderDetail
            {
                Count = objOrderDetail.Count,
                OrderId = objOrderDetail.OrderId,
                MealId = objOrderDetail.MealId
            };
            pizzaAppDbContext.OrderDetails.Add(orderDetail);
            await pizzaAppDbContext.SaveChangesAsync();
            return Ok("orderDetail is successfullt added");
        }

    }
}
