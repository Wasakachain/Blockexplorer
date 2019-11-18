export const transactionInfoLabels = {
  'from': 'From',
  'to': 'To',
  'value': 'Value',
  'fee': 'Fee',
  'dateCreated': 'Date Created',
  'data': 'Data',
  'senderPubKey': 'Sender Public Key',
  'transactionDataHash': 'Transaction Data Hash',
  'minedInBlockIndex': 'Mined In Block',
  'isCoinbase': 'Is Coin base'
};

export const transactionProperties = [
  {
    property: 'transactionDataHash',
    baseUrl: '/transaction/'
  },
  {
    property: 'minedInBlockIndex',
    baseUrl: '/block/'
  },
  {
    property: 'dateCreated',
  },
  {
    property: 'from',
    baseUrl: '/address/'
  },
  {
    property: 'to',
    baseUrl: '/address/'
  },
  {
    property: 'value',
  },
  {
    property: 'fee',
  }
];

export const fullTransactionProperties = [
  {
    property: 'from',
    label: 'From',
    baseUrl: '/address/'
  },
  {
    property: 'to',
    label: 'To',
    baseUrl: '/address/'
  },
  {
    property: 'value',
    label: 'Value',
  },
  {
    property: 'fee',
    label: 'Fee',
  },
  {
    property: 'dateCreated',
    label: 'Date Created',
  },
  {
    property: 'data',
    label: 'Data',
  },
  {
    property: 'senderPubKey',
    label: 'Sender Public Key',
  },
  {
    property: 'transactionDataHash',
    label: 'Transaction Data Hash',
  },
  {
    property: 'minedInBlockIndex',
    label: 'Mined In Block',
    baseUrl: '/block/'
  },
  {
    property: 'isCoinbase',
    label: 'Is Coin base',
  },
];