export const marked_query = {
    $match: {
        $expr: {
            $ne: ['$status.original', '$status.current'],
            $ne: ['$marked', null]
        }
    }
}

export const unchanged_query = {
    $match: {
        $expr: {
            $eq: ['$status.original', '$status.current'],
            $eq: ['$marked', null]
        }
    }
}