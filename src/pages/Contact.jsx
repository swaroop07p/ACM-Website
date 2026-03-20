export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Get data from the form fields
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const targetEmail = "swaroop579p@gmail.com";

    // 2. Construct the email body
    const subject = encodeURIComponent(`Feedback from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Sender Email: ${email}\n\n` +
      `Message:\n${message}`
    );

    // 3. Open the default email app
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`;
  window.open(gmailUrl, '_blank');
  };

    return (
    <div className="min-h-screen pt-24 pb-12 relative z-10">
      {/* <div className="animated-bg"></div> */}
      <div className="max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h1 className="text-5xl pt-5 py-1 font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500" data-aos="fade-down">Get In Touch</h1>
        
        {/* CHANGED: Added onSubmit={handleSubmit} */}
        <form className="glass-card rounded-3xl p-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-medium ml-1">Your Name</label>
              {/* IMPORTANT: added name="name" */}
              <input name="name" required type="text" className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="John Doe" autocomplete="off"/>
            </div>
            <div className="space-y-2">
              <label className="font-medium ml-1">Your Email</label>
              {/* IMPORTANT: added name="email" */}
              <input name="email" required type="email" className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="john@example.com" autocomplete="off"/>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium ml-1">Target Email (Feedback to)</label>
            <input type="email" defaultValue="acm@jnnce.ac.in" disabled className="w-full bg-slate-200 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-500 cursor-not-allowed" />
          </div>
          <div className="space-y-2">
            <label className="font-medium ml-1">Message / Feedback</label>
            {/* IMPORTANT: added name="message" */}
            <textarea name="message" required rows="3" className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Write your thoughts here..."></textarea>
          </div>
          
          {/* Ensure button is type="submit" */}
          <button type="submit" className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-teal-500/50">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}