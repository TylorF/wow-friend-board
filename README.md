## WoW Friend Board

#### Track your friends, guildies, roomates, and enemies and see how their characters compare in level, item level, and more!

- Tracking your roomates and friends with new content or new characters to keep track of everyone's progress
- Keep track of people you're leveling with to keep up with them
- Track friends who you are waiting to get to max level
- Track your guild's item levels and watch your progression through content
- Track PvP stats and see how much your friends fight for their faction

TODO: Promo pics

### Usage

- Go to https://tylorf.github.io/wow-friend-board
- Click `Settings` and input your [Blizzard API key](https://dev.battle.net/)
- Click `Characters` and add some characters
- Click on a character image to expand the info card

### Caveats

The Blizzard WoW Community API only updates character info when a character logs out, so unfortunately you can't see the data change in realtime.

## Motivation

The new expansion just came out and after asking roomates and friends what level they were a few times I got curious and wondered what kind of data API exists for WoW, finding Blizzard's very nice WoW Community API.

With this curiosity and an itch to start working on some React after having done some lessons I worked to try and make a little app to display my roomates' and friends' levels in a nice little dashboard.

This project is my experimentation with react and using it to learn and expand my experience with the technology, while hopefully providing a little benefit to some others out there.

## Running it locally

Should be pretty easy, I use yarn and that's the only supported currently

- `git clone git@github.com:TylorF/wow-friend-board.git`
- `yarn install`
- `yarn start`

Shouldn't give you any trouble. Use as in the `Usage` section above

## Contributing

Contributions are welcome. There's no defined framework for it right now, so just ensure that:

- You've run Prettier
- ESLint has no complaints

And make a pull request with the reasoning and any details.

I try to make issues for things I want to improve on, so you can help with those, or drop me a line if you've got an idea or want something to work on.

#### Made with <3 by Tylor Froese

TODO: Add badges of tech
