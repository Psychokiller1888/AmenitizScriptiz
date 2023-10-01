# Amenitiz.io Scriptiz

A collection of all my Scripty scripts for Amenitiz.io

## How to use

- Install the `Scripty` plugin: [Scripty - Javascript Injector - Chrome / Edge](https://chrome.google.com/webstore/detail/scripty-javascript-inject/milkbiaeapddfnpenedfgbfdacpbcbam).
- Three choices, directly using links found below, through the Scripty store or manually:
  - Direct link:
    - Click on the links shared with the script description lower on this page.
  - Through the Scripty store:
    - Open the plugin by clicking the freshly added icon and click on `view all`.
    - Head on `Script Store`.
    - Search for `Amenitiz`.
    - Click on `Install` for the plugins you want to use.
  - Manually
    - Open the plugin by clicking the freshly added icon and click on `view all`.
    - Go into `My Scripts`.
    - Click on the `+ Add New Script` on the top right of the screen.
    - Name the plugin whatever you want.
    - Copy and paste the `Javascript Code` using the plugin file you wish to integrate.
    - Set the detection rules as instructed below on this page, in the `install` instructions.
    - Click on `Create Script`.
    - Reload your Amenitiz admin console by pressing `F5` (or `CTRL+F5`, to reload the browser's cache)
- Once you have installed a script, you can go in `My Scripts`.
- If you want to configure a `User setting` detailed below, click on the name of the script you want to configure, a side panel will pop on the right.
- In the `Javascript Code` search for `// USER SETTING` and change the values to fit your needs and tastes.
- If you are not Javascript savy, **do not** touch anything coming after `// DANGER ZONE`.
- If for any reason you want to disable a script, under `My Scripts` you have a `toggle` to do so.
- If for any reason you want to remove a script, under `My Scripts` you can click on the `trash bin` icon and confirm the deletion.
- If you have made changes to configuration, and you want to use the plugin on different computers, you can at all time click on the `share icon` which will give you a link to use on your other computers.

## Why this repository?

Because the update process of installed Scripty scripts is not easy, and I want to keep a trace of my plugins somewhere safe.

## Is this free?

Yeah... And you can reuse it, mod it, etc. etc. etc...

## Are you Amenitiz, with Amenitiz or working for Amenitiz?

Nope, I'm just a happy Amenitiz customer, using Amenitiz for my hotel, who happens to code a lot as well. At no point Amenitiz.io can be held responsible or contacted for any support, problems, bugs or anything related to these scripts.

## Plugins available

### Payment symbol

#### Description

For the calendar, in weekly view mode. Hide or change the color of the dollar symbol on the room tiles. By default, it is hidden for unpaid rooms.

#### Install

https://scripty.abhisheksatre.com/#/share/script_16297891068

*Run script if `URL` `Matches (regex)` Following input `/^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/booking-manager\/calendar$/gm` Trigger `Automatically` `Before page load`*

#### User settings


| Variable                                 | Type       | Description                                                                                                                        |
| ------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| scripty_symbol_hideDollarSymbolWhenUpaid | true/false | Choose to hide or show the dollar symbol for unpaid rooms                                                                          |
| scripty_symbol_newColorToApplyWhenUnpaid | color      | Apply a different color to the dollar symbol of unpaid rooms. Value can be a text color, an HTML color code, an RGB or RGBA object |

### Highlight my days

#### Description

For the calendar in both view modes. Mark some days on your calendar, for a better visualisation of the weeks.

#### Install

https://scripty.abhisheksatre.com/#/share/script_1630214388951

*Run script if `URL` `Matches (regex)` Following input `/^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/booking-manager\/calendar$/gm` Trigger `Automatically` `Before page load`*

#### User settings


| Variable                         | Type   | Description                                                                                                                     |
| ---------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| scripty_highlight_highlightColor | color  | The color for the highlight. Value can be a text color, an HTML color code, an RGB or RGBA object                               |
| scripty_highlight_highlights     | object | Define the days you want to highlight here, for every month. Rename the month name for your language. Example for english below |

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

This would mark every day of the week in January, mark wednesday and thursday in february, thursday in March, nothing from April to July, wednesday and thursday from August to December.

**Do not use capital letters or any accent**

### Pimp my colors

#### Description

For the calendar in both view modes. Change the room tile background colors according to their source.

#### Install

https://scripty.abhisheksatre.com/#/share/script_1630143678032

*Run script if `URL` `Matches (regex)` Following input `/^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/booking-manager\/calendar$/gm` Trigger `Automatically` `Before page load`*

#### User settings


| Variable                  | Type  | Description                                                          |
| --------------------------- | ------- | ---------------------------------------------------------------------- |
| scriptyModColors_amenitiz | color | Value can be a text color, an HTML color code, an RGB or RGBA object |
| scriptyModColors_booking  | color | Value can be a text color, an HTML color code, an RGB or RGBA object |
| scriptyModColors_expedia  | color | Value can be a text color, an HTML color code, an RGB or RGBA object |
| scriptyModColors_phone    | color | Value can be a text color, an HTML color code, an RGB or RGBA object |

### Visually group bookings

#### Description

For the calendar in both view modes. Add a 3d effect to room tiles to make the one being hovered by the mouse stand out visually. When hovering over a room tied to a multiroom booking, all the rooms belonging to that booking will pop out, making it easier to spot groups

#### Install

https://scripty.abhisheksatre.com/#/share/script_1630145171040

*Run script if `URL` `Matches (regex)` Following input `/^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/booking-manager\/calendar$/gm` Trigger `Automatically` `Before page load`*

#### User settings

Currently none

### Hide my money

#### Description

Hide the property revenue on the dashboard

#### Install

https://scripty.abhisheksatre.com/#/share/script_1630317419511

*Run script if `URL` `Matches (regex)` Following input `/^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin$/gm` Trigger `Automatically` `On Page load`*

#### User settings


| Variable                            | Type   | Description                                                                                                                              |
| ------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| scripty_HideMyMoney_containerHeight | string | The height of the container in hidden mode. If set to 0px, nothing will show! At 60px only the title is visible and expands when clicked |

### 

### Hide useless comments

#### Description

On the dashboard, hides useless comments on bookings. We are 100% non-smoking hotel, but the comments from Booking.com always say "Non-Smoking" per example.

#### Install

https://scripty.abhisheksatre.com/#/share/script_1630322345743

Run script if `URL` `Matches (regex)` Following input `/^http[s]:\/\/.*\.amenitiz\.io\/.*\/(?:admin|admin\/reservations)$/gm` Trigger `Automatically` `On Page load`

#### User settings


| Variable                           | Type | Description                            |
| ------------------------------------ | ------ | ---------------------------------------- |
| scripty_hideUselessComments_filter | list | List of words or phrases to be removed |

### Fix textarea

### Description

For some reason Amenitiz fixes textarea max width to 256px, making it VERY difficult to use them for code. Let's fix this globally!

### Install

https://scripty.abhisheksatre.com/#/share/script_1630337277497

*Run script if `URL` `Matches (regex)` Following input `/^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/.*$/gm` Trigger `Automatically` `On Page load`*

#### User settings

None at this time

### Negative charges

### Description

Dudes in Europe are not allowed negative charges, but we need them to deduct services our customers did no use...

### Install

https://scripty.abhisheksatre.com/#/share/script_1630643532770

*Run script if `URL` `Matches (regex)` Following input `/^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/.*$/gm` Trigger `Automatically` `Before Page load`*

#### User settings

None at this time

### Add children

### Description

Adds missing children info on booking tiles

### Install

https://scripty.abhisheksatre.com/#/share/script_1630643571057

*Run script if `URL` `Matches (regex)` Following input `/^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/booking-manager\/.*$/gm` Trigger `Automatically` `On Page load`*

#### User settings

None at this time

### Drag and drop restaurant menu

### Description

Allows reordering items on the restaurant menu page

### Install

https://scripty.abhisheksatre.com/#/share/script_1631356833330

*Run script if `URL` `Matches (regex)` Following input `/^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/builder\/.*$/gm` Trigger `Automatically` `On Page load`*

#### User settings

None at this time

### Lang and money

### Description

Hundreds of currencies to choose from, hundreds of languages... That's just taunting the devil for errors... Disable what you never need under the customer infos to speed up the manual booking process

### Install

https://scripty.abhisheksatre.com/#/share/script_1666502662016

*Run script if `URL` `Matches (regex)` Following input `/^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/planning\/calendar/gm` Trigger `Automatically` `On Page load`*

#### User settings

| Variable                            | Type  | Description                |
| ------------------------------------- |-------|----------------------------|
| scripty_langAndMoney_allowed_currencies | array | List of allowed currencies |
| scripty_langAndMoney_allowed_languages | array | List of allowed languages  |

### Payment types

### Description

Too many payment types when adding a transaction leads to human error. Let's solve this by getting rid of payment types you don't want displayed

### Install

https://scripty.abhisheksatre.com/#/share/script_1696141033741

*Run script if `URL` `Matches (regex)` Following input `/^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/planning\/calendar/gm` Trigger `Automatically` `On Page load`*

#### User settings

| Variable                            | Type  | Description                   |
| ------------------------------------- |-------|-------------------------------|
| scripty_paymentTypes_allowed_payment_types | array | List of allowed payment types |
