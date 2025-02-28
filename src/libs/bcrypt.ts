import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export const encrypt = async (password: string, salt = saltOrRounds) => {
  return await bcrypt.hash(password, salt);
};

export const compare = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};


export const validIcons = [
  'pi-address-book', 'pi-align-center', 'pi-align-justify', 'pi-align-left', 'pi-align-right',
  'pi-amazon', 'pi-android', 'pi-angle-double-down', 'pi-angle-double-left', 'pi-angle-double-right',
  'pi-angle-double-up', 'pi-angle-down', 'pi-angle-left', 'pi-angle-right', 'pi-angle-up',
  'pi-apple', 'pi-arrow-circle-down', 'pi-arrow-circle-left', 'pi-arrow-circle-right', 'pi-arrow-circle-up',
  'pi-arrow-down', 'pi-arrow-down-left', 'pi-arrow-down-left-and-arrow-up-right-to-center', 'pi-arrow-down-right',
  'pi-arrow-left', 'pi-arrow-right', 'pi-arrow-right-arrow-left', 'pi-arrow-up', 'pi-arrow-up-left',
  'pi-arrow-up-right', 'pi-arrow-up-right-and-arrow-down-left-from-center', 'pi-arrows-alt', 'pi-arrows-h',
  'pi-arrows-v', 'pi-asterisk', 'pi-at', 'pi-backward', 'pi-ban', 'pi-barcode', 'pi-bars', 'pi-bell',
  'pi-bell-slash', 'pi-bitcoin', 'pi-bolt', 'pi-book', 'pi-bookmark', 'pi-bookmark-fill', 'pi-box',
  'pi-briefcase', 'pi-building', 'pi-building-columns', 'pi-bullseye', 'pi-calculator', 'pi-calendar',
  'pi-calendar-clock', 'pi-calendar-minus', 'pi-calendar-plus', 'pi-calendar-times', 'pi-camera', 'pi-car',
  'pi-caret-down', 'pi-caret-left', 'pi-caret-right', 'pi-caret-up', 'pi-cart-arrow-down', 'pi-cart-minus',
  'pi-cart-plus', 'pi-chart-bar', 'pi-chart-line', 'pi-chart-pie', 'pi-chart-scatter', 'pi-check', 'pi-check-circle',
  'pi-check-square', 'pi-chevron-circle-down', 'pi-chevron-circle-left', 'pi-chevron-circle-right',
  'pi-chevron-circle-up', 'pi-chevron-down', 'pi-chevron-left', 'pi-chevron-right', 'pi-chevron-up', 'pi-circle',
  'pi-circle-fill', 'pi-circle-off', 'pi-circle-on', 'pi-clipboard', 'pi-clock', 'pi-clone', 'pi-cloud',
  'pi-cloud-download', 'pi-cloud-upload', 'pi-code', 'pi-cog', 'pi-comment', 'pi-comments', 'pi-compass', 'pi-copy',
  'pi-credit-card', 'pi-crown', 'pi-database', 'pi-delete-left', 'pi-desktop', 'pi-directions', 'pi-directions-alt',
  'pi-discord', 'pi-dollar', 'pi-download', 'pi-eject', 'pi-ellipsis-h', 'pi-ellipsis-v', 'pi-envelope', 'pi-equals',
  'pi-eraser', 'pi-ethereum', 'pi-euro', 'pi-exclamation-circle', 'pi-exclamation-triangle', 'pi-expand',
  'pi-external-link', 'pi-eye', 'pi-eye-slash', 'pi-face-smile', 'pi-facebook', 'pi-fast-backward', 'pi-fast-forward',
  'pi-file', 'pi-file-arrow-up', 'pi-file-check', 'pi-file-edit', 'pi-file-excel', 'pi-file-export', 'pi-file-import',
  'pi-file-o', 'pi-file-pdf', 'pi-file-plus', 'pi-file-word', 'pi-filter', 'pi-filter-fill', 'pi-filter-slash',
  'pi-flag', 'pi-flag-fill', 'pi-folder', 'pi-folder-open', 'pi-folder-plus', 'pi-forward', 'pi-gauge', 'pi-gift',
  'pi-github', 'pi-globe', 'pi-google', 'pi-graduation-cap', 'pi-hammer', 'pi-hashtag', 'pi-headphones', 'pi-heart',
  'pi-heart-fill', 'pi-history', 'pi-home', 'pi-hourglass', 'pi-id-card', 'pi-image', 'pi-images', 'pi-inbox',
  'pi-indian-rupee', 'pi-info', 'pi-info-circle', 'pi-instagram', 'pi-key', 'pi-language', 'pi-lightbulb', 'pi-link',
  'pi-linkedin', 'pi-list', 'pi-list-check', 'pi-lock', 'pi-lock-open', 'pi-map', 'pi-map-marker', 'pi-mars',
  'pi-megaphone', 'pi-microchip', 'pi-microchip-ai', 'pi-microphone', 'pi-microsoft', 'pi-minus', 'pi-minus-circle',
  'pi-mobile', 'pi-money-bill', 'pi-moon', 'pi-objects-column', 'pi-palette', 'pi-paperclip', 'pi-pause',
  'pi-pause-circle', 'pi-paypal', 'pi-pen-to-square', 'pi-pencil', 'pi-percentage', 'pi-phone', 'pi-pinterest',
  'pi-play', 'pi-play-circle', 'pi-plus', 'pi-plus-circle', 'pi-pound', 'pi-power-off', 'pi-prime', 'pi-print',
  'pi-qrcode', 'pi-question', 'pi-question-circle', 'pi-receipt', 'pi-reddit', 'pi-refresh', 'pi-replay', 'pi-reply',
  'pi-save', 'pi-search', 'pi-search-minus', 'pi-search-plus', 'pi-send', 'pi-server', 'pi-share-alt', 'pi-shield',
  'pi-shop', 'pi-shopping-bag', 'pi-shopping-cart', 'pi-sign-in', 'pi-sign-out', 'pi-sitemap', 'pi-slack',
  'pi-sliders-h', 'pi-sliders-v', 'pi-sort', 'pi-sort-alpha-down', 'pi-sort-alpha-down-alt', 'pi-sort-alpha-up',
  'pi-sort-alpha-up-alt', 'pi-sort-alt', 'pi-sort-alt-slash', 'pi-sort-amount-down', 'pi-sort-amount-down-alt',
  'pi-sort-amount-up', 'pi-sort-amount-up-alt', 'pi-sort-down', 'pi-sort-down-fill', 'pi-sort-numeric-down',
  'pi-sort-numeric-down-alt', 'pi-sort-numeric-up', 'pi-sort-numeric-up-alt', 'pi-sort-up', 'pi-sort-up-fill',
  'pi-sparkles', 'pi-spinner', 'pi-spinner-dotted', 'pi-star', 'pi-star-fill', 'pi-star-half', 'pi-star-half-fill',
 
];

