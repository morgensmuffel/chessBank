import { add, format, parseISO, startOfTomorrow } from 'date-fns';
import * as _ from 'lodash';


type Transaction = { date: Date, amount: number };
export const data2: Array<Transaction> = []

for (let i = 0; i < 1000; i++) {
    const transaction = {
        "date": new Date(Date.now() - Math.random() * (1000 * 60 * 60 * 24 * 365)),
        "amount": Math.random() * 200000 - 100000
    }
    data2.push(transaction)
}

type Start = Date;
type Finish = Date;
type DateIntervals = Array<[Start, Finish]>;

export const getOfWeek = () => {
    const dateDividers = [
        add(startOfTomorrow(), { days: -8}),
        add(startOfTomorrow(), { days: -7}),
        add(startOfTomorrow(), { days: -6}),
        add(startOfTomorrow(), { days: -5}),
        add(startOfTomorrow(), { days: -4}),
        add(startOfTomorrow(), { days: -3}),
        add(startOfTomorrow(), { days: -2}),
        add(startOfTomorrow(), { days: -1}),
        add(startOfTomorrow(), { days: -0}),
    ];

    const labelDividers = dateDividers.map((day) => format(day,'E'));
    const intervals = _.zip(_.initial(dateDividers), _.tail(dateDividers)) as DateIntervals;

    const transactionsInIntervals: Array<Array<Transaction>> = [

    ]

    const searchTransaction = (dateInterval: DateIntervals[number], transactions: Transaction[]) => {
        
    }

    //transactionInIntervals[0] =  

    const totalInIntervals = // array(8 = 7 days + 1 left most)
    // array[0] = expenses(150) / incomes(60) 
    // array[0] = {expenses: number, incomes: number}


    console.log({dateDividers, labelDividers, intervals})
}
getOfWeek()