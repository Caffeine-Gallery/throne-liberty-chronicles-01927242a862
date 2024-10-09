import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
  // Types
  type BlogPost = {
    title: Text;
    content: Text;
    imageUrl: Text;
  };

  type Weapon = {
    name: Text;
    description: Text;
  };

  // State
  stable var blogPosts : [BlogPost] = [
    {
      title = "Throne and Liberty: A New MMORPG Adventure";
      content = "Throne and Liberty is an upcoming MMORPG that promises to revolutionize the genre. With its stunning graphics, immersive gameplay, and vast open world, players will embark on epic quests and engage in thrilling battles. The game features a unique class-free progression system, allowing players to adapt their playstyle on the fly.";
      imageUrl = "https://example.com/throne_and_liberty_main.jpg";
    }
  ];

  stable var weapons : [Weapon] = [
    { name = "Excalibur"; description = "Legendary sword of immense power" },
    { name = "Thunderbolt Staff"; description = "Magical staff that harnesses lightning" },
    { name = "Shadowblade"; description = "Stealthy dagger for swift assassinations" },
    { name = "Dragonheart Bow"; description = "Long-range bow infused with dragon essence" },
    { name = "Titan's Hammer"; description = "Massive warhammer that shakes the earth" }
  ];

  // Query calls
  public query func getBlogPosts() : async [BlogPost] {
    blogPosts
  };

  public query func getWeapons() : async [Weapon] {
    weapons
  };
}
