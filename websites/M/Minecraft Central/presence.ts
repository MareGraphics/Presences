const presence = new Presence({
    clientId: "693097839424831489"
  }),
  browsingTimestamp = Math.floor(Date.now() / 1000);
let user: HTMLElement | Element, thread: HTMLElement | Element;

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "mccentrallogo",
    startTimestamp: browsingTimestamp
  };

  if (document.location.hostname === "mccentral.org") {
    if (document.location.pathname === "/community/") {
      presenceData.details = "Viewing:";
      presenceData.state = "Home page";
    } else if (document.location.pathname === "/community/forums/") {
      presenceData.details = "Viewing:";
      presenceData.state = "Forums main page";
    } else if (document.location.pathname.includes("/add-reply"))
      presenceData.details = "Replying a thread";
    else if (document.location.pathname.includes("/threads/")) {
      thread = document.querySelector(".titleBar > h1");
      presenceData.details = "Viewing the thread:";
      presenceData.state = `"${(thread as HTMLElement).textContent}"`;
    } else if (document.location.pathname.includes("/announcements/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Annoucements";
    } else if (document.location.pathname.includes("/changelog/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Changelogs";
    } else if (document.location.pathname.includes("/newspaper/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Newspaper";
    } else if (document.location.pathname.includes("/faq/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "FAQ";
    } else if (document.location.pathname.includes("/bugs/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Bug Reports main page";
    } else if (document.location.pathname.includes("/forms/bug-reports.15/"))
      presenceData.details = "Reporting a bug";
    else if (document.location.pathname.includes("/support/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Support forums";
    } else if (document.location.pathname.includes("/apply/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Staff Application forums";
    } else if (
      document.location.pathname.includes("/forms/staff-application.5/")
    )
      presenceData.details = "Applying for staff";
    else if (
      document.location.pathname.includes(
        "/forms/previous-staff-application.7/"
      )
    )
      presenceData.details = "Applying for returning staff";
    else if (document.location.pathname.includes("/youtuber/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Youtuber Application forums";
    } else if (
      document.location.pathname.includes("/forms/youtuber-application.6/")
    )
      presenceData.details = "Applying for Youtuber";
    else if (document.location.pathname.includes("/reports/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Report Players forums";
    } else if (document.location.pathname.includes("/forms/report-players.2/"))
      presenceData.details = "Reporting a player";
    else if (document.location.pathname.includes("/reports-staff/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Report Staff forums";
    } else if (document.location.pathname.includes("/forms/report-staff.17/"))
      presenceData.details = "Reporting a staff member";
    else if (document.location.pathname.includes("/appeals/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Punishment Appeals forums";
    } else if (
      document.location.pathname.includes("/forms/punishment-appeal.1/")
    )
      presenceData.details = "Making a punishment appeal";
    else if (document.location.pathname.includes("/punishments/"))
      presenceData.details = "Searching for punishments";
    else if (document.location.pathname.includes("/general/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "General Discussion forums";
    } else if (document.location.pathname === "/community/forums/skyblock/") {
      presenceData.details = "Viewing:";
      presenceData.state = "Skyblock Discussion forums";
    } else if (document.location.pathname === "/community/forums/creative/") {
      presenceData.details = "Viewing:";
      presenceData.state = "Creative Discussion forums";
    } else if (document.location.pathname === "/community/forums/kitpvp/") {
      presenceData.details = "Viewing:";
      presenceData.state = "KitPvP Discussion forums";
    } else if (document.location.pathname === "/community/forums/survival/") {
      presenceData.details = "Viewing:";
      presenceData.state = "Survival Discussion forums";
    } else if (document.location.pathname === "/community/forums/prison/") {
      presenceData.details = "Viewing:";
      presenceData.state = "Prison Discussion forums";
    } else if (document.location.pathname === "/community/forums/factions/") {
      presenceData.details = "Viewing:";
      presenceData.state = "Factions Discussion forums";
    } else if (document.location.pathname === "/community/forums/minigames/") {
      presenceData.details = "Viewing:";
      presenceData.state = "Minigames Discussion forums";
    } else if (document.location.pathname.includes("/off-topic/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Off Topic forums";
    } else if (document.location.pathname.includes("/giveaways/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Giveaways forums";
    } else if (document.location.pathname.includes("/suggestions/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Server Suggestions forums";
    } else if (document.location.pathname.includes("/maps/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Map Submission forums";
    } else if (document.location.pathname.includes("/community-ticket/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Community Ticket forums";
    } else if (
      document.location.pathname.includes("/forms/community-ticket.18/")
    )
      presenceData.details = "Sending a Community Ticket";
    else if (document.location.pathname.includes("/staff/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Staff Members page";
    } else if (document.location.pathname.includes("/rules/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Rules page";
    } else if (document.location.pathname.includes("/vote/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Voting page";
    } else if (document.location.pathname === "/community/leaderboards/") {
      presenceData.details = "Viewing:";
      presenceData.state = "Leaderboards page";
    } else if (document.location.pathname.includes("/guilds/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Guilds leaderboards";
    } else if (document.location.pathname.includes("/survivalgames/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Survival Games leaderboards";
    } else if (document.location.pathname.includes("/skywars/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Skywars leaderboards";
    } else if (document.location.pathname.includes("/walls/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Speedy Walls leaderboards";
    } else if (document.location.pathname.includes("/ctf/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "CTF leaderboards";
    } else if (document.location.pathname.includes("/murder/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Murder Mayhem leaderboards";
    } else if (document.location.pathname.includes("/championbuilder/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Champion Builder leaderboards";
    } else if (document.location.pathname.includes("/cakewars/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Cakewars leaderboards";
    } else if (document.location.pathname.includes("/uhc/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "UHC leaderboards";
    } else if (
      document.location.pathname === "/community/leaderboards/skyblock/"
    ) {
      presenceData.details = "Viewing:";
      presenceData.state = "Skyblock leaderboards";
    } else if (
      document.location.pathname === "/community/leaderboards/survival/"
    ) {
      presenceData.details = "Viewing:";
      presenceData.state = "Survival leaderboards";
    } else if (
      document.location.pathname === "/community/leaderboards/factions/"
    ) {
      presenceData.details = "Viewing:";
      presenceData.state = "Factions leaderboards";
    } else if (
      document.location.pathname === "/community/leaderboards/prison/"
    ) {
      presenceData.details = "Viewing:";
      presenceData.state = "Prison leaderboards";
    } else if (
      document.location.pathname === "/community/leaderboards/kitpvp/"
    ) {
      presenceData.details = "Viewing:";
      presenceData.state = "KitPvP leaderboards";
    } else if (
      document.location.pathname === "/community/leaderboards/arenapvp/"
    ) {
      presenceData.details = "Viewing:";
      presenceData.state = "ArenaPvP leaderboards";
    } else if (document.location.pathname === "/community/account/")
      presenceData.details = "Changing personal details";
    else if (document.location.pathname.includes("/account/alerts")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Latest alerts";
    } else if (document.location.pathname === "/community/conversations/") {
      presenceData.details = "Viewing:";
      presenceData.state = "Conversations";
    } else if (document.location.pathname === "/community/conversations/add") {
      presenceData.details = "Starting a:";
      presenceData.state = "New conversation...";
    } else if (document.location.pathname.includes("/account/")) {
      presenceData.details = "Viewing:";
      presenceData.state = "Account details";
    } else if (document.location.pathname === "/community/watched/threads") {
      presenceData.details = "Viewing:";
      presenceData.state = "Unread watched threads";
    } else if (document.location.pathname === "/community/watched/forums") {
      presenceData.details = "Viewing:";
      presenceData.state = "Watched forums";
    } else if (document.location.pathname.includes("/members/")) {
      user = document.querySelector(".mainText > h1");
      presenceData.details = "Viewing:";
      presenceData.state = `${
        (user as HTMLElement).textContent
      }'s profile page`;
    } else if (document.location.pathname.includes("/search/search")) {
      presenceData.details = "Searching for:";
      presenceData.state = "No results.";
    } else if (document.location.pathname.includes("/search/"))
      presenceData.details = "Searching...";
  } else if (document.location.hostname === "buy.mccentral.org") {
    if (document.location.pathname === "/") {
      presenceData.details = "Viewing:";
      presenceData.state = "Store home page";
    } else if (document.location.pathname.includes("/category/91801")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Ranks";
    } else if (document.location.pathname.includes("/category/205563")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Coal Rank upgrades";
    } else if (document.location.pathname.includes("/category/205565")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Iron Rank upgrades";
    } else if (document.location.pathname.includes("/category/205567")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Gold Rank upgrades";
    } else if (document.location.pathname.includes("/category/205569")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Lapis Rank upgrades";
    } else if (document.location.pathname.includes("/category/205570")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Emerald Rank upgrades";
    } else if (document.location.pathname.includes("/category/205571")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Diamond Rank upgrades";
    } else if (document.location.pathname.includes("/category/512622")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Bedrock Rank upgrades";
    } else if (document.location.pathname.includes("/category/860358")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Legend Rank upgrades";
    } else if (document.location.pathname.includes("/category/519352")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Keys";
    } else if (document.location.pathname.includes("/category/462418")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Effects";
    } else if (document.location.pathname.includes("/category/676785")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Pocketpals";
    } else if (document.location.pathname.includes("/category/722423")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Boosters";
    } else if (document.location.pathname.includes("/category/1080289")) {
      presenceData.details = "Checking on Store:";
      presenceData.state = "Gift Cards";
    } else if (document.location.pathname.includes("/checkout"))
      presenceData.details = "Checkout on Store";
  }

  if (presenceData.details) presence.setActivity(presenceData);
  else presence.setActivity();
});
