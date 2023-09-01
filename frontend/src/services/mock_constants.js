export const getRandomRecord = () => {
    const idx = getRandomInt(0, tableData.length-1)
    return tableData[idx]
}

let key = -1
export const getNewKey = () => {
    key += 1
    return key
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const PAYMENT_ENUM = ['Pending', 'Approved', 'Declined', 'Refunded']

const tableData = [
    {
        id: 101,
        name: "John Smith",
        age: 25,
        height: 175,
        weight: 70,
        score1: 85,
        score2: 90,
        grade: "B",
        income: 45000,
        city: "New York",
        marked: null,
        status: {
            original: 'Approved',
            current: 'Approved',
        },
    },
    {
        id: 102,
        name: "Jane Doe",
        age: 32,
        height: 162,
        weight: 55,
        score1: 78,
        score2: 88,
        grade: "B+",
        income: 55500,
        city: "Los Angeles",
        marked: null,
        status: {
            original: 'Declined',
            current: 'Declined',
        },
    },
    {
        id: 103,
        name: "Robert Brown",
        age: 28,
        height: 180,
        weight: 80,
        score1: 92,
        score2: 95,
        grade: "A",
        income: 60200,
        city: "Chicago",
        marked: null,
        status: {
            original: 'Pending',
            current: 'Pending',
        },
    },
    {
        id: 104,
        name: "Lisa Johnson",
        age: 23,
        height: 158,
        weight: 48,
        score1: 70,
        score2: 82,
        grade: "C",
        income: 38900,
        city: "Houston",
        marked: null,
        status: {
            original: 'Pending',
            current: 'Pending',
        },
    },
    {
        id: 105,
        name: "Michael Wong",
        age: 30,
        height: 172,
        weight: 65,
        score1: 88,
        score2: 91,
        grade: "A-",
        income: 72800,
        city: "Miami",
        marked: null,
        status: {
            original: 'Refunded',
            current: 'Refunded',
        },
    },
    {
        id: 106,
        name: "Emily Lee",
        age: 27,
        height: 167,
        weight: 58,
        score1: 75,
        score2: 85,
        grade: "B",
        income: 49600,
        city: "San Francisco",
        marked: null,
        status: {
            original: 'Approved',
            current: 'Approved',
        },
    },
    {
        id: 107,
        name: "David Chen",
        age: 29,
        height: 185,
        weight: 75,
        score1: 89,
        score2: 93,
        grade: "A",
        income: 68700,
        city: "Seattle",
        marked: null,
        status: {
            original: 'Refuned',
            current: 'Refuned',
        },
    },
    {
        id: 108,
        name: "Sarah Kim",
        age: 31,
        height: 160,
        weight: 50,
        score1: 82,
        score2: 88,
        grade: "B+",
        income: 53400,
        city: "Boston",
        marked: null,
        status: {
            original: 'Pending',
            current: 'Pending',
        },
    },
    {
        id: 109,
        name: "James White",
        age: 26,
        height: 178,
        weight: 72,
        score1: 77,
        score2: 80,
        grade: "C",
        income: 41300,
        city: "Atlanta",
        marked: null,
        status: {
            original: 'Declined',
            current: 'Declined',
        },
    },
    {
        id: 110,
        name: "Olivia Liu",
        age: 24,
        height: 163,
        weight: 54,
        score1: 95,
        score2: 98,
        grade: "A+",
        income: 75600,
        city: "Dallas",
        marked: null,
        status: {
            original: 'Approved',
            current: 'Approved',
        },
    },
    {
        id: 111,
        name: "Alicia Siera",
        age: 38,
        height: 172,
        weight: 62,
        score1: 98,
        score2: 80,
        grade: "A",
        income: 80340,
        city: "Madrid",
        marked: null,
        status: {
            original: 'Refunded',
            current: 'Refunded',
        },
    },
]
