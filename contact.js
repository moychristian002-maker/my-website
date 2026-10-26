// Contact form: sends the visitor's email and message to Christian's Gmail through
// FormSubmit (formsubmit.co), a free form-to-email service, since GitHub Pages has no
// server of its own. The very first message sends Christian an activation email from
// FormSubmit; after he clicks the link in it, every message arrives in his inbox.
(() => {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const ENDPOINT = "https://formsubmit.co/ajax/moychristian002@gmail.com";
  const status = document.getElementById("cf-status");
  const button = form.querySelector(".cf-send");
  const say = (text, kind) => {
    status.textContent = text;
    status.dataset.kind = kind || "";
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { say("Please enter a valid email address.", "error"); form.email.focus(); return; }
    if (!message) { say("Please write a message.", "error"); form.message.focus(); return; }
    if (form._honey.value) return; // a bot filled in the hidden field

    button.disabled = true;
    say("Sending…");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          message,
          _replyto: email,
          _subject: "New message from your portfolio",
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && String(data.success) === "true") {
        form.reset();
        say("Thanks! Your message was sent. I'll get back to you soon.", "ok");
      } else {
        throw new Error(data.message || "send failed");
      }
    } catch (err) {
      say("Sorry, that didn't send. Please email me at moychristian002@gmail.com instead.", "error");
    } finally {
      button.disabled = false;
    }
  });
})();
