export const blockInfoLabels = {
  'index': 'Index',
  'difficulty': 'Difficulty',
  'minedBy': 'Mined By',
  'prevBlockHash': 'Previous Block Hash',
  'blockDataHash': 'Block Data Hash',
  'dateCreated': 'Date Created',
  'nonce': 'Nonce',
  'blockHash': 'Block Hash'
};

export const blocksProperties = [
  {
    property: 'index',
    baseUrl: '/block/'
  },
  {
    property: 'blockDataHash',
  },
  {
    property: 'blockHash',
  },
  {
    property: 'dateCreated',
  },
  {
    property: 'difficulty',
  },
  {
    property: 'minedBy',
    baseUrl: '/address/'
  },
  {
    property: 'nonce',
  },
  {
    property: 'prevBlockHash',
  },
];

export const tableHeader = [
  'Index',
  'Block Data Hash',
  'Block Hash',
  'Age',
  'Difficulty',
  'Mined By',
  'Nonce',
  'Previous Block Hash',
  'Transactions'
];
