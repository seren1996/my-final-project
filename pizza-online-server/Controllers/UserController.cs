using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pizza_online_server.Models;


namespace pizza_online_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly PizzaAppDbContext pizzaAppDbContext;

        public UserController(PizzaAppDbContext pizzaAppDbContext)
        {
            this.pizzaAppDbContext = pizzaAppDbContext;
        }

        [HttpGet]
        [Route("GetUser")]
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await pizzaAppDbContext.Users.ToListAsync();
        }


        [HttpPatch]
        [Route("UpdateUser/{id}")]
        public async Task<User> UpdateMeal(User objUser)
        {
            pizzaAppDbContext.Entry(objUser).State = EntityState.Modified;
            await pizzaAppDbContext.SaveChangesAsync();
            return objUser;
        }

        [HttpDelete]
        [Route("DeleteUser/{id}")]
        public bool DeleteUser(int id)
        {
            bool a = false;
            var user = pizzaAppDbContext.Users.Find(id);
            if (user != null)
            {
                a = true;
                pizzaAppDbContext.Entry(user).State = EntityState.Deleted;
                pizzaAppDbContext.SaveChanges();
            }
            else
            {
                a = false;
            }

            return a;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> loginUser([FromBody] UserLogin user)
        {
            var dbUser = pizzaAppDbContext.Users.Where(u => u.Email == user.Email && u.Password == user.Password).FirstOrDefault();
            if (dbUser == null)
            {
                return BadRequest("Username or password is incorrect");
            }
            return Ok(dbUser);
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> userRegistration([FromBody] User user)
        {
            var dbUser = pizzaAppDbContext.Users.Where(u => u.Email == user.Email).FirstOrDefault();
            if(dbUser != null)
            {
                return BadRequest("email already exists");
            }
            pizzaAppDbContext.Users.Add(user);
            await pizzaAppDbContext.SaveChangesAsync();

            return Ok("user is successfullt registered");
        }
    }
}
