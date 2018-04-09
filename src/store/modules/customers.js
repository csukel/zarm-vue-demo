export default {
    namespaced: true,
    state: {
        headers: [
            {
                text: 'Customer SAP Number',
                align: 'left',
                sortable: true,
                class: ['customColumnHeader'],
                value: 'customerId'
            },
            {
                text: 'Customer Name',
                align: 'left',
                sortable: true,
                value: 'customerName'
            },
            {
                text: 'Customer Balance',
                align: 'left',
                sortable : true,
                value: 'balance'
            },
            {
                text: 'Last Payment or Invoice',
                align: 'left',
                sortable : false,
                value: 'lastPayInvDate',
                width:''
            },
            {
                text: 'Last Contact',
                align: 'left'
            },
            {
                text: 'Type of Last Contact',
                align: 'left'
            },
            {
                text: 'Next Contact Date',
                align: 'left'
            },
            {
                text: 'Inurance on earliest Unpaid Invoice',
                align: 'left' 
            },
            {
                text: 'Age of earliest Unpaid Invoice',
                align : 'left'
            },
            {
                text: 'Other',
                align: 'left'
            },
            {
                text: 'Flag',
                align: 'left'
            }
        ],
        customers:[
            {
                customerId:'106123',
                customerName: 'Charalambous Andreas',
                balance: 10000,
                lastPayInvDate: '22/10/2017',
                lastContactDate: '05/01/18',
                typeOfLastContact: 'Call',
                nextContactDate : '05/02/18',
                insurance: 'Universal',
                ageOfEarliestUnpaidInv: 80,
                other: null,
                flag: 'green'
            },
            {
                customerId:'106874',
                customerName: 'Economou Georgia',
                balance: 9500,
                lastPayInvDate: '15/12/16',
                lastContactDate: '05/01/18',
                typeOfLastContact: '-',
                nextContactDate : '-',
                insurance: 'Private',
                ageOfEarliestUnpaidInv: 95,
                other: null,
                flag: 'yellow'
            },
            {
                customerId:'106543',
                customerName: 'Antreou Christos',
                balance: 9400,
                lastPayInvDate: '05/05/17',
                lastContactDate: '27/04/17',
                typeOfLastContact: 'Handed Invoice',
                nextContactDate : '12/12/17',
                insurance: 'CNP',
                ageOfEarliestUnpaidInv: 370,
                other: null,
                flag: null
            },
            {
                customerId:'107624',
                customerName: 'Anastasiou Maria',
                balance: 9200,
                lastPayInvDate: '07/09/17',
                lastContactDate: '-',
                typeOfLastContact: 'Paid',
                nextContactDate : '15/02/18',
                insurance: 'Private',
                ageOfEarliestUnpaidInv: 125,
                other: 'Passed Away',
                flag: 'red'
            },
            {
                customerId:'105685',
                customerName: 'Panayiotou Antreas',
                balance: 9100,
                lastPayInvDate: '05/10/16',
                lastContactDate: '-',
                typeOfLastContact: 'e/faced Invoice',
                nextContactDate : '-',
                insurance: 'Govermen.',
                ageOfEarliestUnpaidInv: null,
                other: null,
                flag: null
            },
            {
                customerId:'108586',
                customerName: 'Neophytou Antonis',
                balance: 19500,
                lastPayInvDate: '05/11/17',
                lastContactDate: '-',
                typeOfLastContact: '-',
                nextContactDate : '-',
                insurance: 'CNP',
                ageOfEarliestUnpaidInv: 360,
                other: null,
                flag: null
            },
        ]
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
}