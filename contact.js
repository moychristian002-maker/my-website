// Contact form. Messages go to Christian's Gmail through a Google Apps Script web app that
// runs in his own Google account (source: ClaudeProjects\tools\contact-form-apps-script.gs).
// Until ENDPOINT is filled in, or if sending fails, the form falls back to opening the
// visitor's own email app with the message already written (a mailto: link).
(() => {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const TO = "moychristian002@gmail.com";
  const ENDPOINT = "https://script.google.com/macros/s/AKfycbwpuazKeDTzGfeo_cTVj5jMl4ynWIeg7fSO002R-igVCWHXFX3AyAhF7E3wiwJ5-5CV/exec"; // the Apps Script web app
  const status = document.getElementById("cf-status");
  const button = form.querySelector(".cf-send");
  const say = (text, kind) => {
    status.textContent = text;
    status.dataset.kind = kind || "";
  };
  if (!ENDPOINT) say("This opens your email app with your message ready to send.");

  const openEmailApp = (name, email, topic, message) => {
    const subject = topic || `Portfolio message from ${name || email}`;
    const body = `${message}\n\n${name ? `${name}\n` : ""}${email}`;
    location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("cf-name").value.trim();
    const emailField = document.getElementById("cf-email");
    const email = emailField.value.trim();
    const subject = document.getElementById("cf-subject").value.trim();
    const field = document.getElementById("cf-message");
    const message = field.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { say("Please enter a valid email address.", "error"); emailField.focus(); return; }
    if (!message) { say("Please write a message.", "error"); field.focus(); return; }
    if (document.getElementById("cf-website").value) return; // a bot filled in the hidden field

    if (!ENDPOINT) {
      openEmailApp(name, email, subject, message);
      say(`Your email app should open with the message ready to send. If it doesn't, email me at ${TO}.`, "ok");
      return;
    }

    button.disabled = true;
    say("Sending…");
    try {
      // A plain form post, so the browser sends it straight to Google with no extra checks.
      const res = await fetch(ENDPOINT, { method: "POST", body: new URLSearchParams({ name, email, subject, message }) });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "send failed");
      form.reset();
      say("Thanks! Your message was sent. I'll get back to you soon.", "ok");
    } catch (err) {
      say(`Sorry, that didn't send. Please email me at ${TO} instead.`, "error");
    } finally {
      button.disabled = false;
    }
  });
})();
