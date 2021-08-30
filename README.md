# Amenitiz.io Scriptiz

A collection of all my Scripty scripts for Amenitiz.io

## How to use

- Install the `Scripty` plugin: [Scripty - Javascript Injector - Chrome / Edge](https://chrome.google.com/webstore/detail/scripty-javascript-inject/milkbiaeapddfnpenedfgbfdacpbcbam).
- Two choices, either directly using links found below or through the Scripty store:
  - Direct link:
    - Click on the links shared with the script description lower on this page.
  - Through the Scripty store:
    - Open the plugin by clicking the freshly added icon and click on `view all`.
    - Head on `Script Store`.
    - Search for `Amenitiz`.
    - Click on `Install` for the plugins you want to use.
- Once you have installed a script, you can go in `My Scripts`.
- If you want to configure a `User setting` detailed below, click on the name of the script you want to configure, a side panel will pop on the right.
- In the `Javascript Code` search for `// USER SETTING` and change the values to fit your needs and tastes.
- If you are not Javascript savy, **do not** touch anything coming after `// DANGER ZONE`.
- If for any reason you want to disable a script, under `My Scripts` you have a `toggle` to do so.
- If for any reason you want to remove a script, under `My Scripts` you can click on the `trash bin` icon and confirm the deletion.
- If you have made changes to configuration and you want to use the plugin on different computers, you can at all time click on the `share icon` which will give you a link to use on your other computers.

## Why this repository?

Because the update process of installed Scripty scripts is not easy and I want to keep a trace of my plugins somewhere safe.

## Is this free?

Yeah... And you can reuse it, mod it etc etc etc...

## Are you Amenitiz, with Amenitiz or working for Amenitiz?

Nope, I'm just a happy Amenitiz customer using Amenitiz for my hotel who happens to code a lot as well. At no point Amenitiz.io can be held responsible or contacted for any support, problems, bugs or anything related to these scripts.

## Plugins available

### Payment symbol

#### Description

For the calendar, in weekly view mode. Hide or change the color of the dollar symbol on the room tiles. By default it is hidden for unpaid rooms.

#### Install

https://scripty.abhisheksatre.com/#/share/script_1629789106831

#### User settings

`scripty_symbol_hideDollarSymbolWhenUpaid` true/false: Choose to hide or show the dollar symbol for unpaid rooms
`scripty_symbol_newColorToApplyWhenUnpaid` color: Apply a different color to the dollar symbol of unpaid rooms. Value can be a text color, an HTML color code, a RGB or RGBA object

### Highlight my days

#### Description

For the calendar in both view modes. Mark some days on your calendar, for a better visualisation of the weeks.

#### Install

https://scripty.abhisheksatre.com/#/share/script_1630214388951

#### User settings

`scripty_highlight_highlightColor` color: The color for the highlight. Value can be a text color, an HTML color code, a RGB or RGBA object
`scripty_highlight_highlights` object: Define the days you want to highlight here, for every month. Rename the month name for your language. Example for english:

```js
const scripty_highlight_highlights = {
	'january': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
	'february': ['wednesday', 'thursday'],
	'march': ['thursday'],
	'april': [],
	'may': [],
	'june': [],
	'july': [],
	'august': ['wednesday', 'thursday'],
	'september': ['wednesday', 'thursday'],
	'october': ['wednesday', 'thursday'],
	'november': ['wednesday', 'thursday'],
	'december': ['wednesday', 'thursday']
}
```

This would mark everyday of the week in january, mark wednesday and thursday in february, thursday in march, nothing from april to july, wednesday and thursday from august to december.

**Do not use capital letters or any accent**

### Pimp my colors

#### Description

For the calendar in both view modes. Change the room tile background colors according to their source.

#### Install

https://scripty.abhisheksatre.com/#/share/script_1630143678032

#### User settings

`scriptyModColors_amenitiz` color: Value can be a text color, an HTML color code, a RGB or RGBA object
`scriptyModColors_booking` color: Value can be a text color, an HTML color code, a RGB or RGBA object
`scriptyModColors_expedia` color: Value can be a text color, an HTML color code, a RGB or RGBA object
`scriptyModColors_phone` color: Value can be a text color, an HTML color code, a RGB or RGBA object

### Visually group bookings

#### Description

For the calendar in both view modes. Add a 3d effect to room tiles to make the one being hovered by the mouse stand out visually. When hovering over a room tied to a multi room booking, all the rooms belonging to that booking will pop out, making it easier to spot groups

#### Install

https://scripty.abhisheksatre.com/#/share/script_1630145171040

#### User settings

Currently none

### Hide my money

#### Description

Hide the property revenue on the dashboard

#### Install

https://scripty.abhisheksatre.com/#/share/script_1630317419511

#### User settings

`scripty_HideMyMoney_containerHeight` 75px: The height of the container in hidden mode. If set to 0px, nothing will show! At 75px only the title is visible and expands when clicked
