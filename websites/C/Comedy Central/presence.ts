const presence = new Presence({
    clientId: "630533580119998496"
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
  });

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "comedycentral"
  };

  if (document.location.pathname.startsWith("/episodes")) {
    const player: HTMLVideoElement = document.querySelector(
      ".edge-player-content-element"
    );
    let epNumber: string | Element | HTMLElement =
      document.querySelector(".meta span");
    epNumber &&= `${(epNumber as HTMLElement).textContent
      .replace("Season ", "S")
      .replace(" Ep ", ":E")} `;
    epNumber ??= "";

    [presenceData.startTimestamp, presenceData.endTimestamp] =
      presence.getTimestamps(
        Math.floor(player.currentTime),
        Math.floor(player.duration)
      );

    presenceData.details = document.querySelector(".header h3 a").textContent;
    presenceData.state =
      epNumber + document.querySelector(".sub-header h1").textContent;
    presenceData.smallImageKey = player.paused ? "pause" : "play";
    presenceData.smallImageText = player.paused
      ? (await strings).pause
      : (await strings).play;

    if (player.paused) {
      delete presenceData.startTimestamp;
      delete presenceData.endTimestamp;
    }

    presence.setActivity(presenceData);
  } else {
    presenceData.details = "Browsing...";
    presenceData.startTimestamp = Date.now();

    presence.setActivity(presenceData);
  }
});
