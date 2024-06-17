using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {
        private readonly string filePath = "data.txt";

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] string inputData)
        {
            if (string.IsNullOrEmpty(inputData))
            {
                return BadRequest("Input data cannot be empty.");
            }

            await System.IO.File.AppendAllTextAsync(filePath, inputData + "\n");
            return Ok("Data written to file.");
        }
    }
}
