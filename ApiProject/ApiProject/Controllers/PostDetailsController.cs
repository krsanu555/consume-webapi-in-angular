using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using ApiProject.Models;

namespace ApiProject.Controllers
{
    public class PostDetailsController : ApiController
    {
        private TestEntities1 db = new TestEntities1();

        // GET: api/PostDetails
        public IQueryable<PostDetail> GetPostDetails()
        {
            return db.PostDetails;
        }

        // GET: api/PostDetails/5
        [ResponseType(typeof(PostDetail))]
        public async Task<IHttpActionResult> GetPostDetail(int id)
        {
            PostDetail postDetail = await db.PostDetails.FindAsync(id);
            if (postDetail == null)
            {
                return NotFound();
            }

            return Ok(postDetail);
        }

        // PUT: api/PostDetails/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPostDetail(int id, PostDetail postDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != postDetail.id)
            {
                return BadRequest();
            }

            db.Entry(postDetail).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/PostDetails
        [ResponseType(typeof(PostDetail))]
        public async Task<IHttpActionResult> PostPostDetail(PostDetail postDetail)
        {
            //Console.WriteLine(postDetail);
            if (!ModelState.IsValid)
            {
            return BadRequest(ModelState);
            }

            db.PostDetails.Add(postDetail);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = postDetail.id }, postDetail);
        }

        // DELETE: api/PostDetails/5
        [ResponseType(typeof(PostDetail))]
        public async Task<IHttpActionResult> DeletePostDetail(int id)
        {
            PostDetail postDetail = await db.PostDetails.FindAsync(id);
            if (postDetail == null)
            {
                return NotFound();
            }

            db.PostDetails.Remove(postDetail);
            await db.SaveChangesAsync();

            return Ok(postDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PostDetailExists(int id)
        {
            return db.PostDetails.Count(e => e.id == id) > 0;
        }
    }
}