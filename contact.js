// Contact form: no outside service. Sending opens the visitor's own email app with a
// message to Christian already written (a mailto: link), so they send it from their
// own address and his reply goes straight back to them.
(() => {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const TO = "moychristian002@gmail.com";
  const status = document.getElementById("cf-status");
  const say = (text, kind) => {
    status.textContent = text;
    status.dataset.kind = kind || "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cf-name").value.trim();
    const field = document.getElementById("cf-message");
    const message = field.value.trim();
    if (!message) { say("Please write a message.", "error"); field.focus(); return; }

    const subject = name ? `Portfolio message from ${name}` : "Portfolio message";
    const body = name ? `${message}\n\n${name}` : message;
    location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    say(`Your email app should open with the message ready to send. If it doesn't, email me at ${TO}.`, "ok");
  });
})();
