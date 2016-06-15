const components = [
  'AnonymousUser',
  'BankIcon',
  'CopyLink',
  'Gift',
  'GiftLight',
  'LuggageCart',
  'Platforms',
  'Triangle',
  'Audience',
  'Delete',
  'GmailLogo',
  'MembersSolid',
  'PlusCross',
  'TwitterLogo',
  'Camera',
  'Dots',
  'Group',
  'Money',
  'SellOptions',
  'UsersTwo',
  'Cards',
  'Duplicate',
  'GroupCircled',
  'OneLeft',
  'Tickets',
  'Star',
  'Phone',
  'WhatsAppLogo',
  'Checkmark',
  'EnvelopeFlying',
  'GroupSolid',
  'Options',
  'TagFriend',
  'ChevronIcon',
  'EnvelopeOpened',
  'ItemAdd',
  'PaperAirplaneImage',
  'TagFriendSolid',
  'Clipboard',
  'FacebookLogo',
  'ItemRemove',
  'Pencil',
  'TiltLogo',
  'Clock',
  'FacebookMessengerLogo',
  'Lock',
  'PermissionEmailEnvelope',
  'TiltLogoOutline',
  'Close',
  'FilmStrip',
  'LockSolid',
  'PermissionFriends',
  'TiltLogoTextImage',
  'FullScreen',
  'Free',
  'ClockMinimal',
  'Heads',
  'SendMessageEnvelope',
  'FacebookVerified',
  'Refund',
  'PlusThin',
  'UserChecked',
  'MoneyStack',
  'CalendarRefresh',
  'ThumbUp',
  'ThumbDown',
  'FormattingBold',
  'FormattingBullets',
  'FormattingItalic',
  'FormattingNumbers',
  'FormattingUnderline',
  'TShirt',
  'Bullhorn',
  'UserGroup',
  'Bell',
  'BellAngled',
  'EnvelopeMoney',
  'CheckmarkThin',
  'Envelope',
  'Download',
  'DuplicateEmpty',
  'Student',
  'CheckmarkCircle',
  'Megaphone',
  'PresentationChart',
  'Ticket',
  'Stopwatch',
  'SpeechBubble',
];

module.exports = components.reduce(function(exports, componentName) {
  exports[componentName] = require(`./components/${componentName}`);
  return exports;
}, {});
