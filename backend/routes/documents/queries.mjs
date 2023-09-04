export const paginate = ({ page, size }) => {
  const skip = page * size - size
  return [
    { '$skip': skip },
    { '$limit': size }
  ]
}

export const marked_query = {
  '$match': {
    '$expr': {
      '$or': [
        { '$ne': ['$status.original', '$status.current'] },
        { '$ne': ['$marked', null] },
      ]
    }
  }
}


export const unchanged_query = {
  '$match': {
    '$expr': {
      '$and': [
        { '$eq': ['$status.original', '$status.current'] },
        { '$eq': ['$marked', null] },
      ]
    }
  }
}
