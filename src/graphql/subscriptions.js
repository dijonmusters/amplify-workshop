/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCoin = `subscription OnCreateCoin {
  onCreateCoin {
    id
    clientId
    name
    symbol
    price
  }
}
`;
export const onUpdateCoin = `subscription OnUpdateCoin {
  onUpdateCoin {
    id
    clientId
    name
    symbol
    price
  }
}
`;
export const onDeleteCoin = `subscription OnDeleteCoin {
  onDeleteCoin {
    id
    clientId
    name
    symbol
    price
  }
}
`;
export const onCreateNote = `subscription OnCreateNote($owner: String!) {
  onCreateNote(owner: $owner) {
    id
    title
    description
    owner
  }
}
`;
export const onUpdateNote = `subscription OnUpdateNote($owner: String!) {
  onUpdateNote(owner: $owner) {
    id
    title
    description
    owner
  }
}
`;
export const onDeleteNote = `subscription OnDeleteNote($owner: String!) {
  onDeleteNote(owner: $owner) {
    id
    title
    description
    owner
  }
}
`;
