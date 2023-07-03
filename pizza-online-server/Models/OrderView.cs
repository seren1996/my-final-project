namespace pizza_online_server.Models
{
    public class OrderView
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public int OrderId { get; set; }
        public int Count { get; set; }
        public string Title { get; set; }
        public DateTime OrderDate { get; set; }
    }
}
