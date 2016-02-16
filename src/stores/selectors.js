'use strict';

export default function getMatchingItems(items, filter) {
  return items.filter(item => item.title.match(`^.*${filter}.*$`));
}
