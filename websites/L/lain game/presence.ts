const presence = new Presence({
    clientId: "672143036767272961"
  }),
  browsingTimestamp = Math.floor(Date.now() / 1000),
  url = new URLSearchParams(window.location.search).get("site");

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "logo",
    startTimestamp: browsingTimestamp
  };

  if (url === "0") presenceData.details = "viewing site A";
  else if (url === "1") presenceData.details = "viewing site B";
  else if (new URLSearchParams(window.location.search).has("id")) {
    presenceData.details = "viewing an file:";
    presenceData.state = document.querySelector(
      "body > center > table > tbody > tr:nth-child(1) > td.ta4d01 > table > tbody > tr:nth-child(1) > td.ta4d2 > a:nth-child(2)"
    ).textContent;
  } else if (new URLSearchParams(window.location.search).has("tag")) {
    presenceData.details = "viewing an tag:";
    presenceData.state =
      document.querySelector("body > center > h1").textContent;
  } else if (
    document.location.pathname === "/" ||
    document.location.pathname === "/index.html"
  )
    presenceData.details = "index";
  else if (document.location.pathname.includes("/about.html")) {
    presenceData.details = "reading the about page";
    presenceData.smallImageKey = "reading";
  } else if (document.location.pathname.includes("/feedback.php"))
    presenceData.details = "giving feedback";

  if (presenceData.details) presence.setActivity(presenceData);
  else presence.setActivity();
});
