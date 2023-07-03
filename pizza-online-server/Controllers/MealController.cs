using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pizza_online_server.Models;


namespace pizza_online_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MealController : ControllerBase
    {
        private readonly PizzaAppDbContext pizzaAppDbContext;

        public MealController(PizzaAppDbContext pizzaAppDbContext)
        {
            this.pizzaAppDbContext = pizzaAppDbContext;
        }

        [HttpGet]
        [Route("GetMeal")]
        public async Task<IEnumerable<Meal>> GetMenu()
        {
            return await pizzaAppDbContext.Menu.ToListAsync();
        }

        [HttpPost]
        [Route("AddMeal")]
        public async Task<Meal> AddMeal(Meal objMeal)
        {
            pizzaAppDbContext.Menu.Add(objMeal);
            await pizzaAppDbContext.SaveChangesAsync();
            return objMeal;
        }

        [HttpPatch]
        [Route("UpdateMeal/{id}")]
        public async Task<Meal> UpdateMeal(Meal objMeal)
        {
            pizzaAppDbContext.Entry(objMeal).State = EntityState.Modified;
            await pizzaAppDbContext.SaveChangesAsync();
            return objMeal;
        }

        [HttpDelete]
        [Route("DeleteMeal/{id}")]
        public bool DeleteMeal(int id)
        {
            bool a = false;
            var meal = pizzaAppDbContext.Menu.Find(id);
            if (meal != null)
            {
                a = true;
                pizzaAppDbContext.Entry(meal).State = EntityState.Deleted;
                pizzaAppDbContext.SaveChanges();
            }
            else
            {
                a = false;
            }

            return a;
        }
    }
}
